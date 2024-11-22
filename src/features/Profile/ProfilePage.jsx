import { useEffect } from "react";
import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileMenu from "../../components/Profile/ProfileMenu";
import { useUser } from "../authentication/User/useUser";

const ProfilePage = () => {
  const { user } = useUser();

  return (
    <div>
      <ProfileHeader headerTitle="Profile" navigateTo="/main" />
      <ProfileCard
        name={user.username}
        profilePic="https://picsum.photos/200"
        lastLogin="April 12, 2023"
      />

      <ProfileMenu user={user} />
    </div>
  );
};

export default ProfilePage;
