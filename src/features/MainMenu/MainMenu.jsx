import MenuHeader from "../../components/MenuHeader";
import { useUser } from "../authentication/Login/context/userContext";

const MainMenu = () => {
  const { profile, setProfile, setUser } = useUser();

  return (
    <div>
      <MenuHeader profile={profile} setProfile={setProfile} setUser={setUser} />
      {/* <Options /> */}
    </div>
  );
};

export default MainMenu;
