import { useNavigate } from "react-router-dom";
import Image from "./Image";

const AuthLayout = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between p-6 pb-14 pt-[72px] h-[100dvh]">
      <Image
        src="../../../public/favicon/foodie-faceoff-no-bg.png"
        alt="foodie-faceoff-logo"
      />

      <div className="flex flex-col gap-2">
        <button
          className="btn btn-neutral btn-wide"
          onClick={() => {
            navigate("/login");
          }}
        >
          Sign in
        </button>
        <p
          className="text-[16px] flex justify-center items-center hover:cursor-pointer "
          onClick={() => navigate("/register")}
        >
          Dont have an account?
        </p>
      </div>
    </div>
  );
};

export default AuthLayout;
