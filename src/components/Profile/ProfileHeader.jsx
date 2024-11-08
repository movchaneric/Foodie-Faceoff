import { HiArrowSmallLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({ headerTitle }) => {
  const navigate = useNavigate();
  return (
    <div className="pt-10 pl-5 flex items-center justify-start gap-5">
      <div className="text-[24px]" onClick={() => navigate("/main")}>
        <HiArrowSmallLeft />
      </div>

      <p className="text-[22px] font-light">{headerTitle}</p>
    </div>
  );
};

export default ProfileHeader;
