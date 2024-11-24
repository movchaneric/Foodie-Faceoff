import { LuUsers } from "react-icons/lu";

const Connected = ({ others }) => {
  return (
    <div className="flex justify-start items-center gap-2 ml-10">
      <LuUsers />
      <p>{others.length} </p>
    </div>
  );
};

export default Connected;
