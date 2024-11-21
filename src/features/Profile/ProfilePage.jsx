import { useEffect } from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileMenu from "../../components/Profile/ProfileMenu";
import { useCurrentUser } from "./hooks/useCurrentUser";

const ProfilePage = () => {
  const user = {
    name: "Hari Bahadur",
    lastLogin: "April 12, 2023",
    profilePic: "https://picsum.photos/200", // Replace with actual image URL
  };

  // const { currentUser, isLoading } = useCurrentUser();
  // console.log("Current user: ", currentUser.user);

  return (
    <div>
      <ProfileHeader headerTitle="Profile" navigateTo="/main" />
      <ProfileCard
        name={user.email}
        profilePic={user.profilePic}
        lastLogin={user.lastLogin}
      />

      <ProfileMenu />
    </div>
  );
};

export default ProfilePage;
