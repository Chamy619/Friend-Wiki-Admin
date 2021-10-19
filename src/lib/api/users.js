import client from './client';

export const fetchList = () => client.get('/api/admin/user');
export const deleteUser = ({ username }) => client.delete('/api/admin/user', { data: { username: username } });
