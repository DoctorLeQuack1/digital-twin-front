
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, createTheme, ThemeProvider } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";

export const NavBar = () => {

    const { isAuth, setIsAuth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const customTheme = createTheme({
        navbar: {
            root: {
                base: "bg-white px-2 py-2.5 sm:px-4 dark:bg-transparent",
            },
        },
    });

    const navigateLogin = (e: any, path: string) => {
        e.preventDefault();
        navigate(path);
    };

    const signOut = (e: any) => {
        e.preventDefault();
        navigate("/");

        setTimeout(() => {
            localStorage.clear(); // Se ejecuta después de la navegación
            setIsAuth(false);
        }, 1); // 
    };

    let logInSignInButton = null;

    if (location.pathname !== "/login" && !isAuth) {
        logInSignInButton = (<div className="flex md:order-2"> <Button onClick={(e) => { navigateLogin(e, "/login") }}>Log In</Button></div>);
    } else if (location.pathname !== "/login" && isAuth) {
        logInSignInButton = (<div className="flex md:order-2"> <Button onClick={(e) => { signOut(e) }}>Sign Out</Button></div>);
    }

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md">
            <ThemeProvider theme={customTheme}>
                <Navbar fluid rounded>
                    <NavbarBrand>
                        <img src="/dog.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">WOOFQUEST</span>
                    </NavbarBrand>

                    {logInSignInButton}

                    <NavbarToggle />

                    <NavbarCollapse>
                        {location.pathname !== "/dashboard" && isAuth && <NavbarLink onClick={(e) => { navigateLogin(e, "/dashboard") }}>
                            Dashboard
                        </NavbarLink>}
                        <NavbarLink onClick={(e) => { navigateLogin(e, "/") }}>
                            Home
                        </NavbarLink>
                        <NavbarLink onClick={(e) => { navigateLogin(e, "/contact") }}>Contact</NavbarLink>
                    </NavbarCollapse>
                </Navbar>
            </ThemeProvider>
        </div>
    );
}
