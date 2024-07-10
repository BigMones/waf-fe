import { jwtDecode } from 'jwt-decode'; // Correct import statement

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    console.error("Invalid token", error);
    return null;
  }
};