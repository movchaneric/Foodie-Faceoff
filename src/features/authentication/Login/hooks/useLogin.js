import toast from "react-hot-toast";
import axios from "../../../../axios";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postLoginUser as loginAPI } from "../service/loginService";

export function useLogin() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ username, password }) => {
      loginAPI({ username, password });
    },
    onSuccess: (user) => {
      // Maybe store user in reactQuery cache ? chcek this!
      // Navigate to main page
      //   navigate("/main");
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
  };
}
