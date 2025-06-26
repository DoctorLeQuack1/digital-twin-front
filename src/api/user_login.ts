import axios from "axios";

export const loginFunction = async (userProfile: { email: string; password: string }) => {
  const mutation = `
    mutation Login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
          _id
          email
          password
          name
          last_name
          asset
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      "https://digital-twin-backend-e5h4.onrender.com/graphql",
      {
        query: mutation,
        variables: {
          email: userProfile.email,
          password: userProfile.password,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.data.login;
  } catch (error) {
    console.log("Login failed.");
    console.log(error);
    console.error(error);
    return false;
  }
};