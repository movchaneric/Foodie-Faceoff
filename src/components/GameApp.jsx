import {
  useBroadcastEvent,
  useEventListener,
  useMyPresence,
  useOthers,
} from "@liveblocks/react";
import Options from "../features/MainMenu/Options";
import ReadyGuests from "../features/ReadyGuests/ReadyGuests";
import Location from "./MainMenu/Location";
import Ready from "./MainMenu/Ready";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

const GameApp = ({ user }) => {
  const [myPresence, updateMyPresence] = useMyPresence();
  const broadcast = useBroadcastEvent();
  const others = useOthers();
  // console.log("others:", others);

  useEffect(() => {
    if (user) {
      
      broadcast({
        type: "TOAST/LOGIN",
        message: `${capitalizeFirstLetter(user.username)} is logged in.`,
      });
    }
  }, [user, broadcast]);

  //Listen for incoming other users login
  useEventListener(({ event }) => {
    if (event.type === "TOAST/READY" || event.type === "TOAST/LOGIN") {
      toast.success(event.message); // Handle "READY" events
    }
  });

  return (
    <>
      <p>There are {others.length} users connceted.</p>
      <Options />

      <ReadyGuests />
      <div className="flex items-start justify-center h-[15vh]">
        <Location />
        <Ready broadcast={broadcast} user={user} />
      </div>
    </>
  );
};

export default GameApp;
