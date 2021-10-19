import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList, deleteUser } from '../../modules/users';
import User from '../../components/user';

function UserTableContainer() {
  const dispatch = useDispatch();
  const { list, error, loading } = useSelector(({ users, loading }) => ({
    list: users.list,
    error: users.error,
    loading: loading['users/FETCH_LIST'],
  }));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  const onDelete = (username) => {
    dispatch(deleteUser(username));
    dispatch(fetchList());
  };

  return <User list={list} error={error} loading={loading} onDelete={onDelete} />;
}

export default UserTableContainer;
