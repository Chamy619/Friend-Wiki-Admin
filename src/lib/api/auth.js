import client from './client';

export const login = ({ username, password }) => client.post('/api/admin/login', { username, password });
export const check = () => client.get('/api/admin/check');
