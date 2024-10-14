import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/Login/context/userContext";
import { useEffect } from "react";

// import { useEffect } from "react";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  // 1.Load current logged-in user
  const { profile } = useUser();
  console.log("Profile PR: ", profile);

  // 2. If no loggedin user then navigate to /login
  useEffect(() => {
    if (!profile) navigate("/");
  }, [profile, navigate]);

  //4. If user is loaded then show children
  if (profile) return children;
};

export default ProtectedRoute;
