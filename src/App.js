import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import { Container } from '@mui/material';

function App() {
  return (
    <Container sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={UserPage} />
    </Container>
  );
}

export default App;
