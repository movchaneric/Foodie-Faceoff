import { useQuery } from "react-query";
import { getAllRestuarants } from "../Services/restuarantService";

export function useRestuarants() {
  const { data: restuarants, isLoading } = useQuery({
    queryKey: ["restuarants"],
    queryFn: getAllRestuarants,
  });

  return { restuarants, isLoading };
}
