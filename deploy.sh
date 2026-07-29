#!/usr/bin/env bash
# deploy.sh — build and deploy eltrm.com to GitHub Pages
#
# Usage:
#   ./deploy.sh              — build + push current branch
#   ./deploy.sh --dry-run    — build only, do not push
#   ./deploy.sh --branch main — push to a specific branch (default: current)
#
# Prerequisites: git, node >= 22, npm

set -euo pipefail

# ── Config ────────────────────────────────────────────────────────────────────
SITE_URL="https://eltrm.com"
BUILD_DIR="dist"
DRY_RUN=false
TARGET_BRANCH=""

# ── Argument parsing ──────────────────────────────────────────────────────────
for arg in "$@"; do
  case $arg in
    --dry-run) DRY_RUN=true ;;
    --branch=*) TARGET_BRANCH="${arg#--branch=}" ;;
    *) echo "Unknown argument: $arg" && exit 1 ;;
  esac
done

if [[ -z "$TARGET_BRANCH" ]]; then
  TARGET_BRANCH=$(git rev-parse --abbrev-ref HEAD)
fi

# ── Helpers ───────────────────────────────────────────────────────────────────
step() { echo; echo "▶  $*"; }
ok()   { echo "   ✓ $*"; }
fail() { echo "   ✗ $*" >&2; exit 1; }

# ── Pre-flight ────────────────────────────────────────────────────────────────
step "Pre-flight checks"
command -v node >/dev/null || fail "node not found"
command -v npm  >/dev/null || fail "npm not found"
NODE_VER=$(node --version | sed 's/v//')
MAJOR=${NODE_VER%%.*}
(( MAJOR >= 22 )) || fail "Node >= 22 required, found $NODE_VER"
ok "Node $NODE_VER"

# Warn if working tree has uncommitted changes
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "   ⚠  Working tree has uncommitted changes — they will NOT be included."
fi

# ── Install ───────────────────────────────────────────────────────────────────
step "Installing dependencies"
npm ci --prefer-offline 2>&1 | grep -E "added|updated|audited|warn" || true
ok "Dependencies ready"

# ── QR code ───────────────────────────────────────────────────────────────────
step "Generating QR code"
ASTRO_TELEMETRY_DISABLED=1 node scripts/generate-qr.mjs
ok "QR code written to public/assets/img/qr-download.png"

# ── Build ─────────────────────────────────────────────────────────────────────
step "Building site"
ASTRO_TELEMETRY_DISABLED=1 npx astro build
ok "Built to $BUILD_DIR/"

# ── Checks ────────────────────────────────────────────────────────────────────
step "Running content checks"
node scripts/check-claims.mjs
node scripts/check-forbidden-terms.mjs
ok "All checks passed"

# Page count
PAGE_COUNT=$(find "$BUILD_DIR" -name "*.html" | wc -l | tr -d ' ')
ok "$PAGE_COUNT HTML pages built"

# ── Done (dry run) ────────────────────────────────────────────────────────────
if [[ "$DRY_RUN" == "true" ]]; then
  echo
  echo "✓  Dry run complete. Build is in $BUILD_DIR/. Nothing pushed."
  echo "   Preview locally with: ASTRO_TELEMETRY_DISABLED=1 npx astro preview"
  exit 0
fi

# ── Push ─────────────────────────────────────────────────────────────────────
step "Pushing branch '$TARGET_BRANCH' to origin"
git push origin "$TARGET_BRANCH"
ok "Pushed"

echo
echo "✓  Deploy triggered."
echo "   GitHub Actions will build + upload dist/ to GitHub Pages."
echo "   Monitor at: https://github.com/$(git remote get-url origin | sed 's/.*github.com[:/]//' | sed 's/\.git$//')/actions"
echo "   Live site:  $SITE_URL"
