export const lightTheme = {
  background: '#fff',
  textColor: '#000',
  columnBackground: '#f0f0f0',
  borderColor: '#000',
  hoverColor: 'rgb(8, 0, 255)',
  mediaQueries: {
    large: '1280px',
    medium: '1024px',
    small: '768px',
  }
};

export const darkTheme = {
  background: '#000',
  textColor: '#808080',
  columnBackground: '#1a1a1a',
  borderColor: '#808080',
  hoverColor: 'rgb(80, 120, 255)',
  mediaQueries: {
    large: '1280px',
    medium: '1024px',
    small: '768px',
  }
};

export type Theme = typeof lightTheme;
