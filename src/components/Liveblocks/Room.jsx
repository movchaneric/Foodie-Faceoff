import { LiveblocksProvider } from "@liveblocks/react/suspense";

const Room = ({ children }) => {
  return (
    <LiveblocksProvider
      publicApiKey={import.meta.env.VITE_LIVEBLOCKS_SECRET_KEY}
    >
      {children}
    </LiveblocksProvider>
  );
};

export default Room;
