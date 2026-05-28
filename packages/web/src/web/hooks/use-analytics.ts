export const useAnalytics = () => ({
  trackEvent: (name: string, props?: Record<string, unknown>) => {
    (window as any).stonks?.event(name, props);
  },
  trackView: (path?: string, props?: Record<string, unknown>) => {
    (window as any).stonks?.view(path, props);
  },
});
