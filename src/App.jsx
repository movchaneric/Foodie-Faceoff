import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";

import LoginPage from "./features/authentication/Login/LoginPage";
import RegisterPage from "./features/authentication/Register/RegisterPage";
import AuthLayout from "./components/AuthLayout";
import MainMenu from "./features/MainMenu/MainMenu";
import ProtectedRoute from "../src/components/ProtectedRoute";
import { UserProvider } from "./features/authentication/Login/context/userContext";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

function App() {
  const googleClientId = import.meta.env.VITE_GOOGLE_AUTH_KEY;
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60 * 1000,
        staleTime: 0,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GoogleOAuthProvider clientId={googleClientId}>
          <UserProvider>
            <BrowserRouter>
              <Routes>
                {/* Public routes */}
                <Route index element={<AuthLayout />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />

                {/* Protected routes! */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/main" element={<MainMenu />} />
                </Route>
              </Routes>
            </BrowserRouter>
            <Toaster />
          </UserProvider>
        </GoogleOAuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
