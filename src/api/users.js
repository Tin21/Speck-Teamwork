import apiOrigin from './api';

export const getUsers = (jwt) => {
  return fetch(`${apiOrigin}/api/users?size=143`, {
    //fetch je po defaultu GET
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};
