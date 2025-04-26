import axios from "axios";

export const get_asset = async () => {

    const token = localStorage.getItem("JWT");
    const user_email = localStorage.getItem("Email");

    if (!token) {
        console.error("No token found.");
        return false;
    }

    try {
        const response = await axios.get("http://localhost:3001/api/asset", {
            headers: {
                Authorization: `Bearer ${token}`,
                UserEmail: user_email
            },
        });
        console.log(response.data);
        return response.data;

    } catch (error) {
        console.error("Something went wrong!");
        return undefined;
    }

};