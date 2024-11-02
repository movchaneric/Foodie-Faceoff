import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../../axios";
import toast from "react-hot-toast";

export function useLogout() {
  const [isLoggingOut, setIsLogginOut] = useState(false);
  const navigate = useNavigate();

  const logout = useCallback(() => {
    setIsLogginOut(true);
  }, []);

  useEffect(() => {
    if (!isLoggingOut) return; //Exit if logout not initiated

    const performLogout = async () => {
      try {
        const response = await axios.get("/logout", { withCredentials: true });
        if (response.data.status === "success") {
          toast.success("Logout successful");
          // Redirect to login page after logout
          navigate("/login");
        }
      } catch (err) {
        console.error("Error logging out: ", err);
      } finally {
        setIsLogginOut(false);
      }
    };

    performLogout();
  }, [isLoggingOut, navigate]);

  return { logout, isLoggingOut };
}
