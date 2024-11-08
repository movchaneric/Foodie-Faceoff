import { googleLogout } from "@react-oauth/google";
import { useLogout } from "../features/authentication/Logout/useLogout";
import SpinnerMini from "./SpinnerMini";
import { useNavigate } from "react-router-dom";

const MenuHeader = () => {
  const { logout, isLoggingOut } = useLogout();
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout(); // Clears Google session
    logout(); // Clears app cookie and navigates to login
  };
  return (
    <>
      <div className="flex items-center justify-between p-4 pt-6 h-[15vh]">
        <div className="flex items-center ml-16">
          <p className="bg-yellow-400 p-3 font-sans rounded-md ]">
            Choose / Add your restaurant
          </p>
        </div>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button">
            <img
              className="w-12 h-12 mr-2 rounded-full"
              src={"dsfs"}
              alt="profile-img"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-[#f4f3ec] rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => navigate("/auth/profile")}>
              <p className="text-lg">Profile</p>
            </li>
            <li>
              <div className="text-lg" onClick={handleLogout}>
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
