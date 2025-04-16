import { BrowserRouter, Route, Routes } from "react-router";
import { NavBar } from "./components/navBar";
import { Home } from "./pages/Home";
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Home/>
      <Routes>

      </Routes>
    </BrowserRouter>
  );
}