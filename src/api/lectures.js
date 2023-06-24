import apiOrigin from './api';

export const getAllLectures = (jwt) => {
  return fetch(`${apiOrigin}/api/lectures`, {
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

export const getResultByUserId = (jwt, userId) => {
  /*  return fetch(`${apiOrigin}/api/lectures`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });*/
};
