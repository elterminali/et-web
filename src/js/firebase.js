// Firebase configuration - shared with eltrm-frontend app
const firebaseConfig = {
  apiKey: "AIzaSyCyp55M_2fB-6wvdxm49dQno8yh7i9zd2o",
  authDomain: "handdynet.firebaseapp.com",
  databaseURL: "https://handdynet.firebaseio.com",
  projectId: "handdynet",
  storageBucket: "handdynet.firebasestorage.app",
  messagingSenderId: "246692581619",
  appId: "1:246692581619:web:13c292652f384c33a9a786",
  measurementId: "G-DQT5RXXG19"
};

// Initialize Firebase
let analytics = null;
let performance = null;

(function() {
  // Load Firebase SDKs
  const script1 = document.createElement('script');
  script1.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
  script1.async = true;
  
  const script2 = document.createElement('script');
  script2.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js';
  script2.async = true;
  
  const script3 = document.createElement('script');
  script3.src = 'https://www.gstatic.com/firebasejs/10.7.1/firebase-performance.js';
  script3.async = true;
  
  script1.onload = function() {
    // Initialize Firebase App
    if (typeof firebase !== 'undefined' && firebase.initializeApp) {
      const app = firebase.initializeApp(firebaseConfig);
      
      // Initialize Analytics
      script2.onload = function() {
        if (typeof firebase !== 'undefined' && firebase.analytics) {
          try {
            analytics = firebase.analytics();
            console.log('Firebase Analytics initialized');
          } catch (error) {
            console.error('Firebase Analytics initialization error:', error);
          }
        }
      };
      
      // Initialize Performance
      script3.onload = function() {
        if (typeof firebase !== 'undefined' && firebase.performance) {
          try {
            performance = firebase.performance();
            console.log('Firebase Performance initialized');
          } catch (error) {
            console.error('Firebase Performance initialization error:', error);
          }
        }
      };
      
      document.head.appendChild(script2);
      document.head.appendChild(script3);
    }
  };
  
  document.head.appendChild(script1);
})();

// Analytics helper functions
window.FirebaseAnalytics = {
  trackEvent: function(eventName, eventParams) {
    if (analytics && analytics.logEvent) {
      try {
        analytics.logEvent(eventName, eventParams);
      } catch (error) {
        console.error('Error tracking event:', error);
      }
    }
  },
  
  trackPageView: function(pageName, pagePath) {
    if (analytics && analytics.logEvent) {
      try {
        analytics.logEvent('page_view', {
          page_title: pageName,
          page_location: pagePath || window.location.pathname,
          page_path: pagePath || window.location.pathname,
        });
      } catch (error) {
        console.error('Error tracking page view:', error);
      }
    }
  },
  
  setUser: function(userId, userProperties) {
    if (analytics && analytics.setUserId) {
      try {
        analytics.setUserId(userId);
        if (userProperties && analytics.setUserProperties) {
          analytics.setUserProperties(userProperties);
        }
      } catch (error) {
        console.error('Error setting user:', error);
      }
    }
  },
  
  clearUser: function() {
    if (analytics && analytics.setUserId) {
      try {
        analytics.setUserId(null);
      } catch (error) {
        console.error('Error clearing user:', error);
      }
    }
  }
};

// Track page views automatically
(function() {
  function trackCurrentPage() {
    const path = window.location.pathname;
    let pageName = 'Home';
    
    if (path.includes('/docs')) {
      pageName = 'Documentation';
    } else if (path.includes('/support')) {
      pageName = 'Support';
    } else if (path.includes('/privacy')) {
      pageName = 'Privacy Policy';
    } else if (path.includes('/terms')) {
      pageName = 'Terms of Service';
    }
    
    // Wait a bit for analytics to initialize
    setTimeout(function() {
      if (window.FirebaseAnalytics) {
        window.FirebaseAnalytics.trackPageView(pageName, path);
      }
    }, 500);
  }
  
  // Track initial page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', trackCurrentPage);
  } else {
    trackCurrentPage();
  }
  
  // Track page changes (for SPA-like navigation if any)
  let lastPath = window.location.pathname;
  setInterval(function() {
    if (window.location.pathname !== lastPath) {
      lastPath = window.location.pathname;
      trackCurrentPage();
    }
  }, 1000);
})();

// Track key website events
window.addEventListener('load', function() {
  // Track download button clicks
  document.querySelectorAll('a[href*=".apk"], a[href*="app-store"], a[href*="play-store"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.FirebaseAnalytics) {
        const linkType = this.href.includes('apk') ? 'apk' : 
                        this.href.includes('app-store') ? 'app_store' : 'play_store';
        window.FirebaseAnalytics.trackEvent('download_clicked', {
          download_type: linkType,
          link_url: this.href
        });
      }
    });
  });
  
  // Track "Sign In" button clicks
  document.querySelectorAll('a[href*="app.eltrm.com"], a[href*="login"]').forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.FirebaseAnalytics) {
        window.FirebaseAnalytics.trackEvent('sign_in_clicked', {
          source: 'website'
        });
      }
    });
  });
  
  // Track language switcher usage
  document.querySelectorAll('#language-switcher .lang-btn, .language-switcher .lang-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      if (window.FirebaseAnalytics) {
        const lang = this.getAttribute('data-lang') || this.textContent.trim();
        window.FirebaseAnalytics.trackEvent('language_changed', {
          language: lang,
          source: 'website'
        });
      }
    });
  });
  
  // Track external link clicks
  document.querySelectorAll('a[href^="http"]').forEach(function(link) {
    if (!link.href.includes(window.location.hostname)) {
      link.addEventListener('click', function() {
        if (window.FirebaseAnalytics) {
          window.FirebaseAnalytics.trackEvent('external_link_clicked', {
            link_url: this.href
          });
        }
      });
    }
  });
});

