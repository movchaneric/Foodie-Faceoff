import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import { postLoginUser as loginAPI } from "../service/loginService";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ username, password }) => {
      loginAPI({ username, password });
    },
    onSuccess: (user) => {
      console.log("On success user: ", user);
      queryClient.setQueryData(["user"], user);
      // Set timeout for jwt to load into the cookie
      setTimeout(() => {
        navigate("/main");
      }, 1000);
    },
  });

  return { login, isLoading };
}
