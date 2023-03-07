import { createTheme } from '@mui/material';

export const MuiTheme = createTheme({
  shape: {
    borderRadius: 5,
  },
  palette: {
    primary: {
      main: '#36E0A2',
      '100': '#36E0A220',
    },
    secondary: {
      main: '#000000',
    },
    text: {
      primary: '#263238',
      secondary: '#455A64',
    },
  },
  typography: {
    fontFamily:
      'Mabry Pro, -apple-system, "system-ui", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 300,
    fontWeightMedium: 500,
    fontWeightBold: 500,
    button: {
      fontWeight: 500,
      textTransform: 'none',
      fontSize: 16,
    },
  },
  shadows: [
    'none',
    '0 1px 1px 0 rgba(0,0,0,.09)',
    '0 1px 1px 0 rgba(0,0,0,.09), 0 2px 2px 0 rgba(0,0,0,.03)',
    '0 1px 1px 0 rgba(0,0,0,.09), 0 3px 4px 0 rgba(0,0,0,.03)',
    '0 2px 3px 0 rgba(0,0,0,.09), 0 4px 5px 0 rgba(0,0,0,.03)',
    '0 3px 5px 0 rgba(0,0,0,.09), 0 6px 10px 0 rgba(0,0,0,.03)',
    '0 4px 5px 0 rgba(0,0,0,.09), 0 8px 10px 1px rgba(0,0,0,.03)',
    '0 4px 6px 0 rgba(0,0,0,.09), 0 9px 12px 1px rgba(0,0,0,.03)',
    '0 6px 9px 0 rgba(0,0,0,.09), 0 12px 17px 2px rgba(0,0,0,.03)',
    '0 8px 12px 0 rgba(0,0,0,.09), 0 16px 24px 2px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
    '0 12px 19px 0 rgba(0,0,0,.09), 0 24px 38px 3px rgba(0,0,0,.03)',
  ],
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 10,
          backgroundColor: '#f1f2f3',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 20,
          boxShadow: '0 2px 3px 0 rgba(0,0,0,.03), 0 4px 5px 0 rgba(0,0,0,.03)',
          backgroundColor: '#ffffff',
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: 20,
          backgroundColor: '#f1f2f3',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 20,
          backgroundColor: '#f1f2f3',
        },
      },
    },
  },
});
