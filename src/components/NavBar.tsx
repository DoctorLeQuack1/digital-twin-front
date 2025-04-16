
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle, createTheme, ThemeProvider } from "flowbite-react";

export const NavBar = () => {


    const customTheme = createTheme({
        navbar: {
            root: {
                base: "bg-white px-2 py-2.5 sm:px-4 dark:bg-transparent",
                rounded: {
                    on: "rounded",
                    off: "",
                },
            },
            link: {

            }
        },
        button: {
            color: {
                custom: "bg-gray-800 dark:bg-white hover:bg-white dark:hover:bg-gray-800 dark:text-gray-800 dark:hover:text-white text-white hover:text-gray-800"
            },
            outlineColor: {
                custom: "bg-gray-800 dark:bg-white hover:bg-white dark:hover:bg-gray-800"
            }
        }
    });

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md">
            <ThemeProvider theme={customTheme}>
                <Navbar fluid rounded>
                    <NavbarBrand href="https://flowbite-react.com">
                        <img src="/vite.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">Flowbite React</span>
                    </NavbarBrand>
                    <div className="flex md:order-2">
                        <Button color="custom">Log In</Button>
                        <NavbarToggle />
                    </div>
                    <NavbarCollapse>
                        <NavbarLink href="#">
                            Home
                        </NavbarLink>
                        <NavbarLink href="#">About</NavbarLink>
                        <NavbarLink href="#">Services</NavbarLink>
                        <NavbarLink href="#">Pricing</NavbarLink>
                        <NavbarLink href="#">Contact</NavbarLink>
                    </NavbarCollapse>
                </Navbar>
            </ThemeProvider>
        </div>
    );
}
