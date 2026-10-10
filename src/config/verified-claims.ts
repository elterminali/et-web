/**
 * Central registry of all marketing claims.
 *
 * Status:
 *   verified     — confirmed from product code, store listing, or owner
 *   pending      — found in code but NOT confirmed via backend/RevenueCat/owner
 *   do-not-publish — known to be false or unverifiable; never render
 *
 * Build scripts/check-claims.mjs fails the build if any page imports a
 * pending or do-not-publish claim by key.
 */
export type ClaimStatus = 'verified' | 'pending' | 'do-not-publish';

export interface Claim {
  id: string;
  status: ClaimStatus;
  value: string | null;
  source: string;
  note?: string;
}

export const CLAIMS: Record<string, Claim> = {
  // ── Verified capabilities ──────────────────────────────────────────────────
  barcodeScanning: {
    id: 'barcodeScanning',
    status: 'verified',
    value: 'Barcode scanning',
    source: 'eltrm-frontend: StockFormPage.tsx, StockCountPage.tsx, stocksApi.findByBarcode',
  },
  cameraScannningMobileOnly: {
    id: 'cameraScannningMobileOnly',
    status: 'verified',
    value: 'Camera scanning on iOS and Android only (web uses scanner/manual entry)',
    source: 'eltrm-frontend: no camera/BarcodeDetector in web codebase; mobile-only confirmed',
  },
  lotTracking: {
    id: 'lotTracking',
    status: 'verified',
    value: 'Lot and batch tracking with expiration dates',
    source: 'eltrm-frontend: TransactionFormPage.tsx, aggregatedLots in StockDetailPage.tsx',
  },
  lotTrackingPremium: {
    id: 'lotTrackingPremium',
    status: 'verified',
    value: 'Lot tracking is a Premium feature',
    source: 'eltrm-frontend: allowLotTracking gated by isPremium in TransactionFormPage.tsx',
  },
  expiryAlerts: {
    id: 'expiryAlerts',
    status: 'verified',
    value: 'Expiration date alerts',
    source: 'eltrm-frontend: expiryNotificationDays in StockFormPage.tsx, dashboardApi.getAlerts',
  },
  multiWarehouse: {
    id: 'multiWarehouse',
    status: 'verified',
    value: 'Multiple warehouse locations',
    source: 'eltrm-frontend: WarehousesPage.tsx, WarehouseDetailPage.tsx',
  },
  warehouseTransfers: {
    id: 'warehouseTransfers',
    status: 'verified',
    value: 'Stock transfers between warehouses',
    source: 'eltrm-frontend: TransferStockPage.tsx, transaction type transfer',
  },
  stockInOut: {
    id: 'stockInOut',
    status: 'verified',
    value: 'Stock in, stock out, count transactions',
    source: 'eltrm-frontend: TransactionFormPage.tsx, TransactionsPage.tsx',
  },
  customers: {
    id: 'customers',
    status: 'verified',
    value: 'Customer management and per-customer transaction history',
    source: 'eltrm-frontend: CustomersPage.tsx, CustomerDetailPage.tsx',
  },
  teamMembers: {
    id: 'teamMembers',
    status: 'verified',
    value: 'Invite and manage team members (admin and standard roles)',
    source: 'eltrm-frontend: UsersPage.tsx, usersApi invite/update/remove',
    note: 'Roles: admin/user only; no fine-grained permission matrix in UI',
  },
  customFields: {
    id: 'customFields',
    status: 'verified',
    value: 'Custom product fields (Premium)',
    source: 'eltrm-frontend: StockDetailPage.tsx attributes, allowAttributes in limits.ts',
  },
  reports: {
    id: 'reports',
    status: 'verified',
    value: 'Reports and CSV export',
    source: 'eltrm-frontend: ReportsPage.tsx, WarehouseInventoryReportPage.tsx',
  },
  bulkImport: {
    id: 'bulkImport',
    status: 'verified',
    value: 'Bulk import from Excel/CSV (free up to the product limit, unlimited on Premium)',
    source: 'eltrm-frontend: ImportStocksModal.tsx, canUseBulkImport in limits.ts',
  },
  lowStockAlerts: {
    id: 'lowStockAlerts',
    status: 'verified',
    value: 'Low stock alerts',
    source: 'eltrm-frontend: notificationLimit on stock, lowStockItems in DashboardPage.tsx',
  },
  perProductCurrency: {
    id: 'perProductCurrency',
    status: 'verified',
    value: 'Per-product currency setting',
    source: 'eltrm-frontend: currency field in StockFormPage.tsx',
    note: 'Not a multi-currency accounting system; single currency per product',
  },
  webApp: {
    id: 'webApp',
    status: 'verified',
    value: 'Web app at app.eltrm.com',
    source: 'eltrm-frontend: docker-compose.yml, verified live',
  },
  iOSApp: {
    id: 'iOSApp',
    status: 'verified',
    value: 'iOS app (App Store id1116086125)',
    source: 'JSON-LD in existing site, store URL verified live',
  },
  androidApp: {
    id: 'androidApp',
    status: 'verified',
    value: 'Android app (Play Store com.eltrm.android)',
    source: 'JSON-LD in existing site, store URL verified live',
  },
  freePlan: {
    id: 'freePlan',
    status: 'verified',
    value: 'Free plan with no credit card required',
    source: 'eltrm-frontend: SubscriptionContext.tsx, PremiumPage.tsx — free access confirmed',
  },
  premiumPlan: {
    id: 'premiumPlan',
    status: 'verified',
    value: 'Premium subscription via RevenueCat (iOS, Android, web)',
    source: 'eltrm-frontend: revenuecat.ts, SubscriptionContext.tsx, PremiumPage.tsx',
  },
  appLanguages: {
    id: 'appLanguages',
    status: 'verified',
    value: 'App UI available in English, Turkish, German, and Arabic',
    source: "eltrm-frontend: Language type = 'en' | 'tr' | 'de' | 'ar' in i18n/translations.ts",
  },
  companyName: {
    id: 'companyName',
    status: 'verified',
    value: 'Eitan & Meir GmbH',
    source: 'EULA, existing JSON-LD, company address in current site',
  },
  contactEmail: {
    id: 'contactEmail',
    status: 'verified',
    value: 'info@eltrm.com',
    source: 'User-confirmed decision: single official contact email',
  },
  accountDeletion30Days: {
    id: 'accountDeletion30Days',
    status: 'verified',
    value: 'Account and data deleted within 30 days of request',
    source: 'Existing delete-account page text, user-approved',
  },

  // ── Pending (do not render until owner/backend confirmation) ───────────────
  freeMaxProducts: {
    id: 'freeMaxProducts',
    status: 'pending',
    value: '100 products on free plan',
    source: 'eltrm-frontend: limits.ts maxStocks: 100',
    note: 'Frontend constant only — not confirmed via backend or RevenueCat entitlement config',
  },
  freeMaxWarehouses: {
    id: 'freeMaxWarehouses',
    status: 'pending',
    value: '2 warehouses on free plan',
    source: 'eltrm-frontend: limits.ts maxWarehouses: 2',
    note: 'Frontend constant only',
  },
  freeMaxCustomers: {
    id: 'freeMaxCustomers',
    status: 'pending',
    value: '10 customers on free plan',
    source: 'eltrm-frontend: limits.ts maxCustomers: 10',
    note: 'Frontend constant only',
  },
  freeMaxUsers: {
    id: 'freeMaxUsers',
    status: 'pending',
    value: '1 user on free plan',
    source: 'eltrm-frontend: limits.ts maxUsers: 1',
    note: 'Frontend constant only',
  },
  premiumMaxUsers: {
    id: 'premiumMaxUsers',
    status: 'pending',
    value: 'Up to 5 team members on Premium',
    source: 'eltrm-frontend: limits.ts maxUsers: 5 (premium)',
    note: 'Frontend constant only',
  },

  // ── Do not publish ─────────────────────────────────────────────────────────
  activeUsers50k: {
    id: 'activeUsers50k',
    status: 'do-not-publish',
    value: null,
    source: 'Old homepage stat — no source, completely fabricated',
  },
  barcodesScanned10m: {
    id: 'barcodesScanned10m',
    status: 'do-not-publish',
    value: null,
    source: 'Old homepage stat — no source, completely fabricated',
  },
  uptime999: {
    id: 'uptime999',
    status: 'do-not-publish',
    value: null,
    source: 'Old homepage stat — no source, completely fabricated',
  },
  rating48: {
    id: 'rating48',
    status: 'do-not-publish',
    value: null,
    source: 'Old homepage stat — no source, completely fabricated',
  },
  gdprCompliant: {
    id: 'gdprCompliant',
    status: 'do-not-publish',
    value: null,
    source: 'No legal verification; flagged in LEGAL-REVIEW.md',
  },
  madeInBerlin: {
    id: 'madeInBerlin',
    status: 'do-not-publish',
    value: null,
    source: 'Replaced by "Developed by Eitan & Meir GmbH" (company registered in Berlin per EULA/address)',
  },
  foundedYear2016: {
    id: 'foundedYear2016',
    status: 'do-not-publish',
    value: null,
    source: 'No evidence in product code; App Store links exist but are not founding-year evidence',
  },
  orderManagement: {
    id: 'orderManagement',
    status: 'do-not-publish',
    value: null,
    source: 'NOT in eltrm-frontend: no orders/sales/invoices module exists in the codebase',
  },
  invoiceGeneration: {
    id: 'invoiceGeneration',
    status: 'do-not-publish',
    value: null,
    source: 'NOT in eltrm-frontend: no invoice module exists in the codebase',
  },
  testimonial: {
    id: 'testimonial',
    status: 'do-not-publish',
    value: null,
    source: 'Unverified placeholder from old site — removed',
  },
  trialPeriod: {
    id: 'trialPeriod',
    status: 'do-not-publish',
    value: null,
    source: 'No trial logic found in eltrm-frontend RevenueCat integration',
  },
};

/** Helper to get only verified claims. */
export function getVerified(): Claim[] {
  return Object.values(CLAIMS).filter((c) => c.status === 'verified');
}

/** Throws at runtime if a do-not-publish or pending claim is used. */
export function assertVerified(id: string): Claim {
  const claim = CLAIMS[id];
  if (!claim) throw new Error(`Unknown claim: ${id}`);
  if (claim.status !== 'verified') {
    throw new Error(
      `Claim "${id}" has status "${claim.status}" and must not be rendered in production. ` +
        `Source: ${claim.source}`,
    );
  }
  return claim;
}
