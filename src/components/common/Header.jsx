import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const LinkButton = styled(Button)(() => ({
  color: '#f0f0f0',
  '&.active': {
    fontWeight: 800,
    borderBottom: '3px solid #f0f0f0',
    borderRadius: 0,
  },
}));

function Header({ current, linking, items }) {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {items.map((item) => (
            <LinkButton
              key={item.key}
              onClick={() => {
                linking(item);
              }}
              className={item.key === current ? 'active' : ''}
            >
              {item.text}
            </LinkButton>
          ))}
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}

export default Header;
