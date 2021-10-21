import client from './client';

export const list = () => client.get('/api/admin/genealogy');
export const read = (id) => client.get(`/api/admin/genealogy/${id}`);
export const write = ({ name, date, description }) =>
  client.post('/api/admin/genealogy', {
    name,
    date,
    description,
  });
export const update = ({ id, name, date, description }) =>
  client.patch(`/api/admin/genealogy/${id}`, {
    name,
    date,
    description,
  });
export const remove = (id) => client.delete(`/api/admin/genealogy/${id}`);
