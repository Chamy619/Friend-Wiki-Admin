import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function DeleteDialog({ open, onClose, onDelete, target }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>사용자 삭제</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <b>{target}</b> 님을 삭제하시겠습니까?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          취소
        </Button>
        <Button
          onClick={() => {
            onDelete(target);
            onClose();
          }}
          variant="contained"
          color="error"
        >
          삭제
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
