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
import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../utils/helpers";
import AddModal from "./AddModal";
import Connected from "./Connected";

const GameApp = ({ user }) => {
  const [myPresence, updateMyPresence] = useMyPresence();
  const broadcast = useBroadcastEvent();
  const others = useOthers();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log("modalIsOpen : ", modalIsOpen);

  // console.log("Others: ", others);
  // console.log("myPresence: ", myPresence);

  const isEveryoneReady =
    others.every((other) => other.presence.isReady) && myPresence.isReady;
  // console.log("isEveryoneReady: ", isEveryoneReady);

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
      <Connected others={others} />
      <Options />

      <ReadyGuests others={others} />

      <div className="flex items-start justify-center h-[15vh]">
        <Location setModalIsOpen={setModalIsOpen} />
        {!myPresence.isReady && (
          <Ready
            broadcast={broadcast}
            user={user}
            updateMyPresence={updateMyPresence}
          />
        )}
      </div>
      {modalIsOpen && (
        <AddModal modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}>
          fuck
        </AddModal>
      )}
    </>
  );
};

export default GameApp;
