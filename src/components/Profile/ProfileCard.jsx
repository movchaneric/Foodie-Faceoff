const ProfileCard = ({ name, profilePic, lastLogin }) => {
  return (
    <div className="bg-gradient-to-r from-[rgb(73,73,232)] to-[rgb(0,159,191)] flex items-center justify-start p-8 m-7 rounded-lg shadow-md">
      {/* Profile Picture */}
      <img
        src={profilePic}
        alt={name}
        className="w-12 h-12 rounded-full mr-4"
      />
      {/* Profile Info */}
      <div>
        <h2 className="text-white text-lg font-semibold">Eric Movchan</h2>
        <p className="text-white text-sm flex gap-2 items-center">
          Last Login: <p className="font-lg text-[13px]">{lastLogin}</p>
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
