import axios from "axios";

export const auth_user = async () => {
  const token = localStorage.getItem("JWT");
  if (!token) {
    console.error("No token found.");
    return false;
  }

  const query = `
    query {
      me {
        _id
        email
        name
        last_name
        asset
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://digital-twin-backend-e5h4.onrender.com/graphql",
      { query },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data.me;
  } catch (error) {
    console.error(error);
    return false;
  }
};