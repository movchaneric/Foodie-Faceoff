import {
  ClientSideSuspense,
  RoomProvider,
  useBroadcastEvent,
  useOther,
  useOthers,
} from "@liveblocks/react";
import Room from "../../components/Liveblocks/Room";
import MenuHeader from "../../components/MenuHeader";
import { capitalizeFirstLetter, getRandomColor } from "../../utils/helpers";
import { LiveMap } from "@liveblocks/client";
import GameApp from "../../components/GameApp";
import { useUser } from "../authentication/User/useUser";
import { useEffect, useState } from "react";

const MainMenu = () => {
  const { user, isLoading } = useUser();

  //TODO: Change it to proper loading to cover the whole screen , maybe animation ???
  if (isLoading) return <div>Loading user</div>;

  return (
    <>
      <MenuHeader />

      <Room>
        <RoomProvider
          id="my-room"
          initialPresence={{
            displayName: user.username,
            color: getRandomColor(),
          }}
          initialStorage={{ scores: new LiveMap([]) }}
        >
          <ClientSideSuspense fallback={<div>Loading…</div>}>
            <GameApp user={user} />
          </ClientSideSuspense>
        </RoomProvider>
      </Room>
    </>
  );
};

export default MainMenu;
