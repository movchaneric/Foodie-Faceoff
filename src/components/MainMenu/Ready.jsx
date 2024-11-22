import { useMyPresence } from "@liveblocks/react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Ready = ({ broadcast, user, updateMyPresence }) => {
  return (
    <div className="flex justify-center p-4">
      <button
        onClick={() => {
          updateMyPresence({ isReady: !useMyPresence.isReady });

          broadcast({
            type: "TOAST",
            message: `${capitalizeFirstLetter(user.username)} is ready.`,
          });
        }}
        className="btn btn-accent"
      >
        {" "}
        Ready!
      </button>
    </div>
  );
};

export default Ready;
