import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function LoadingCircle() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: '5rem' }}>
      <CircularProgress />
    </Box>
  );
}

export default LoadingCircle;
