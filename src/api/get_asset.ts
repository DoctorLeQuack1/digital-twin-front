import axios from "axios";

export const get_asset = async () => {
  const token = localStorage.getItem("JWT");
  if (!token) {
    console.error("No token found.");
    return null;
  }

  const query = `
    query {
      getAsset
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
    // Si el usuario no está autenticado o no existe, el backend lanzará un error y no habrá data.getAsset
    if (response.data.errors) {
      console.error(response.data.errors[0].message);
      return null;
    }
    return response.data.data.getAsset;
  } catch (error) {
    console.error("Something went wrong!");
    return null;
  }
};