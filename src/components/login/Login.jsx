import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function Login({ form, error, onChange, onSubmit }) {
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
      onSubmit={onSubmit}
    >
      <TextField label="Username" name="username" fullWidth onChange={onChange} value={form.username} />
      <TextField label="Password" name="password" type="password" fullWidth onChange={onChange} value={form.password} />
      <Button type="submit" variant="contained" fullWidth size="large" sx={{ marginTop: '8px' }}>
        Login
      </Button>
      {error && (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error" sx={{ marginTop: '8px' }}>
            로그인에 실패했습니다.
          </Alert>
        </Stack>
      )}
    </Box>
  );
}

export default Login;
