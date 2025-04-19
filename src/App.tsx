import Login from './pages/login'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
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
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </Router>
    </ThemeProvider>
    
     
    </>
  )
}

export default App
