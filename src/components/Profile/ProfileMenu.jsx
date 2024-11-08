import {
  HiOutlineArrowSmallRight,
  HiOutlineTrash,
  HiOutlineUserCircle,
} from "react-icons/hi2";
import ProfileMenuCard from "./ProfileMenuCard";

const ProfileMenu = () => {
  const menuItems = [
    {
      label: "Profile Details",
      description: "View/Update your account information",
      icon: <HiOutlineUserCircle />,
    },
    {
      label: "Delete My Account",
      description: "",
      icon: <HiOutlineTrash />,
      nextIcon: <HiOutlineArrowSmallRight />,
    },
  ];
  return (
    <div className="space-y-6 p-6">
      {menuItems.map((item, index) => (
        <div key={index}>
          <ProfileMenuCard
            icon={item.icon}
            label={item.label}
            description={item.description}
            nextIcon={item.nextIcon ? item.nextIcon : null}
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileMenu;
