import {
  Container,
  createMuiTheme,
  CssBaseline,
  Paper,
  ThemeProvider,
} from '@material-ui/core';
import HomeScreen from './screens/HomeScreen';

import './App.css';
import { Route, Routes } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      color: 'black',
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 'bold',
      color: 'white',
    },
  },
  palette: {
    primary: { main: '#ff1744' },
    secondary: { main: '#118e16', contrastText: '#ffffff' },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth='sm'>
        <Paper>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/choose' element={<ChooseScreen />} />
          </Routes>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
