import MenuHeader from "../../components/MenuHeader";
import { useUser } from "../authentication/Login/context/userContext";
import ReadyGuests from "../ReadyGuests/ReadyGuests";
import Options from "./Options";

const MainMenu = () => {
  // const { profile, setProfile, setUser } = useUser();

  return (
    <div>
      <MenuHeader />

      <Options />

      <ReadyGuests />
      <div className="flex items-start justify-center h-[15vh]">
        <div className="flex justify-center p-4">
          <button className="btn btn-neutral"> Add location</button>
        </div>
        <div className="flex justify-center p-4">
          <button className="btn btn-accent"> Ready!</button>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
