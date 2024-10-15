import MenuHeader from "../../components/MenuHeader";
import { useUser } from "../authentication/Login/context/userContext";
import Options from "./Options";

const MainMenu = () => {
  const { profile, setProfile, setUser } = useUser();

  return (
    <div>
      <MenuHeader profile={profile} setProfile={setProfile} setUser={setUser} />
      <div className="h-[50vh] border-4 border-yellow-400 rounded-md m-9">
        <Options />
      </div>
      <div className="flex justify-center p-4">
        <button className="btn btn-primary"> Add </button>
      </div>
    </div>
  );
};

export default MainMenu;
