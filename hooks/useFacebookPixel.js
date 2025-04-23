export const useFacebookPixel = () => {
    const trackEvent = (eventName, data = {}) => {
      if (typeof window !== 'undefined' && window.fbq) {
        fbq('track', eventName, data);
      }
    };
    return { trackEvent };
  };