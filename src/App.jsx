import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./features/authentication/Login/LoginPage";
import RegisterPage from "./features/authentication/Register/RegisterPage";
import AuthLayout from "./components/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<AuthLayout />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
