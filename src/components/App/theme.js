import { createMuiTheme } from '@material-ui/core/styles/';

export default createMuiTheme({
  palette: {
    primary: {main: '#7690B8'}, 
    secondary: {main: '#D19124'},
    inherit: { main: '#af2e11'},
  },
  typography: {
      fontFamily: 'Lato',
      h6:{
        color: '#D19124'
      }
  }
});