import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentType = 'all' | 'necessary' | null;

interface CookieConsentContextType {
  consent: ConsentType;
  showBanner: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  openSettings: () => void;
  showSettings: boolean;
  closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_KEY = 'cookie-consent';

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentType>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    if (savedConsent === 'all' || savedConsent === 'necessary') {
      setConsent(savedConsent as ConsentType);
      setShowBanner(false);

      // Load analytics if user accepted all
      if (savedConsent === 'all') {
        loadGoogleAnalytics();
      }
    } else {
      // Show banner if no consent given
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    setConsent('all');
    localStorage.setItem(CONSENT_KEY, 'all');
    setShowBanner(false);
    setShowSettings(false);
    loadGoogleAnalytics();
  };

  const acceptNecessary = () => {
    setConsent('necessary');
    localStorage.setItem(CONSENT_KEY, 'necessary');
    setShowBanner(false);
    setShowSettings(false);
    // Don't load analytics
  };

  const openSettings = () => {
    setShowSettings(true);
  };

  const closeSettings = () => {
    setShowSettings(false);
  };

  const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (window.gtag) return;

    // Skip during prerender
    if (typeof navigator !== 'undefined' && navigator.userAgent.includes('HeadlessChrome')) {
      return;
    }

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;

    // Create script element for Google Analytics
    const gaScript = document.createElement('script');
    gaScript.async = true;
    gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-PBZV8M72VJ';
    document.head.appendChild(gaScript);

    gaScript.onload = () => {
      gtag('js', new Date());
      gtag('config', 'G-PBZV8M72VJ', {
        anonymize_ip: true,
        cookie_flags: 'SameSite=None;Secure'
      });
    };

    // Load Ahrefs Analytics
    const ahrefsScript = document.createElement('script');
    ahrefsScript.async = true;
    ahrefsScript.src = 'https://analytics.ahrefs.com/analytics.js';
    ahrefsScript.setAttribute('data-key', '5f9DXeW69Bf4uuCK8xnjJw');
    document.head.appendChild(ahrefsScript);
  };

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        showBanner,
        acceptAll,
        acceptNecessary,
        openSettings,
        showSettings,
        closeSettings
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (context === undefined) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
