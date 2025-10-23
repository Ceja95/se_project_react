const baseUrl = "http://localhost:3001";

const register = ({ name, avatar, email, password }) => {
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  });
};

const login = ({ email, password }) => {
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
};

const checkToken = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  });
}

export { register, login, checkToken };
