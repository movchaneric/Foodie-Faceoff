import { useQuery, useQueryClient } from "react-query";
import { fetchUser } from "./service/userService";

export function useUser() {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
    staleTime: 1000 * 60 * 60 * 2, // Stale for 2 hours
  });

  return { user, isLoading, error };
}
