import './App.css';
import { Route } from 'react-router-dom';
import { Container } from '@mui/material';
import LoginPage from './pages/LoginPage';
import UserPage from './pages/UserPage';
import HomePage from './pages/HomePage';
import GenealogyPage from './pages/GenealogyPage';

function App() {
  return (
    <Container sx={{ height: '100%', display: 'flex', justifyContent: 'center' }}>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
      <Route path="/user" component={UserPage} />
      <Route path="/genealogy" component={GenealogyPage} />
    </Container>
  );
}

export default App;
