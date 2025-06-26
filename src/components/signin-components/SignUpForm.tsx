import { useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const SignUpForm = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();
    const { setIsAuth } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSignUp(name, lastName, email, password);
    };

    // Función que realiza la petición GraphQL para registrar usuario
    const handleSignUp = async (name: string, lastName: string, email: string, password: string) => {
        // Limpiar los inputs al iniciar el registro
        setName("");
        setLastName("");
        setEmail("");
        setPassword("");

        const mutation = `
            mutation Mutation($input: UsersInput!) {
                addUser(input: $input) {
                    token
                    user {
                        _id
                        asset
                        email
                        last_name
                        name
                        password
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
                        input: {
                            email,
                            last_name: lastName,
                            name,
                            password,
                        },
                    },
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const data = response.data.data?.addUser;
            if (data && data.token && data.user) {
                setIsAuth(true);
                localStorage.setItem('JWT', data.token);
                localStorage.setItem('UserName', data.user.name);
                localStorage.setItem('UserLastName', data.user.last_name);
                localStorage.setItem('Email', data.user.email);
                navigate("/dashboard");
            } else {
                alert("User already exists or invalid data.");
                console.error("SignUp failed: No token or user returned.");
            }
        } catch (error) {
            alert("User already exists or invalid data.");
            console.error("SignUp error:", error);
        }
    };

    return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="username">Your name</Label>
                </div>
                <TextInput
                    id="username"
                    type="text"
                    sizing="md"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="userLastName">Your last name</Label>
                </div>
                <TextInput
                    id="userLastName"
                    type="text"
                    sizing="md"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className="mb-2 block">
                <Label htmlFor="email1">Your email</Label>
            </div>
            <TextInput
                id="email1"
                type="email"
                placeholder="name@flowbite.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="mb-2 block">
                <Label htmlFor="password1">Your password</Label>
            </div>
            <TextInput
                id="password1"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit">Submit</Button>
        </form>
    );
}