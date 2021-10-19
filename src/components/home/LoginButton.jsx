import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function LoginButton({ goLogin }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Button variant="contained" size="large" onClick={goLogin}>
        로그인
      </Button>
    </Box>
  );
}

export default LoginButton;
