import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddButton({ showDialog }) {
  return (
    <Box textAlign="right">
      <IconButton onClick={showDialog}>
        <AddCircleIcon color="primary" fontSize="large" />
      </IconButton>
    </Box>
  );
}

export default AddButton;
