import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginPage from "./features/authentication/Login/LoginPage";
import RegisterPage from "./features/authentication/Register/RegisterPage";
import AuthLayout from "./components/AuthLayout";
import MainMenu from "./features/MainMenu/MainMenu";
import { UserProvider } from "./features/authentication/Login/context/userContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_AUTH_KEY;

  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <UserProvider>
          <BrowserRouter>
            <Routes>
              {/* Public routes */}
              <Route index element={<AuthLayout />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Protected route */}
              <Route
                path="/main"
                element={
                  <ProtectedRoute>
                    <MainMenu />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </BrowserRouter>
          <Toaster />
        </UserProvider>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
