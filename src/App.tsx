import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/layout-components/NavBar";
import { AppFooter } from "./components/layout-components/AppFooter";
import { LogIn } from "./pages/LogIn";
import { ProtectedRoute } from "./components/wrapper-components/ProtectedRoute";
import { Dashboard } from "./pages/Dashboard";
import { CombinedProviders } from "./context/CombinedProvider";
import { RedirectionRoute } from "./components/wrapper-components/RedirectionRoute";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import "./App.css";
import { SignUp } from "./pages/SignUp";

export const App = () => {
  return (
    <CombinedProviders>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route
            path="/login"
            element={
              <RedirectionRoute redirectTo="/dashboard">
                <LogIn />
              </RedirectionRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <RedirectionRoute redirectTo="/dashboard">
                <SignUp />
              </RedirectionRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/404" element={<h1>Page Not Found</h1>} />
          <Route path="/*" element={<h1>Page Not Found</h1>} />
        </Routes>
        <AppFooter />
      </BrowserRouter>
    </CombinedProviders>
  );
};