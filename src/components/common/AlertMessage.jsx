import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

function AlertMessage() {
  return (
    <Stack spacing={2} sx={{ marginTop: '2rem' }}>
      <Alert severity="error">
        <AlertTitle>에러</AlertTitle>
        내용을 가져올 수 없습니다.
      </Alert>
    </Stack>
  );
}

export default AlertMessage;
