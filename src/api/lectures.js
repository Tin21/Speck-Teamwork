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

export const getLectureCriteriaByUserId = (jwt, userId) => {
  return fetch(`${apiOrigin}/api/users/${userId}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((user) => {
      return user.user_lecture_criteria;
    });
};

export const getLectureCriteriaDataById = (jwt, id) => {
  return fetch(`${apiOrigin}/api/lecture-criteria/${id}`, {
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

export const getLectureNameById = (jwt, id) => {
  return fetch(`${apiOrigin}/api/lectures/${id}`, {
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
