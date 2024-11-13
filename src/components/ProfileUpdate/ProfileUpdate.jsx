import ProfileHeader from "../profile/ProfileHeader";
import UpdateForm from "./UpdateForm";
import UpdateImage from "./UpdateImage";

const ProfileUpdate = () => {
  return (
    <div>
      <ProfileHeader headerTitle="Edit Profile" navigateTo="/auth/profile" />
      <UpdateImage />
      <UpdateForm />
    </div>
  );
};

export default ProfileUpdate;
