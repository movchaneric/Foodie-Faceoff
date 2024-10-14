import { googleLogout } from "@react-oauth/google";

const MenuHeader = ({ profile, setProfile, setUser }) => {
  const { name, picture, id } = profile;

  const logout = () => {
    googleLogout();
    setUser(null);
    setProfile(null);
  };

  return (
    <>
      <div className="flex items-center justify-between p-4 pt-6">
        <div className="flex items-center ml-16">
          <p className="bg-yellow-400 p-3 font-sans rounded-md">
            Choose / Add your restaurant
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <img
              className="w-12 h-12 mr-2 rounded-full"
              src={picture}
              alt="profile-img"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[#f4f3ec] rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <p className="text-lg">Profile</p>
            </li>
            <li>
              <div className="text-lg" onClick={logout}>
                Logout
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MenuHeader;
