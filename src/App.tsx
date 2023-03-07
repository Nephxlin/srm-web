import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
import { Global } from './styles/Global';
import theme from './_UI/Config/Theme';
import { MuiTheme } from './_UI/Config/Theme/mui';

function App() {
  return (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={theme}>
        <Global />
        <Router />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
