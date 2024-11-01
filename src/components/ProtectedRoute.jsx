import { useEffect, useState } from "react";
import axios from "../axios";
import { Outlet, useNavigate } from "react-router-dom";

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
        setIsAuthenticated(response.data.isAuthenticated);
        console.log(response);
      } catch (err) {
        setIsAuthenticated(false);
        console.log(err);
      } finally {
        setIsLoading(false); // Set loading to false after check
      }
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate("/login");
    }
  }, [isLoading, isAuthenticated, navigate]);

  if (isLoading) return <div>Loading...</div>;

  return isAuthenticated ? <Outlet /> : null;
};

export default ProtectedRoute;
