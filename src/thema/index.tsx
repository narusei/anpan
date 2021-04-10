import { createMuiTheme } from '@material-ui/core/styles';
import { purple, red } from '@material-ui/core/colors';

const createTheme = () => {
  return createMuiTheme({
    palette: {
      primary: purple,
      secondary: red,
    },
  });
};

export default createTheme;
