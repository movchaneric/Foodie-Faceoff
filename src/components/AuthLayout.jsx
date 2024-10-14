// import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Image from "./Image";
import AuthSelect from "../features/authentication/AuthSelect";

const AuthLayout = () => {
  //   const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between p-6 pb-14 pt-[72px] h-[100dvh]">
      <Image
        src="../../../public/favicon/foodie-faceoff-no-bg.png"
        alt="foodie-faceoff-logo"
      />

      <AuthSelect />
    </div>
  );
};

export default AuthLayout;
