import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { AppFooter } from "./components/AppFooter";
import { LogIn } from "./pages/LogIn";
import { PageFooter } from "./components/PageFooter";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Dashboard } from "./components/Dashboard";
import "./App.css"

export const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/login" element={<LogIn />} />
      <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      <Route path="/404" element={<h1>Page Not Found</h1>}/>
      </Routes>
      <AppFooter/>
    </BrowserRouter>
  );
}