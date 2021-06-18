import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const createTheme = (): Theme => {
  return createMuiTheme({
    palette: {
      primary: {
        main: '#C7A3F9',
      },
      background: {
        default: '#FFFFFF',
      },
    },
  });
};

export default createTheme;
