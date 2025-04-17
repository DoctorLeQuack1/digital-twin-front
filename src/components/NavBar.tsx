
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, createTheme, ThemeProvider } from "flowbite-react";
import { useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const customTheme = createTheme({
        navbar: {
            root: {
                base: "bg-white px-2 py-2.5 sm:px-4 dark:bg-transparent",
            },
        },
    });

    const navigateLogin = (e : any, path : string) => {
        e.preventDefault();
        navigate(path);
    };

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md">
            <ThemeProvider theme={customTheme}>
                <Navbar fluid rounded>
                    <NavbarBrand href="https://flowbite-react.com">
                        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">Wolf Quest</span>
                    </NavbarBrand>

                    {location.pathname !== "/login" && <div className="flex md:order-2"> <Button onClick={(e) => {navigateLogin(e, "/login")}}>Log In</Button></div>}

                    <NavbarToggle />

                    <NavbarCollapse>
                        <NavbarLink onClick={(e) => {navigateLogin(e, "/")}}>
                            Home
                        </NavbarLink>
                        <NavbarLink onClick={(e) => {navigateLogin(e, "/")}}>About</NavbarLink>
                        <NavbarLink onClick={(e) => {navigateLogin(e, "/")}}>Contact</NavbarLink>
                    </NavbarCollapse>
                </Navbar>
            </ThemeProvider>
        </div>
    );
}
