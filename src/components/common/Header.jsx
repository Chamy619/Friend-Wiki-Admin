import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LinkButton = styled(Button)(() => ({
  color: '#f0f0f0',
}));

function Header() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <LinkButton>유저 관리</LinkButton>
          <LinkButton>나댐왕 관리</LinkButton>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
