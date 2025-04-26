import { Button, Footer, createTheme, ThemeProvider, FooterBrand, FooterDivider, FooterCopyright } from "flowbite-react";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export const AppFooter = () => {
  const customTheme = createTheme({
    footer: {
      root: {
        base: "w-full bg-white shadow dark:bg-transparent border-t dark:border-gray-700",
      },
    },
  });


  return (
    <div className="bottom-0 sticky w-full bg-gray-900">
      <ThemeProvider theme={customTheme}>
        <Footer container className="py-4">
          <div className="w-full">
            <div className="flex w-full flex-col sm:flex-row items-center justify-between">
              <div className="flex flex-wrap">
                <img src="/dog.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-black">WOOFQUEST</span>
              </div>
              <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center gap-4">
                <Button color="light" href="/about">
                  About Us
                </Button>
                <Button color="light" href="https://github.com/your-repo" className="flex items-center gap-2">
                  <FaGithub className="h-5 w-5" />
                  Repository
                </Button>
                <Button color="light" href="https://x.com/your-handle" className="flex items-center gap-2">
                  <FaXTwitter className="h-5 w-5" />
                  Follow Us
                </Button>
              </div>
            </div>
            <FooterDivider />
            <div className="w-full text-center">
              <FooterCopyright href="#" by="WOOFQUEST™" year={2025} />
            </div>
          </div>
        </Footer>
      </ThemeProvider>
    </div>
  );
};