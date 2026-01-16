// Translations for eltrm website
const translations = {
  en: {
    nav: {
      features: "Features",
      download: "Download",
      login: "Login",
      language: "Language"
    },
    hero: {
      badge: "Professional Inventory Management",
      title: "Smart Inventory Management",
      description: "Turn your mobile device into a powerful stock management tool with barcode scanning and real-time tracking.",
      getStarted: "Get Started",
      watchDemo: "Watch Demo"
    },
    features: {
      title: "Powerful Features",
      subtitle: "Everything you need to manage your inventory efficiently",
      barcode: {
        title: "Barcode Scanning",
        description: "Quick and accurate barcode scanning for fast inventory updates"
      },
      realtime: {
        title: "Real-Time Sync",
        description: "Sync your inventory across all devices in real-time"
      },
      reports: {
        title: "Advanced Reports",
        description: "Generate detailed reports and analytics for better decision making"
      },
      multiwarehouse: {
        title: "Multi-Warehouse",
        description: "Manage multiple warehouses from a single dashboard"
      },
      lowstock: {
        title: "Low Stock Alerts",
        description: "Get notified when stock levels are running low"
      },
      mobile: {
        title: "Mobile First",
        description: "Optimized for mobile devices with offline support"
      }
    },
    download: {
      title: "Download eltrm",
      subtitle: "Available on iOS and Android",
      android: "Download for Android",
      ios: "Download for iOS",
      scanQR: "Scan QR Code",
      or: "or"
    },
    footer: {
      company: "eltrm",
      description: "Professional inventory management solution",
      links: {
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        support: "Support",
        docs: "Documentation"
      },
      copyright: "© 2024 eltrm. All rights reserved."
    },
    meta: {
      title: "El Terminali - Smart Inventory Management",
      description: "Professional inventory management with barcode scanning. Turn your mobile into a powerful stock management tool."
    },
    docs: {
      title: "Documentation",
      subtitle: "Everything you need to know about eltrm. Get started quickly with our guides.",
      contents: "Contents",
      gettingStarted: "Getting Started",
      mobileSetup: "Mobile App Setup",
      barcodeScanning: "Barcode Scanning",
      inventory: "Inventory Management",
      bulkImport: "Bulk Stock Import",
      warehouse: "Warehouse Management",
      alerts: "Stock Alerts",
      reports: "Reports & Analytics",
      team: "Team Management",
      subscriptions: "Premium Subscriptions",
      gettingStartedTitle: "Getting Started",
      gettingStartedDesc: "Welcome to eltrm! Follow these steps to get up and running quickly.",
      createAccount: "Create Your Account",
      createAccountDesc: "Download the app or visit app.eltrm.com and sign up with your email address.",
      setupWarehouse: "Set Up Your First Warehouse",
      setupWarehouseDesc: "Create your first warehouse location to start tracking inventory.",
      addProducts: "Add Your Products",
      addProductsDesc: "Add products manually, scan barcodes, or import from Excel/CSV to build your inventory quickly.",
      startManaging: "Start Managing",
      startManagingDesc: "Track stock movements, set alerts, and generate reports.",
      mobileSetupTitle: "Mobile App Setup",
      mobileSetupDesc: "Get eltrm on your iOS or Android device.",
      iosDesc: "Search \"eltrm\" on the App Store, download, and sign in. Grant camera permissions for barcode scanning.",
      androidDesc: "Download the APK from our website, enable unknown sources, install, and sign in.",
      barcodeTitle: "Barcode Scanning",
      barcodeDesc: "Turn your phone into a powerful barcode scanner.",
      supportedFormats: "Supported Formats",
      formats1D: "1D Barcodes: EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, ITF",
      formats2D: "2D Barcodes: QR Code, Data Matrix, PDF417",
      scanningTips: "Scanning Tips",
      tip1: "Ensure good lighting conditions",
      tip2: "Hold phone 6-8 inches from the barcode",
      tip3: "Keep the entire barcode visible in the viewfinder",
      tip4: "Clean your camera lens for best results",
      tip5: "Use continuous scan mode for bulk operations",
      inventoryTitle: "Inventory Management",
      inventoryDesc: "Manage your entire inventory from one place.",
      stockIn: "Stock In",
      stockInDesc: "Record incoming inventory by scanning barcodes or selecting products manually.",
      stockOut: "Stock Out",
      stockOutDesc: "Record outgoing inventory for sales, transfers, or other purposes.",
      transfer: "Transfer",
      transferDesc: "Move inventory between warehouses with automatic updates.",
      stockCount: "Stock Count",
      stockCountDesc: "Perform physical counts and reconcile differences.",
      bulkImportTitle: "Bulk Stock Import",
      bulkImportDesc: "Import multiple stocks at once using Excel or CSV files.",
      bulkImportSteps: "How to Import Stocks",
      downloadTemplate: "Download Template",
      downloadTemplateDesc: "Download a sample Excel or CSV template from the Import Stocks page.",
      fillData: "Fill in Your Data",
      fillDataDesc: "Add your stock information following the template format. Barcode is required, other fields are optional.",
      uploadFile: "Upload File",
      uploadFileDesc: "Select your filled Excel or CSV file and upload it. The system will validate and preview your data.",
      reviewPreview: "Review Preview",
      reviewPreviewDesc: "Check the preview of your stocks before importing. Fix any errors shown.",
      confirmImport: "Confirm Import",
      confirmImportDesc: "Click Import to add all valid stocks to your inventory. You'll see a summary of successful and failed imports.",
      bulkImportFields: "Import File Fields",
      requiredField: "Required: Barcode",
      optionalFields: "Optional: Stock Name, Stock Code, Quantity, Purchase Price, Sale Price, VAT, Notification Limit",
      warehouseTitle: "Warehouse Management",
      warehouseDesc: "Manage multiple warehouse locations and track inventory across all of them.",
      createWarehouses: "Create Warehouses",
      createWarehousesDesc: "Navigate to Settings > Warehouses > Add New. Enter name, address, and details.",
      trackByLocation: "Track by Location",
      trackByLocationDesc: "View inventory levels per warehouse and generate location-specific reports.",
      assignTeam: "Assign Team Members",
      assignTeamDesc: "Control access by assigning team members to specific warehouses.",
      alertsTitle: "Stock Alerts",
      alertsDesc: "Never run out of stock with automated low stock alerts.",
      alertsHowItWorks: "How It Works",
      alertsDesc2: "Set minimum stock thresholds for each product. When inventory falls below the threshold, you'll receive notifications via email, push notifications, and in-app alerts.",
      reportsTitle: "Reports & Analytics",
      reportsDesc: "Generate detailed reports to gain insights into your inventory.",
      inventorySummary: "Inventory Summary",
      inventorySummaryDesc: "Overview of all products and quantities.",
      stockMovement: "Stock Movement",
      stockMovementDesc: "History of all stock in/out transactions.",
      lowStockReport: "Low Stock Report",
      lowStockReportDesc: "Products below minimum threshold.",
      valuationReport: "Valuation Report",
      valuationReportDesc: "Total inventory value calculations.",
      teamTitle: "Team Management",
      teamDesc: "Invite team members and manage access permissions.",
      userRoles: "User Roles",
      admin: "Admin: Full access to all features and settings",
      manager: "Manager: Can manage inventory and view reports",
      staff: "Staff: Can perform stock transactions only",
      viewer: "Viewer: Read-only access to inventory data",
      invitingMembers: "Inviting Members",
      invitingMembersDesc: "Go to Settings > Team Management > Invite Member. Enter their email and select the appropriate role. They'll receive an email invitation to join.",
      subscriptionsTitle: "Premium Subscriptions",
      subscriptionsDesc: "Unlock advanced features with eltrm Premium subscription.",
      subscriptionFeatures: "Premium Features",
      unlimitedUsers: "Unlimited Users: Add as many team members as you need",
      unlimitedWarehouses: "Unlimited Warehouses: Manage multiple locations without limits",
      advancedReports: "Advanced Reports: Access detailed analytics and custom reports",
      prioritySupport: "Priority Support: Get faster response times and dedicated support",
      emailNotifications: "Email Notifications: Receive automated alerts and reports via email",
      howToSubscribe: "How to Subscribe",
      subscribeMobile: "Subscribe on Mobile: Open the app, go to Settings > Subscription, and choose a plan.",
      subscribeWeb: "Subscribe on Web: Visit app.eltrm.com, go to Account Settings > Subscription.",
      subscriptionAutoRenew: "Subscriptions automatically renew unless cancelled. You can manage your subscription through the app or your device's subscription settings.",
      needHelp: "Need More Help?",
      needHelpDesc: "Our support team is ready to assist you with any questions.",
      contactSupport: "Contact Support"
    }
  },
  tr: {
    nav: {
      features: "Özellikler",
      download: "İndir",
      login: "Giriş",
      language: "Dil"
    },
    hero: {
      badge: "Profesyonel Envanter Yönetimi",
      title: "Akıllı Envanter Yönetimi",
      description: "Mobil cihazınızı barkod tarama ve gerçek zamanlı takip ile güçlü bir stok yönetim aracına dönüştürün.",
      getStarted: "Başlayın",
      watchDemo: "Demo İzle"
    },
    features: {
      title: "Güçlü Özellikler",
      subtitle: "Envanterinizi verimli bir şekilde yönetmek için ihtiyacınız olan her şey",
      barcode: {
        title: "Barkod Tarama",
        description: "Hızlı envanter güncellemeleri için hızlı ve doğru barkod tarama"
      },
      realtime: {
        title: "Gerçek Zamanlı Senkronizasyon",
        description: "Envanterinizi tüm cihazlarda gerçek zamanlı olarak senkronize edin"
      },
      reports: {
        title: "Gelişmiş Raporlar",
        description: "Daha iyi karar verme için detaylı raporlar ve analitikler oluşturun"
      },
      multiwarehouse: {
        title: "Çoklu Depo",
        description: "Tek bir kontrol panelinden birden fazla depoyu yönetin"
      },
      lowstock: {
        title: "Düşük Stok Uyarıları",
        description: "Stok seviyeleri düşük olduğunda bildirim alın"
      },
      mobile: {
        title: "Mobil Öncelikli",
        description: "Çevrimdışı destek ile mobil cihazlar için optimize edilmiş"
      }
    },
    download: {
      title: "eltrm İndir",
      subtitle: "iOS ve Android'de mevcut",
      android: "Android için İndir",
      ios: "iOS için İndir",
      scanQR: "QR Kod Tara",
      or: "veya"
    },
    footer: {
      company: "eltrm",
      description: "Profesyonel envanter yönetim çözümü",
      links: {
        privacy: "Gizlilik Politikası",
        terms: "Hizmet Şartları",
        support: "Destek",
        docs: "Dokümantasyon"
      },
      copyright: "© 2024 eltrm. Tüm hakları saklıdır."
    },
    meta: {
      title: "El Terminali - Akıllı Envanter Yönetimi",
      description: "Barkod tarama ile profesyonel envanter yönetimi. Mobil cihazınızı güçlü bir stok yönetim aracına dönüştürün."
    },
    docs: {
      title: "Dokümantasyon",
      subtitle: "eltrm hakkında bilmeniz gereken her şey. Kılavuzlarımızla hızlıca başlayın.",
      contents: "İçindekiler",
      gettingStarted: "Başlangıç",
      mobileSetup: "Mobil Uygulama Kurulumu",
      barcodeScanning: "Barkod Tarama",
      inventory: "Envanter Yönetimi",
      bulkImport: "Toplu Stok İçe Aktarma",
      warehouse: "Depo Yönetimi",
      alerts: "Stok Uyarıları",
      reports: "Raporlar ve Analitikler",
      team: "Ekip Yönetimi",
      subscriptions: "Premium Abonelikler",
      gettingStartedTitle: "Başlangıç",
      gettingStartedDesc: "eltrm'ye hoş geldiniz! Hızlıca başlamak için bu adımları izleyin.",
      createAccount: "Hesabınızı Oluşturun",
      createAccountDesc: "Uygulamayı indirin veya app.eltrm.com adresini ziyaret edip e-posta adresinizle kaydolun.",
      setupWarehouse: "İlk Deponuzu Kurun",
      setupWarehouseDesc: "Envanter takibine başlamak için ilk depo konumunuzu oluşturun.",
      addProducts: "Ürünlerinizi Ekleyin",
      addProductsDesc: "Ürünleri manuel olarak ekleyin, barkod tarayın veya Excel/CSV'den içe aktararak envanterinizi hızlıca oluşturun.",
      startManaging: "Yönetmeye Başlayın",
      startManagingDesc: "Stok hareketlerini takip edin, uyarılar ayarlayın ve raporlar oluşturun.",
      mobileSetupTitle: "Mobil Uygulama Kurulumu",
      mobileSetupDesc: "iOS veya Android cihazınıza eltrm'yi indirin.",
      iosDesc: "App Store'da \"eltrm\" arayın, indirin ve giriş yapın. Barkod tarama için kamera izinlerini verin.",
      androidDesc: "Web sitemizden APK'yı indirin, bilinmeyen kaynakları etkinleştirin, kurun ve giriş yapın.",
      barcodeTitle: "Barkod Tarama",
      barcodeDesc: "Telefonunuzu güçlü bir barkod tarayıcıya dönüştürün.",
      supportedFormats: "Desteklenen Formatlar",
      formats1D: "1D Barkodlar: EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, ITF",
      formats2D: "2D Barkodlar: QR Code, Data Matrix, PDF417",
      scanningTips: "Tarama İpuçları",
      tip1: "İyi aydınlatma koşulları sağlayın",
      tip2: "Telefonu barkoddan 15-20 cm uzakta tutun",
      tip3: "Barkodun tamamının görüntüleyicide görünür olduğundan emin olun",
      tip4: "En iyi sonuçlar için kamera lensini temizleyin",
      tip5: "Toplu işlemler için sürekli tarama modunu kullanın",
      inventoryTitle: "Envanter Yönetimi",
      inventoryDesc: "Tüm envanterinizi tek bir yerden yönetin.",
      stockIn: "Stok Girişi",
      stockInDesc: "Barkod tarayarak veya ürünleri manuel olarak seçerek gelen envanteri kaydedin.",
      stockOut: "Stok Çıkışı",
      stockOutDesc: "Satış, transfer veya diğer amaçlar için çıkan envanteri kaydedin.",
      transfer: "Transfer",
      transferDesc: "Envanteri depolar arasında otomatik güncellemelerle taşıyın.",
      stockCount: "Stok Sayımı",
      stockCountDesc: "Fiziksel sayımlar yapın ve farkları mutabık kılın.",
      bulkImportTitle: "Toplu Stok İçe Aktarma",
      bulkImportDesc: "Excel veya CSV dosyalarını kullanarak birden fazla stoğu aynı anda içe aktarın.",
      bulkImportSteps: "Stok İçe Aktarma Nasıl Yapılır",
      downloadTemplate: "Şablon İndir",
      downloadTemplateDesc: "Stok İçe Aktarma sayfasından örnek Excel veya CSV şablonunu indirin.",
      fillData: "Verilerinizi Doldurun",
      fillDataDesc: "Şablon formatını takip ederek stok bilgilerinizi ekleyin. Barkod zorunludur, diğer alanlar isteğe bağlıdır.",
      uploadFile: "Dosya Yükle",
      uploadFileDesc: "Doldurulmuş Excel veya CSV dosyanızı seçin ve yükleyin. Sistem verilerinizi doğrulayacak ve önizleyecektir.",
      reviewPreview: "Önizlemeyi İnceleyin",
      reviewPreviewDesc: "İçe aktarmadan önce stoklarınızın önizlemesini kontrol edin. Gösterilen hataları düzeltin.",
      confirmImport: "İçe Aktarmayı Onaylayın",
      confirmImportDesc: "Tüm geçerli stokları envanterinize eklemek için İçe Aktar'a tıklayın. Başarılı ve başarısız içe aktarmaların özetini göreceksiniz.",
      bulkImportFields: "İçe Aktarma Dosyası Alanları",
      requiredField: "Zorunlu: Barkod",
      optionalFields: "İsteğe Bağlı: Stok Adı, Stok Kodu, Miktar, Alış Fiyatı, Satış Fiyatı, KDV, Bildirim Limiti",
      warehouseTitle: "Depo Yönetimi",
      warehouseDesc: "Birden fazla depo konumunu yönetin ve tüm depolar genelinde envanteri takip edin.",
      createWarehouses: "Depo Oluştur",
      createWarehousesDesc: "Ayarlar > Depolar > Yeni Ekle'ye gidin. Ad, adres ve detayları girin.",
      trackByLocation: "Konuma Göre Takip",
      trackByLocationDesc: "Depo başına envanter seviyelerini görüntüleyin ve konuma özel raporlar oluşturun.",
      assignTeam: "Ekip Üyeleri Ata",
      assignTeamDesc: "Ekip üyelerini belirli depolara atayarak erişimi kontrol edin.",
      alertsTitle: "Stok Uyarıları",
      alertsDesc: "Otomatik düşük stok uyarıları ile stokta kalmayın.",
      alertsHowItWorks: "Nasıl Çalışır",
      alertsDesc2: "Her ürün için minimum stok eşikleri ayarlayın. Envanter eşiğin altına düştüğünde, e-posta, push bildirimleri ve uygulama içi uyarılar alacaksınız.",
      reportsTitle: "Raporlar ve Analitikler",
      reportsDesc: "Envanteriniz hakkında bilgi edinmek için detaylı raporlar oluşturun.",
      inventorySummary: "Envanter Özeti",
      inventorySummaryDesc: "Tüm ürünlerin ve miktarların genel bakışı.",
      stockMovement: "Stok Hareketi",
      stockMovementDesc: "Tüm stok giriş/çıkış işlemlerinin geçmişi.",
      lowStockReport: "Düşük Stok Raporu",
      lowStockReportDesc: "Minimum eşiğin altındaki ürünler.",
      valuationReport: "Değerleme Raporu",
      valuationReportDesc: "Toplam envanter değeri hesaplamaları.",
      teamTitle: "Ekip Yönetimi",
      teamDesc: "Ekip üyelerini davet edin ve erişim izinlerini yönetin.",
      userRoles: "Kullanıcı Rolleri",
      admin: "Yönetici: Tüm özelliklere ve ayarlara tam erişim",
      manager: "Müdür: Envanteri yönetebilir ve raporları görüntüleyebilir",
      staff: "Personel: Yalnızca stok işlemleri yapabilir",
      viewer: "Görüntüleyici: Envanter verilerine salt okunur erişim",
      invitingMembers: "Üye Davet Etme",
      invitingMembersDesc: "Ayarlar > Ekip Yönetimi > Üye Davet Et'e gidin. E-posta adreslerini girin ve uygun rolü seçin. Katılmak için bir e-posta davetiyesi alacaklar.",
      subscriptionsTitle: "Premium Abonelikler",
      subscriptionsDesc: "eltrm Premium aboneliği ile gelişmiş özelliklerin kilidini açın.",
      subscriptionFeatures: "Premium Özellikler",
      unlimitedUsers: "Sınırsız Kullanıcı: İhtiyacınız olduğu kadar ekip üyesi ekleyin",
      unlimitedWarehouses: "Sınırsız Depo: Sınır olmadan birden fazla konumu yönetin",
      advancedReports: "Gelişmiş Raporlar: Detaylı analitikler ve özel raporlara erişin",
      prioritySupport: "Öncelikli Destek: Daha hızlı yanıt süreleri ve özel destek alın",
      emailNotifications: "E-posta Bildirimleri: Otomatik uyarılar ve raporları e-posta ile alın",
      howToSubscribe: "Nasıl Abone Olunur",
      subscribeMobile: "Mobilde Abone Ol: Uygulamayı açın, Ayarlar > Abonelik'e gidin ve bir plan seçin.",
      subscribeWeb: "Web'de Abone Ol: app.eltrm.com'u ziyaret edin, Hesap Ayarları > Abonelik'e gidin.",
      subscriptionAutoRenew: "Abonelikler iptal edilmediği sürece otomatik olarak yenilenir. Aboneliğinizi uygulama veya cihazınızın abonelik ayarları üzerinden yönetebilirsiniz.",
      needHelp: "Daha Fazla Yardıma mı İhtiyacınız Var?",
      needHelpDesc: "Destek ekibimiz her türlü sorunuzda size yardımcı olmaya hazır.",
      contactSupport: "Destekle İletişime Geçin"
    }
  },
  de: {
    nav: {
      features: "Funktionen",
      download: "Herunterladen",
      login: "Anmelden",
      language: "Sprache"
    },
    hero: {
      badge: "Professionelles Inventarverwaltung",
      title: "Intelligente Inventarverwaltung",
      description: "Verwandeln Sie Ihr mobiles Gerät in ein leistungsstarkes Lagerverwaltungstool mit Barcode-Scanning und Echtzeit-Tracking.",
      getStarted: "Loslegen",
      watchDemo: "Demo ansehen"
    },
    features: {
      title: "Leistungsstarke Funktionen",
      subtitle: "Alles, was Sie brauchen, um Ihr Inventar effizient zu verwalten",
      barcode: {
        title: "Barcode-Scanning",
        description: "Schnelles und genaues Barcode-Scanning für schnelle Inventaraktualisierungen"
      },
      realtime: {
        title: "Echtzeit-Synchronisation",
        description: "Synchronisieren Sie Ihr Inventar in Echtzeit auf allen Geräten"
      },
      reports: {
        title: "Erweiterte Berichte",
        description: "Erstellen Sie detaillierte Berichte und Analysen für bessere Entscheidungen"
      },
      multiwarehouse: {
        title: "Multi-Lager",
        description: "Verwalten Sie mehrere Lager von einem einzigen Dashboard aus"
      },
      lowstock: {
        title: "Niedrigbestands-Warnungen",
        description: "Erhalten Sie Benachrichtigungen, wenn die Lagerbestände niedrig sind"
      },
      mobile: {
        title: "Mobil zuerst",
        description: "Optimiert für mobile Geräte mit Offline-Unterstützung"
      }
    },
    download: {
      title: "eltrm herunterladen",
      subtitle: "Verfügbar für iOS und Android",
      android: "Für Android herunterladen",
      ios: "Für iOS herunterladen",
      scanQR: "QR-Code scannen",
      or: "oder"
    },
    footer: {
      company: "eltrm",
      description: "Professionelle Inventarverwaltungslösung",
      links: {
        privacy: "Datenschutzrichtlinie",
        terms: "Nutzungsbedingungen",
        support: "Support",
        docs: "Dokumentation"
      },
      copyright: "© 2024 eltrm. Alle Rechte vorbehalten."
    },
    meta: {
      title: "El Terminali - Intelligente Inventarverwaltung",
      description: "Professionelles Inventarmanagement mit Barcode-Scanning. Verwandeln Sie Ihr mobiles Gerät in ein leistungsstarkes Lagerverwaltungstool."
    },
    docs: {
      title: "Dokumentation",
      subtitle: "Alles, was Sie über eltrm wissen müssen. Starten Sie schnell mit unseren Anleitungen.",
      contents: "Inhalt",
      gettingStarted: "Erste Schritte",
      mobileSetup: "Mobile App Einrichtung",
      barcodeScanning: "Barcode-Scanning",
      inventory: "Inventarverwaltung",
      bulkImport: "Massenimport von Beständen",
      warehouse: "Lagerverwaltung",
      alerts: "Bestandsalarme",
      reports: "Berichte & Analysen",
      team: "Teamverwaltung",
      subscriptions: "Premium-Abonnements",
      gettingStartedTitle: "Erste Schritte",
      gettingStartedDesc: "Willkommen bei eltrm! Befolgen Sie diese Schritte, um schnell loszulegen.",
      createAccount: "Konto erstellen",
      createAccountDesc: "Laden Sie die App herunter oder besuchen Sie app.eltrm.com und registrieren Sie sich mit Ihrer E-Mail-Adresse.",
      setupWarehouse: "Erstes Lager einrichten",
      setupWarehouseDesc: "Erstellen Sie Ihren ersten Lagerstandort, um mit der Inventarverfolgung zu beginnen.",
      addProducts: "Produkte hinzufügen",
      addProductsDesc: "Fügen Sie Produkte manuell hinzu, scannen Sie Barcodes oder importieren Sie aus Excel/CSV, um Ihr Inventar schnell aufzubauen.",
      startManaging: "Verwaltung starten",
      startManagingDesc: "Verfolgen Sie Bestandsbewegungen, setzen Sie Alarme und erstellen Sie Berichte.",
      mobileSetupTitle: "Mobile App Einrichtung",
      mobileSetupDesc: "Holen Sie sich eltrm auf Ihr iOS- oder Android-Gerät.",
      iosDesc: "Suchen Sie im App Store nach \"eltrm\", laden Sie es herunter und melden Sie sich an. Erteilen Sie Kameraberechtigungen für das Barcode-Scanning.",
      androidDesc: "Laden Sie die APK von unserer Website herunter, aktivieren Sie unbekannte Quellen, installieren Sie sie und melden Sie sich an.",
      barcodeTitle: "Barcode-Scanning",
      barcodeDesc: "Verwandeln Sie Ihr Telefon in einen leistungsstarken Barcode-Scanner.",
      supportedFormats: "Unterstützte Formate",
      formats1D: "1D-Barcodes: EAN-13, EAN-8, UPC-A, UPC-E, Code 128, Code 39, ITF",
      formats2D: "2D-Barcodes: QR-Code, Data Matrix, PDF417",
      scanningTips: "Scanning-Tipps",
      tip1: "Gute Beleuchtungsbedingungen sicherstellen",
      tip2: "Telefon 15-20 cm vom Barcode entfernt halten",
      tip3: "Stellen Sie sicher, dass der gesamte Barcode im Sucher sichtbar ist",
      tip4: "Reinigen Sie Ihr Kameraobjektiv für beste Ergebnisse",
      tip5: "Verwenden Sie den kontinuierlichen Scan-Modus für Massenvorgänge",
      inventoryTitle: "Inventarverwaltung",
      inventoryDesc: "Verwalten Sie Ihr gesamtes Inventar von einem Ort aus.",
      stockIn: "Wareneingang",
      stockInDesc: "Erfassen Sie eingehende Bestände durch Scannen von Barcodes oder manuelles Auswählen von Produkten.",
      stockOut: "Warenausgang",
      stockOutDesc: "Erfassen Sie ausgehende Bestände für Verkäufe, Transfers oder andere Zwecke.",
      transfer: "Transfer",
      transferDesc: "Verschieben Sie Bestände zwischen Lagern mit automatischen Updates.",
      stockCount: "Bestandsaufnahme",
      stockCountDesc: "Führen Sie physische Zählungen durch und gleichen Sie Unterschiede ab.",
      bulkImportTitle: "Massenimport von Beständen",
      bulkImportDesc: "Importieren Sie mehrere Bestände gleichzeitig mit Excel- oder CSV-Dateien.",
      bulkImportSteps: "So importieren Sie Bestände",
      downloadTemplate: "Vorlage herunterladen",
      downloadTemplateDesc: "Laden Sie eine Beispiel-Excel- oder CSV-Vorlage von der Seite \"Bestände importieren\" herunter.",
      fillData: "Daten ausfüllen",
      fillDataDesc: "Fügen Sie Ihre Bestandsinformationen gemäß dem Vorlagenformat hinzu. Barcode ist erforderlich, andere Felder sind optional.",
      uploadFile: "Datei hochladen",
      uploadFileDesc: "Wählen Sie Ihre ausgefüllte Excel- oder CSV-Datei aus und laden Sie sie hoch. Das System validiert und zeigt eine Vorschau Ihrer Daten an.",
      reviewPreview: "Vorschau überprüfen",
      reviewPreviewDesc: "Überprüfen Sie die Vorschau Ihrer Bestände vor dem Import. Beheben Sie alle angezeigten Fehler.",
      confirmImport: "Import bestätigen",
      confirmImportDesc: "Klicken Sie auf Importieren, um alle gültigen Bestände zu Ihrem Inventar hinzuzufügen. Sie sehen eine Zusammenfassung erfolgreicher und fehlgeschlagener Importe.",
      bulkImportFields: "Importdatei-Felder",
      requiredField: "Erforderlich: Barcode",
      optionalFields: "Optional: Bestandsname, Bestandscode, Menge, Einkaufspreis, Verkaufspreis, MwSt., Benachrichtigungslimit",
      warehouseTitle: "Lagerverwaltung",
      warehouseDesc: "Verwalten Sie mehrere Lagerstandorte und verfolgen Sie Bestände in allen.",
      createWarehouses: "Lager erstellen",
      createWarehousesDesc: "Navigieren Sie zu Einstellungen > Lager > Neu hinzufügen. Geben Sie Name, Adresse und Details ein.",
      trackByLocation: "Nach Standort verfolgen",
      trackByLocationDesc: "Zeigen Sie Bestandsniveaus pro Lager an und erstellen Sie standortspezifische Berichte.",
      assignTeam: "Teammitglieder zuweisen",
      assignTeamDesc: "Kontrollieren Sie den Zugriff, indem Sie Teammitglieder bestimmten Lagern zuweisen.",
      alertsTitle: "Bestandsalarme",
      alertsDesc: "Lassen Sie sich nie den Bestand ausgehen mit automatischen Niedrigbestandsalarmen.",
      alertsHowItWorks: "Wie es funktioniert",
      alertsDesc2: "Legen Sie minimale Bestandsschwellenwerte für jedes Produkt fest. Wenn der Bestand unter den Schwellenwert fällt, erhalten Sie Benachrichtigungen per E-Mail, Push-Benachrichtigungen und In-App-Alarme.",
      reportsTitle: "Berichte & Analysen",
      reportsDesc: "Erstellen Sie detaillierte Berichte, um Einblicke in Ihr Inventar zu erhalten.",
      inventorySummary: "Inventarzusammenfassung",
      inventorySummaryDesc: "Übersicht aller Produkte und Mengen.",
      stockMovement: "Bestandsbewegung",
      stockMovementDesc: "Verlauf aller Bestandsein-/ausgangstransaktionen.",
      lowStockReport: "Niedrigbestandsbericht",
      lowStockReportDesc: "Produkte unter dem Mindestschwellenwert.",
      valuationReport: "Bewertungsbericht",
      valuationReportDesc: "Berechnungen des Gesamtinventarwerts.",
      teamTitle: "Teamverwaltung",
      teamDesc: "Laden Sie Teammitglieder ein und verwalten Sie Zugriffsberechtigungen.",
      userRoles: "Benutzerrollen",
      admin: "Administrator: Vollzugriff auf alle Funktionen und Einstellungen",
      manager: "Manager: Kann Inventar verwalten und Berichte anzeigen",
      staff: "Mitarbeiter: Kann nur Bestandstransaktionen durchführen",
      viewer: "Betrachter: Schreibgeschützter Zugriff auf Inventardaten",
      invitingMembers: "Mitglieder einladen",
      invitingMembersDesc: "Gehen Sie zu Einstellungen > Teamverwaltung > Mitglied einladen. Geben Sie deren E-Mail ein und wählen Sie die entsprechende Rolle. Sie erhalten eine E-Mail-Einladung zum Beitritt.",
      subscriptionsTitle: "Premium-Abonnements",
      subscriptionsDesc: "Schalten Sie erweiterte Funktionen mit dem eltrm Premium-Abonnement frei.",
      subscriptionFeatures: "Premium-Funktionen",
      unlimitedUsers: "Unbegrenzte Benutzer: Fügen Sie so viele Teammitglieder hinzu, wie Sie benötigen",
      unlimitedWarehouses: "Unbegrenzte Lager: Verwalten Sie mehrere Standorte ohne Limits",
      advancedReports: "Erweiterte Berichte: Zugriff auf detaillierte Analysen und benutzerdefinierte Berichte",
      prioritySupport: "Prioritätssupport: Erhalten Sie schnellere Antwortzeiten und dedizierten Support",
      emailNotifications: "E-Mail-Benachrichtigungen: Erhalten Sie automatisierte Alarme und Berichte per E-Mail",
      howToSubscribe: "So abonnieren Sie",
      subscribeMobile: "Auf Mobilgerät abonnieren: Öffnen Sie die App, gehen Sie zu Einstellungen > Abonnement und wählen Sie einen Plan.",
      subscribeWeb: "Auf Web abonnieren: Besuchen Sie app.eltrm.com, gehen Sie zu Kontoeinstellungen > Abonnement.",
      subscriptionAutoRenew: "Abonnements werden automatisch erneuert, es sei denn, sie werden gekündigt. Sie können Ihr Abonnement über die App oder die Abonnementeinstellungen Ihres Geräts verwalten.",
      needHelp: "Benötigen Sie weitere Hilfe?",
      needHelpDesc: "Unser Support-Team steht Ihnen bei Fragen zur Verfügung.",
      contactSupport: "Support kontaktieren"
    }
  }
};

