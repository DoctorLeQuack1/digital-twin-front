import axios from "axios";

export const auth_user = async () => {
  const token = localStorage.getItem("JWT");

  if (!token) {
    console.error("No token found.");
    return false;
  }

  try {
    const response = await axios.get("http://localhost:3001/auth/validate", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Aquí puedes adaptar según lo que devuelve tu backend
    console.log(response.status)
    return response.data.valid && response.status === 200;
  } catch (error: any) {
    console.error(`Validation failed: ${error}`);
    return false;
  }
};