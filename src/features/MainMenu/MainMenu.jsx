import { ClientSideSuspense, RoomProvider, useOthers } from "@liveblocks/react";
import Room from "../../components/Liveblocks/Room";
import MenuHeader from "../../components/MenuHeader";
import { getRandomColor } from "../../utils/helpers";
import { LiveMap } from "@liveblocks/client";
import GameApp from "../../components/GameApp";

const dummyUserTest = {
  displayName: "Eric",
  color: getRandomColor(),
};

const MainMenu = () => {
  // const { profile, setProfile, setUser } = useUser();
  // const others = useOthers();
  // console.log("Others: ", others);

  return (
    <>
      <MenuHeader />

      <Room>
        <RoomProvider
          id="my-room"
          initialPresence={{
            displayName: dummyUserTest.displayName,
            color: dummyUserTest.color,
          }}
          initialStorage={{ scores: new LiveMap([]) }}
        >
          <ClientSideSuspense fallback={<div>Loading…</div>}>
            <GameApp />
          </ClientSideSuspense>
        </RoomProvider>
      </Room>
    </>
  );
};

export default MainMenu;
