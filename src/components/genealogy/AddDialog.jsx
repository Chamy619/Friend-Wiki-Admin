import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';

function AddDialog({ open, closeAddDialog, handleChange, form, addKing }) {
  return (
    <Dialog open={open} onClose={closeAddDialog} size="large">
      <DialogTitle sx={{ width: '550px' }}>나댐왕 정보</DialogTitle>
      <DialogContent>
        <Stack spacing={2} direction="column" sx={{ width: '100%', paddingTop: '8px' }}>
          <TextField variant="standard" label="이름" name="name" onChange={handleChange} value={form.name} fullWidth />
          <TextField variant="standard" label="연도" name="date" onChange={handleChange} value={form.date} fullWidth />
          <TextField
            label="설명"
            name="description"
            multiline
            rows={2}
            onChange={handleChange}
            value={form.description}
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" onClick={addKing}>
          확인
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddDialog;
