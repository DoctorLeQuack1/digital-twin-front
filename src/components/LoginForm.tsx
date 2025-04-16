
import { Button, Checkbox, Label, TextInput, createTheme, ThemeProvider } from "flowbite-react";
import { useState } from "react";

export const LoginForm = () => {

  

  const customTheme = createTheme({
    textInput: {
      "field": {
        "base": "relative w-full",
        "icon": {
          "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
          "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
        },
        
        "input": {
          "base": "block min-w-sm border focus:outline-none focus:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
      
        }
      }
    },
  });

  const clickHandler = (e : any) => {
    e.preventDefault();
    console.log("Formulario enviado");
  };


  return (

    <ThemeProvider theme={customTheme}>
      <form className="flex max-w-md flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1">Your email</Label>
          </div>
          <TextInput
            id="email1"
            type="email"
            placeholder="name@email.com"
            required
            onInvalid={(e) => e.currentTarget.setCustomValidity("Please, enter a valid email")}
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1">Your password</Label>
          </div>
          <TextInput
            id="password1"
            type="password"
            placeholder="tell your secrets"
            required
            onInvalid={(e) => e.currentTarget.setCustomValidity("Please, enter valid password")}
            onInput={(e) => e.currentTarget.setCustomValidity("")}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit" onSubmit={(e) => clickHandler(e)}>Submit</Button>
      </form>
    </ThemeProvider>
  );
}
