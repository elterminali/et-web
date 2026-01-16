#!/bin/bash
# This script removes all git history and creates a fresh start

echo "🧹 Cleaning git history and creating fresh start..."
echo "=================================================="
echo ""

# Step 1: Create new orphan branch (no history)
echo "1️⃣  Creating new branch with no history..."
git checkout --orphan new-main

# Step 2: Add all files
echo "2️⃣  Adding all files..."
git add -A

# Step 3: Create initial commit
echo "3️⃣  Creating initial commit..."
git commit -m "Initial commit - ElTRM Website

- Static website for ElTRM app
- Automatic deployment via GitHub Pages
- Custom domain support (eltrm.com)
- Includes APK download
"

# Step 4: Delete old main branch
echo "4️⃣  Deleting old main branch..."
git branch -D main

# Step 5: Rename new branch to main
echo "5️⃣  Renaming new-main to main..."
git branch -m main

# Step 6: Force push to replace remote history
echo "6️⃣  Ready to push! Run this command when ready:"
echo ""
echo "    git push -f origin main"
echo ""
echo "⚠️  WARNING: This will completely replace the remote repository history!"
echo "✅ All previous commits will be removed permanently."
echo ""
