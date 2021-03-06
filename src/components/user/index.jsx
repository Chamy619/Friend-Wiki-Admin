import { useState } from 'react';
import UserTable from './UserTable';
import DeleteDialog from './DeleteDialog';
import LoadingCircle from '../common/LoadingCircle';
import AlertMessage from '../common/AlertMessage';

function User({ list, error, loading, onDelete }) {
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState('');

  const modalOpen = (username) => {
    setOpen(true);
    setTarget(username);
  };

  const modalClose = () => {
    setOpen(false);
    setTarget('');
  };

  if (loading) {
    return <LoadingCircle />;
  }

  if (error) {
    return <AlertMessage />;
  }

  return (
    <>
      <UserTable list={list} modalOpen={modalOpen} />
      <DeleteDialog open={open} onClose={modalClose} onDelete={onDelete} target={target} />
    </>
  );
}

export default User;
