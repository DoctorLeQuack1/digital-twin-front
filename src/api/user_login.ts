import axios from "axios";


export const loginFunction =  async (userProfile : any) => {

    try {
        const response = await axios.post("http://localhost:3001/auth/login", 
            {
                email:userProfile.email,
                password:userProfile.password
            }
        );
        console.log(response.status);
        return response;
    } catch (error) {
        console.error("Something went wrong, please try agian...")
    }
    
}