export interface IBaseTheme {
  colors: {
    white: string;
    blue: string;
    lightBlue: string;
    red: string;
    gray: string;
    black: string;
  };

  borderRadius: string;
}

export const baseTheme = {
  colors: {
    white: '#FFFFFF',
    blue: '#4A67FF',
    lightBlue: '#99A9FF',
    red: '#E26F6F',
    gray: '#F5F5F5',
    black: '#1F1F1F',
  },

  borderRadius: '8px',
};
