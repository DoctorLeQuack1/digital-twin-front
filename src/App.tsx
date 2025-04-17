import { BrowserRouter, Route, Routes } from "react-router";
import { NavBar } from "./components/NavBar";
import { LogIn } from "./pages/LogIn";
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
    </BrowserRouter>
  );
}