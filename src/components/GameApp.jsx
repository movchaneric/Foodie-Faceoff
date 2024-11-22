import { useOthers } from "@liveblocks/react";
import Options from "../features/MainMenu/Options";
import ReadyGuests from "../features/ReadyGuests/ReadyGuests";
import Location from "./MainMenu/Location";
import Ready from "./MainMenu/Ready";

const GameApp = () => {
  const others = useOthers();
  console.log("others:", others);

  return (
    <>
      <p>There are {others.length} users connceted.</p>
      <Options />

      <ReadyGuests />
      <div className="flex items-start justify-center h-[15vh]">
        <Location />
        <Ready />
      </div>
    </>
  );
};

export default GameApp;
