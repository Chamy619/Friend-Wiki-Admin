import Typography from '@mui/material/Typography';

function Title({ text }) {
  return (
    <Typography variant="h5" sx={{ marginTop: '16px', marginBottom: '16px' }}>
      {text}
    </Typography>
  );
}

export default Title;
