import { useEffect, useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../features/authentication/Authentication/useAuth";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true); // Start with loading true
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("/authCheck", {
          withCredentials: true,
        });
        console.log("Protected Route = ", response);
        setIsAuthenticated(response.data.isAuthenticated);
      } catch (err) {
        setIsAuthenticated(false);
      } finally {
        setIsLoading(false); // Set loading to false after check
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isAuthenticated) {
    return children;
  }

  return null; // Render nothing if not authenticated and waiting for navigation
};

export default ProtectedRoute;
