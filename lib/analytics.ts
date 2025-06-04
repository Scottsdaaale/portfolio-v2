// Google Analytics utility functions

declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void;
  }
}

// Google Analytics measurement ID - replace with your actual GA4 ID
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Track custom events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific tracking functions for portfolio events
export const trackContactFormSubmit = () => {
  event({
    action: 'submit',
    category: 'Contact Form',
    label: 'Portfolio Contact Form',
  });
};

export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'Social Media',
    label: platform,
  });
};

export const trackProjectView = (projectName: string) => {
  event({
    action: 'view',
    category: 'Project',
    label: projectName,
  });
};

export const trackDownloadResume = () => {
  event({
    action: 'download',
    category: 'Resume',
    label: 'PDF Download',
  });
}; 