// Language detection and management
const LanguageManager = {
  currentLang: 'en',
  
  init() {
    // Detect language from URL, localStorage, or browser
    const urlLang = this.getLangFromURL();
    const storedLang = localStorage.getItem('eltrm-lang');
    const browserLang = navigator.language.split('-')[0];
    
    this.currentLang = urlLang || storedLang || (['en', 'tr', 'de'].includes(browserLang) ? browserLang : 'en');
    this.setLanguage(this.currentLang);
  },
  
  getLangFromURL() {
    const path = window.location.pathname;
    if (path.startsWith('/tr/')) return 'tr';
    if (path.startsWith('/de/')) return 'de';
    if (path.startsWith('/en/')) return 'en';
    return null;
  },
  
  setLanguage(lang) {
    if (!['en', 'tr', 'de'].includes(lang)) return;
    
    this.currentLang = lang;
    localStorage.setItem('eltrm-lang', lang);
    document.documentElement.lang = lang;
    
    // Update URL if needed
    this.updateURL(lang);
    
    // Apply translations
    this.applyTranslations();
    
    // Update language switcher
    this.updateLanguageSwitcher();
  },
  
  updateURL(lang) {
    // Don't change URL, just update content
    // This allows the same page to work for all languages
    // URL structure can be handled by server-side routing if needed
  },
  
  applyTranslations() {
    const t = translations[this.currentLang];
    if (!t) return;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      
      const value = this.getNestedValue(t, key);
      if (value !== undefined && value !== null && value !== '') {
        if (el.tagName === 'INPUT' && el.type === 'submit') {
          el.value = value;
        } else {
          el.textContent = value;
        }
      }
    });
    
    // Update elements with data-i18n-html for HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (!key) return;
      
      const value = this.getNestedValue(t, key);
      if (value !== undefined && value !== null) {
        el.innerHTML = value;
      }
    });
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && t.meta && t.meta.description) {
      metaDescription.setAttribute('content', t.meta.description);
    }
    
    const title = document.querySelector('title');
    if (title && t.meta && t.meta.title) {
      title.textContent = t.meta.title;
    }
  },
  
  getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
  },
  
  updateLanguageSwitcher() {
    const switcher = document.getElementById('language-switcher');
    if (!switcher) return;
    
    const buttons = switcher.querySelectorAll('button[data-lang]');
    buttons.forEach(btn => {
      const lang = btn.getAttribute('data-lang');
      if (lang === this.currentLang) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  },
  
  getTranslation(key) {
    return this.getNestedValue(translations[this.currentLang], key) || key;
  }
};

// Export for use in other scripts first
window.LanguageManager = LanguageManager;
window.translations = translations;

// Initialize on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
  });
} else {
  // DOM already loaded, but wait a tiny bit to ensure all scripts are ready
  setTimeout(() => {
    LanguageManager.init();
  }, 10);
}

