import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { postRegisterUser as registerAPI } from "../Services/RegisterService";

export function useRegister() {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ type, username, email, password }) =>
      registerAPI({ type, username, email, password }),
    onSuccess: () => {
      // Get message from the response and show success toast message
      // redirect to login page
      navigate("/login");
    },
    onError: (error) => {
      // Get error message from the backend

      // Display error toast message to client
      console.log(error);
    },
  });

  return {
    register: mutation.mutate,
    isLoading: mutation.isPending,
  };
}
