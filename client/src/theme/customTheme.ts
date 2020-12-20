import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Call `extendTheme` and pass your custom values
const customTheme = extendTheme({
  styles: {
    global: props => ({
      body: {
        color: mode('#333', 'white')(props),
      },
      h1: {
        fontSize: '1.8rem',
      },
      ul: {
        listStyle: 'none',
      },
      h2: {},
    }),
  },
  colors: {
    brandLight: '#b197fc',
    brandDark: '#7950f2',
    brandAlpha: 'rgba(121, 75, 196,.3)',
    background: {
      light: 'rgb(235, 238, 240)',
      100: 'rgb(61, 84, 102)',
      200: 'rgb(56, 68, 77)',
      300: 'rgb(21,32,43)',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});

export default customTheme;
