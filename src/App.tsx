import { BrowserRouter, Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { LogIn } from "./pages/LogIn";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";

import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}