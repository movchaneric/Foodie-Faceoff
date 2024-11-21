import { useQuery } from "react-query";
import { getCurrentUser } from "../service/userService";

export function useCurrentUser() {
  const { data: currentUser, isLoading } = useQuery({
    queryKey: ["currUser"],
    queryFn: getCurrentUser,
  });

  return { currentUser, isLoading };
}
