type ToastColors = 'success' | 'error' | 'warning' | 'light' | 'dark';

export interface Toast {
  text?: string;
  color?: ToastColors;
  time?: number;
  closable?: boolean;
}
