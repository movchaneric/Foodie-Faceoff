import { useEffect } from "react";
import Box from "../../components/Box";
import { useRestuarants } from "./hooks/useRestuarants";

const Options = () => {
  const { restuarants, isLoading } = useRestuarants();

  useEffect(() => {
    console.log(restuarants);
  }, []);

  return (
    <div className="grid grid-rows-3 grid-cols-3 p-5 gap-x-1 gap-y-8 h-[50vh] border-4 border-yellow-400 rounded-md m-9">
      <div className="flex items-center justify-center">
        <Box />
      </div>
      <div className="flex items-center justify-center">
        <Box />
      </div>
      <div className="flex items-center justify-center">
        <Box />
      </div>
      <div className="flex items-center justify-center">
        <Box />
      </div>
      <div className="flex items-center justify-center">
        <Box />
      </div>
      <div className="flex items-center justify-center">
        <Box />
      </div>
      <div className="flex items-center justify-center">
        <Box />
      </div>
    </div>
  );
};

export default Options;
