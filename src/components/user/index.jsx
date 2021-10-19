import { useState } from 'react';
import UserTable from './UserTable';
import DeleteDialog from './DeleteDialog';
import LoadingCircle from './LoadingCircle';
import Title from '../common/Title';
import AlertMessage from './AlertMessage';

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
      <Title text="사용자 정보" />
      <UserTable list={list} modalOpen={modalOpen} />
      <DeleteDialog open={open} onClose={modalClose} onDelete={onDelete} target={target} />
    </>
  );
}

export default User;
