import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type ConsentType = 'all' | 'necessary' | null;

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
}

interface CookieConsentContextType {
  consent: ConsentType;
  preferences: CookiePreferences;
  showBanner: boolean;
  acceptAll: () => void;
  acceptNecessary: () => void;
  savePreferences: (prefs: CookiePreferences) => void;
  openSettings: () => void;
  showSettings: boolean;
  closeSettings: () => void;
}

const CookieConsentContext = createContext<CookieConsentContextType | undefined>(undefined);

const CONSENT_KEY = 'cookie-consent';
const PREFERENCES_KEY = 'cookie-preferences';

export const CookieConsentProvider = ({ children }: { children: ReactNode }) => {
  const [consent, setConsent] = useState<ConsentType>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const savedConsent = localStorage.getItem(CONSENT_KEY);
    const savedPreferences = localStorage.getItem(PREFERENCES_KEY);

    // Load saved preferences if they exist
    if (savedPreferences) {
      try {
        const prefs = JSON.parse(savedPreferences) as CookiePreferences;
        setPreferences(prefs);

        // Load analytics if enabled in preferences
        if (prefs.analytics) {
          loadGoogleAnalytics();
        }
      } catch (e) {
        console.error('Failed to parse cookie preferences', e);
      }
    }

    if (savedConsent === 'all' || savedConsent === 'necessary') {
      setConsent(savedConsent as ConsentType);
      setShowBanner(false);
    } else {
      // Show banner if no consent given
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const prefs: CookiePreferences = { necessary: true, analytics: true };
    setConsent('all');
    setPreferences(prefs);
    localStorage.setItem(CONSENT_KEY, 'all');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);
    loadGoogleAnalytics();
  };

  const acceptNecessary = () => {
    const prefs: CookiePreferences = { necessary: true, analytics: false };
    setConsent('necessary');
    setPreferences(prefs);
    localStorage.setItem(CONSENT_KEY, 'necessary');
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));
    setShowBanner(false);
    setShowSettings(false);
    // Don't load analytics
  };

  const savePreferences = (prefs: CookiePreferences) => {
    setPreferences(prefs);
    localStorage.setItem(PREFERENCES_KEY, JSON.stringify(prefs));

    // Update consent type based on preferences
    const consentType = prefs.analytics ? 'all' : 'necessary';
    setConsent(consentType);
    localStorage.setItem(CONSENT_KEY, consentType);

    setShowBanner(false);
    setShowSettings(false);

    // Load or remove analytics based on preference
    if (prefs.analytics) {
      loadGoogleAnalytics();
    }
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
        // Note: GA4 automatically anonymizes IP addresses since 2020
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
        preferences,
        showBanner,
        acceptAll,
        acceptNecessary,
        savePreferences,
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
