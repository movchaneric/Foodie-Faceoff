const ProfileMenuCard = ({ icon, label, description, nextIcon }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 cursor-pointer">
      {/* Left Section with Icon, Label, and Description */}
      <div className="flex items-center">
        <div className="text-2xl text-blue-500 mr-4">{icon}</div>
        <div className="flex flex-col">
          <span className="text-lg font-semibold">{label}</span>
          {description && (
            <span className="text-gray-500 text-sm">{description}</span>
          )}
        </div>
      </div>

      {/* Right Section with Next Icon */}
      {nextIcon && <div className="text-gray-400 text-[23px]">{nextIcon}</div>}
    </div>
  );
};

export default ProfileMenuCard;
