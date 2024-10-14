import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import LoginPage from "./features/authentication/Login/LoginPage";
import RegisterPage from "./features/authentication/Register/RegisterPage";
import AuthLayout from "./components/AuthLayout";
import MainMenu from "./features/MainMenu/MainMenu";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_AUTH_KEY;

  return (
    <>
      <GoogleOAuthProvider clientId={googleClientId}>
        <BrowserRouter>
          <Routes>
            <Route index element={<AuthLayout />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/main" element={<MainMenu />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
