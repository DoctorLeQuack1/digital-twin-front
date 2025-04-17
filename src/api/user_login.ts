import axios from "axios";


export const loginFunction =  async (userProfile : any) => {

    try {
        const response = await axios.post("https://api.ejemplo.com/endpoint", 
            {
                email:userProfile.email,
                password:userProfile.password
            }
        );
        console.log(response.status);
    } catch (error) {
        console.error("Something went wrong, please try agian...")
    }
    
}