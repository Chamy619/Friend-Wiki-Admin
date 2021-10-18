import client from './client';

export const login = ({ username, password }) => client.post('/api/admin/login', { username, password });
