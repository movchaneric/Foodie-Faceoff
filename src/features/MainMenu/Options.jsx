import { useEffect } from "react";
import Box from "../../components/Box";
import { useRestuarants } from "./hooks/useRestuarants";

const Options = () => {
  const { restuarants, isLoading } = useRestuarants();

  if (isLoading) return <div>Loading restuarants...</div>;
  console.log("Restuarants: ", restuarants);

  return (
    <div className="grid grid-rows-3 grid-cols-3 p-5 gap-x-1 gap-y-8 h-[50vh] border-4 border-yellow-400 rounded-md m-9">
      {restuarants?.map((restuarant) => (
        <div className="flex items-center justify-center" key={restuarant._id}>
          <Box restuarant={restuarant} />
        </div>
      ))}
    </div>
  );
};

export default Options;
