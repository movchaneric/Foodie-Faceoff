import ProfileCard from "../../components/Profile/ProfileCard";
import ProfileHeader from "../../components/profile/ProfileHeader";
import ProfileMenu from "../../components/Profile/ProfileMenu";

const ProfilePage = () => {
  const user = {
    name: "Hari Bahadur",
    lastLogin: "April 12, 2023",
    profilePic: "https://picsum.photos/200", // Replace with actual image URL
  };

  return (
    <div>
      <ProfileHeader headerTitle="Profile" />
      <ProfileCard
        name={user.name}
        profilePic={user.profilePic}
        lastLogin={user.lastLogin}
      />

      <ProfileMenu />
    </div>
  );
};

export default ProfilePage;
