import axios from "axios";
import toast from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const useGoogleAuth = () => {
  const navigate = useNavigate();
  const { user, setUser, profile, setProfile } = useUser();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
    },
    onError: (error) => toast.error("Login failed:\n", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
          navigate("/main");
        })
        .catch((error) => {
          toast.error("Axios google get error: ", error);
        });
    }
  }, [user]);
  //   console.log("Login: ", login, "\n User: ", user, "\n Profile: ", profile);
  return { login, user, profile };
};

export default useGoogleAuth;
