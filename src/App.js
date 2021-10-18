import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Route exact path="/login" component={LoginPage} />
    </Container>
  );
}

export default App;
