import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Login() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {
          m: 1,
        },
        width: '20rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
      noValidate
      autoComplete="off"
    >
      <TextField label="Username" fullWidth />
      <TextField label="Password" type="password" fullWidth />
      <Button type="submit" variant="contained" fullWidth size="large" sx={{ marginTop: '8px' }}>
        Login
      </Button>
    </Box>
  );
}

export default Login;
