export {};

declare global {
  interface Window {
    ttq?: {
      track: (event: string, options?: any) => void;
      page: () => void;
    };
  }
}
