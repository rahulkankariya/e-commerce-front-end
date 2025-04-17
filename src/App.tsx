import Login from './pages/login'
import './App.css'

import { ThemeProvider, createTheme } from '@mui/material/styles';
function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: '#c7ae6a',
            color: '#2b3d5f',
            fontWeight:700,
            '&:hover': {
              backgroundColor: '#b3985a',
            },
          },
        },
      },
    },
  });
  

  return (
    <>
    <ThemeProvider theme={theme}>
    <Login/>
    </ThemeProvider>
    
     
    </>
  )
}

export default App
