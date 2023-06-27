import apiOrigin from './api';

export const registerUser = (user) => {
  return fetch(`${apiOrigin}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const loginUser = (user) => {
  return fetch(`${apiOrigin}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const getUsers = (jwt) => {
  return fetch(`${apiOrigin}/api/users?size=400`, {
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

export const getLoggedUser = (jwt, loggedUserId) => {
  return fetch(`${apiOrigin}/api/users/${loggedUserId}`, {
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

export const forgotPassword = (email) => {
  return fetch(`${apiOrigin}/api/users/forgot-password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  }).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};

export const resetPassword = (hash, newPassword) => {
  const url = `${apiOrigin}/api/users/password-reset/${hash}`;
  const body = JSON.stringify({ password: newPassword });

  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};

export const updateUser = (id, newUser, jwt) => {
  const url = `${apiOrigin}/api/users/${id}`;
  const body = JSON.stringify({
    first_name: newUser.first_name,
    last_name: newUser.last_name,
    email: newUser.email,
  });

  return fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${jwt}`,
    },
    body: body,
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
};
