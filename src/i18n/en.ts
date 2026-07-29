import type { Translations } from './types';

export const en: Translations = {
  meta: {
    siteName: 'eltrm',
    homeTitle: "eltrm \u2014 Know what's in stock, where it is, and when it expires",
    homeDescription:
      'Scan barcodes, track lots and expiration dates across warehouses, and manage your inventory from mobile or web. Developed by Eitan & Meir GmbH.',
    featuresTitle: 'Features — eltrm',
    featuresDescription:
      'Barcode scanning, lot tracking, expiration dates, multi-warehouse management, reports, and more. Explore all eltrm capabilities.',
    plansTitle: 'Plans & Capabilities — eltrm',
    plansDescription:
      'Start free with core inventory management. Upgrade to Premium for lot tracking, bulk import, custom fields, and unlimited warehouses.',
    downloadTitle: 'Download eltrm',
    downloadDescription:
      'Get eltrm on iOS, Android, or use the web app at app.eltrm.com. Manage your inventory from anywhere.',
    supportTitle: 'Support — eltrm',
    supportDescription:
      'Get help with eltrm inventory management. Contact support or browse frequently asked questions.',
    docsTitle: 'Documentation — eltrm',
    docsDescription:
      'Complete guide to eltrm: getting started, barcode scanning, warehouses, lot tracking, reports, and team management.',
    deleteAccountTitle: 'Delete Account — eltrm',
    deleteAccountDescription:
      'Request deletion of your eltrm account and associated data.',
    privacyTitle: 'Privacy Policy — eltrm',
    privacyDescription:
      'Privacy policy for eltrm, developed by Eitan & Meir GmbH.',
    termsTitle: 'Terms of Service — eltrm',
    termsDescription: 'Terms of service for eltrm by Eitan & Meir GmbH.',
    eulaTitle: 'End User License Agreement — eltrm',
    eulaDescription:
      'End User License Agreement (EULA) for eltrm by Eitan & Meir GmbH.',
    notFoundTitle: 'Page not found — eltrm',
    notFoundDescription: 'The page you are looking for could not be found.',
  },
  nav: {
    features: 'Features',
    plans: 'Plans',
    download: 'Download',
    support: 'Support',
    docs: 'Docs',
    openWebApp: 'Open Web App',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    skipToContent: 'Skip to main content',
    languageLabel: 'Language',
  },
  hero: {
    tagline: 'Inventory management for real operations',
    title: "Know what's in stock, where it is, and when it expires.",
    description:
      'Scan barcodes, track lots and expiration dates across warehouses, and manage your inventory from mobile or web.',
    ctaWebApp: 'Open Web App',
    ctaDownload: 'Download the App',
    ctaHowItWorks: 'See how it works',
    mockupAlt: 'eltrm app interface illustration',
  },
  howItWorks: {
    badge: 'How it works',
    title: 'From scan to insight in four steps',
    description:
      'eltrm turns every stock movement into structured, searchable data — accessible on mobile or web.',
    step1Title: 'Add your products',
    step1Description:
      'Create products with barcodes, categories, and custom fields. Import in bulk from Excel or CSV.',
    step2Title: 'Record movements',
    step2Description:
      'Scan barcodes to record stock in, stock out, and transfers between warehouses. Attach lot numbers and expiration dates.',
    step3Title: 'Track levels and lots',
    step3Description:
      'See current stock levels per warehouse, lot distribution, and which items are expiring soon.',
    step4Title: 'Report and export',
    step4Description:
      'Generate reports by category, warehouse, or date range. Export to CSV for further analysis.',
  },
  capabilities: {
    badge: 'Capabilities',
    title: 'Built for real inventory operations',
    description:
      'Every feature below is verified from the eltrm product. Nothing invented, nothing promised.',
    barcodeTitle: 'Barcode scanning',
    barcodeDescription:
      'Scan any barcode using your phone camera (iOS/Android) or a barcode scanner connected to the web app. Supports EAN, UPC, QR, and more.',
    lotTitle: 'Lot and expiration tracking',
    lotDescription:
      'Record lot numbers and expiration dates on every inbound movement. See per-warehouse lot distribution and get alerts when items are nearing expiry. (Premium)',
    warehouseTitle: 'Multi-warehouse management',
    warehouseDescription:
      'Create multiple warehouse locations, view stock levels per warehouse, and transfer inventory between them with a full transaction record.',
    transactionsTitle: 'Stock in, out, and transfer',
    transactionsDescription:
      'Record all stock movements — inbound, outbound, transfers, and count adjustments — with timestamps, users, and optional customer or lot details.',
    customersTitle: 'Customers',
    customersDescription:
      'Manage a customer list and link outbound transactions to specific customers. View per-customer transaction history.',
    teamTitle: 'Invite and manage team members',
    teamDescription:
      'Invite team members and assign admin or standard roles. Stock-count sessions initiated on mobile can be reviewed and approved on web.',
    customFieldsTitle: 'Custom product fields',
    customFieldsDescription:
      'Add custom attributes to any product to record supplier codes, shelf locations, or any field relevant to your business. (Premium)',
    reportsTitle: 'Reports and analytics',
    reportsDescription:
      'View dashboard metrics, transaction summaries by date range, inventory status by warehouse, and stock by category. Export reports to CSV.',
    importExportTitle: 'Bulk import and export',
    importExportDescription:
      'Import products from Excel or CSV using a downloadable template. Export reports and transaction data at any time. (Premium for import)',
    alertsTitle: 'Low stock alerts',
    alertsDescription:
      'Set a minimum stock level per product. Get notified on the dashboard and in mobile alerts when inventory falls below your threshold.',
    currencyTitle: 'Per-product currency',
    currencyDescription:
      'Set a sale price and currency for each product. Supports a wide range of currency codes for businesses operating in different markets.',
    platformsTitle: 'Web, iOS, and Android',
    platformsDescription:
      'Full inventory management on the web app at app.eltrm.com. Barcode scanning via camera on iOS and Android. Mobile apps also available.',
  },
  plans: {
    badge: 'Plans',
    title: 'Start free. Upgrade when you need more.',
    description:
      'The free plan gives you the core tools to manage your inventory. Premium unlocks lot tracking, bulk import, and more — upgrade anytime from within the app.',
    freePlanName: 'Free',
    freePlanDescription: 'Core inventory management, no credit card required.',
    freeCtaLabel: 'Get started free',
    freePlanFeature1: 'Product and stock management',
    freePlanFeature2: 'Stock in, out, and transfer transactions',
    freePlanFeature3: 'Multiple warehouses',
    freePlanFeature4: 'Low stock alerts',
    freePlanFeature5: 'Reports and CSV export',
    premiumPlanName: 'Premium',
    premiumPlanDescription:
      'Everything in Free, plus the features serious inventory operations need.',
    premiumCtaLabel: 'Upgrade in-app',
    premiumPlanFeature1: 'Lot and expiration date tracking',
    premiumPlanFeature2: 'Bulk product import (Excel / CSV)',
    premiumPlanFeature3: 'Custom product fields',
    premiumPlanFeature4: 'Product categories with filters',
    premiumPlanFeature5: 'More team members',
    premiumPlanFeature6: 'Unlimited products and warehouses',
    premiumPlanFeature7: 'Unlimited customers',
    upgradeNote: 'Upgrade is done in-app on iOS, Android, or web.',
    platformNote:
      'Some features — such as camera barcode scanning and stock counting — are optimized for the mobile apps.',
  },
  download: {
    badge: 'Download',
    title: 'Use eltrm on any platform',
    description:
      'Access eltrm from your browser, iPhone, or Android device. Your inventory syncs across all platforms.',
    webAppLabel: 'Web App',
    webAppDescription: 'Sign in or create an account at app.eltrm.com',
    webAppCta: 'Open Web App',
    appStoreLabel: 'Download on the App Store',
    googlePlayLabel: 'Get it on Google Play',
    qrLabel: 'Scan to download',
    qrDescription: 'Scan with your phone to open the download page',
  },
  faq: {
    badge: 'FAQ',
    title: 'Frequently asked questions',
    description: 'Everything you need to know before getting started.',
    q1Question: 'What is eltrm?',
    q1Answer:
      'eltrm is an inventory management application developed by Eitan & Meir GmbH. It runs on iOS, Android, and web (app.eltrm.com), and helps businesses track products, stock movements, lot numbers, and expiration dates across one or more warehouses.',
    q2Question: 'Is eltrm free? How do I get started?',
    q2Answer:
      'Yes, eltrm has a free plan with no credit card required. Create an account at app.eltrm.com or download the app from the App Store or Google Play. Premium features can be unlocked by upgrading in-app.',
    q3Question: 'What platforms does eltrm support?',
    q3Answer:
      'eltrm is available as a web application at app.eltrm.com (accessible from any modern browser), on iOS (App Store), and on Android (Google Play). The app interface is available in English, Turkish, German, and Arabic.',
    q4Question: 'What is the difference between the web app and mobile apps?',
    q4Answer:
      'The web app provides the full inventory management interface including reports, team management, and product configuration. The mobile apps additionally support barcode scanning using the phone camera and are optimized for on-floor stock counting. Stock count sessions started on mobile can be reviewed and approved on web.',
    q5Question: 'Can I manage multiple warehouses?',
    q5Answer:
      'Yes. eltrm supports multiple warehouse locations. You can view stock levels per warehouse, record transfers between warehouses, and see lot distribution by location.',
    q6Question: 'Does eltrm track lot numbers and expiration dates?',
    q6Answer:
      'Yes. Lot/batch tracking with expiration dates is available on Premium. When recording a stock-in transaction, you can attach a lot number, production date, and expiration date. You can view lot distribution per warehouse and configure expiration alerts.',
    q7Question: 'How do I delete my account?',
    q7Answer:
      'To delete your account and associated data, send an email to info@eltrm.com from the address linked to your account. Your request will be verified and data will be removed within 30 days. See the delete account page for step-by-step instructions.',
    q8Question: 'Is the EULA available in Turkish or German?',
    q8Answer:
      'The End User License Agreement is currently only available in English. If you need a translated summary for reference, please contact info@eltrm.com. The authoritative legal version remains the English text.',
  },
  footer: {
    description:
      'Inventory management for businesses of all sizes. Developed by Eitan & Meir GmbH.',
    productHeading: 'Product',
    resourcesHeading: 'Resources',
    legalHeading: 'Legal',
    privacyLink: 'Privacy Policy',
    termsLink: 'Terms of Service',
    eulaLink: 'EULA',
    deleteAccountLink: 'Delete Account',
    copyright: '© 2026 eltrm. All rights reserved.',
    developedBy: 'Developed by Eitan & Meir GmbH',
  },
  deleteAccount: {
    title: 'Delete Account',
    subtitle: 'Request deletion of your eltrm account and associated data',
    description:
      "We're sorry to see you go. If you'd like to delete your account and all associated data, please follow the steps below.",
    howToTitle: 'How to request deletion',
    step1Title: 'Send an email',
    step1Description:
      'Send an email to info@eltrm.com from the email address associated with your eltrm account.',
    step2Title: 'Verification',
    step2Description:
      'Our team will verify your request and may ask for additional confirmation to ensure the security of your data.',
    step3Title: 'Processing',
    step3Description:
      'Once verified, we will delete your account and all associated data within 30 days. This action is permanent and cannot be undone.',
    emailButton: 'Send deletion request',
    backHome: 'Back to home',
  },
  support: {
    title: 'Support',
    subtitle: 'How can we help?',
    emailCardTitle: 'Contact us by email',
    emailCardDescription:
      'Our team responds to all enquiries. For account or data deletion requests, please include your registered email address.',
    emailCardCta: 'Email info@eltrm.com',
    faqTitle: 'Frequently asked questions',
    faqSubtitle: 'Quick answers to the most common questions.',
    faq1Q: 'How do I add products?',
    faq1A:
      'From the web app or mobile app, navigate to Products and tap the + button. Enter the product name, barcode, and any additional details. You can also import products in bulk using an Excel or CSV template (Premium).',
    faq2Q: 'How do I scan barcodes?',
    faq2A:
      'On iOS or Android, open the app and use the Scan button on the home screen or transaction form. The camera will activate and scan any EAN, UPC, or QR barcode. On the web app, you can enter barcodes using a USB barcode scanner or type them manually.',
    faq3Q: 'Can I manage multiple warehouses?',
    faq3A:
      'Yes. Create warehouse locations in Settings, then record transactions to a specific warehouse. You can transfer stock between warehouses and view per-warehouse inventory levels.',
    faq4Q: 'How do I upgrade to Premium?',
    faq4A:
      'Open the eltrm app on iOS, Android, or web and go to the Premium section. Select a subscription plan and complete the purchase through the App Store, Google Play, or the web payment flow.',
    stillNeedHelp: 'Still need help?',
    stillNeedHelpDescription:
      "If your question isn't answered above, reach out by email and we'll be happy to help.",
    stillNeedHelpCta: 'Contact support',
  },
  docs: {
    title: 'Documentation',
    subtitle:
      'Everything you need to know about eltrm. Get started quickly with our guides.',
    gettingStartedTitle: 'Getting started',
    gettingStartedDescription:
      'Create your account and set up your first warehouse and products.',
    createAccountTitle: 'Create your account',
    createAccountDescription:
      'Download the app or visit app.eltrm.com and sign up with your email address. No credit card required for the free plan.',
    scanBarcodeTitle: 'Scanning barcodes',
    scanBarcodeDescription:
      'Use the camera on iOS or Android to scan EAN, UPC, or QR barcodes. On web, use a USB scanner or enter barcodes manually.',
    addStockTitle: 'Adding stock',
    addStockDescription:
      'Record stock-in transactions to add inventory. Attach lot numbers and expiration dates (Premium) for full traceability.',
    warehousesTitle: 'Managing warehouses',
    warehousesDescription:
      'Create multiple warehouse locations and record transactions to each location. Transfer stock between warehouses.',
    lotsTitle: 'Lot and expiration tracking',
    lotsDescription:
      'Enable lot tracking (Premium) to record lot numbers and expiration dates on stock-in transactions. View lot distribution per warehouse.',
    reportsTitle: 'Reports and export',
    reportsDescription:
      'Access reports from the Reports section. Export to CSV. Print inventory reports directly from the browser.',
    premiumTitle: 'Premium features',
    premiumDescription:
      'Upgrade in-app to unlock lot tracking, bulk import, custom product fields, categories, more team members, and unlimited products and warehouses.',
  },
  notFound: {
    title: 'Page not found',
    description: "The page you're looking for doesn't exist or has been moved.",
    backHome: 'Go to homepage',
  },
  a11y: {
    logoAlt: 'eltrm',
    logoSmallAlt: 'eltrm logo',
    appStoreBadgeAlt: 'Download on the App Store',
    googlePlayBadgeAlt: 'Get it on Google Play',
    qrCodeAlt: 'QR code linking to eltrm download page',
    externalLink: '(opens in new tab)',
  },
};
