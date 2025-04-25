import axios from "axios";

export const auth_user = async () => {

    try {
        const token = localStorage.getItem('JWT');
        const response = await axios.get('http://localhost:3001/auth/validation', {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (response.status == 200 && response.data.valid) {
            return true;
        } else {
            return false;
        }
        console.log(response.data)
    } catch (error) {
        console.error("Something went wrong.");
        return false;
    }


};