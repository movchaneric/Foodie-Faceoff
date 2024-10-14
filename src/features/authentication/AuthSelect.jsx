import { useNavigate } from "react-router-dom";
import useGoogleAuth from "./Login/hooks/useGoogleAuth";

const AuthSelect = () => {
  const navigate = useNavigate();
  const { login, profile } = useGoogleAuth();
  console.log("Google profile: ", profile);
  return (
    <div>
      <div>
        <button
          onClick={login}
          className="btn btn-wide btn-outline btn-primary"
        >
          <img
            src="../../public/icons/G-icon.png"
            alt="Google - G Icon"
            className="w-5 h-5 mr-2"
          />
          Continue with Google
        </button>
      </div>

      <div class="p-4 relative text-center w-full before:content-[''] before:block before:border-t before:border-gray-300 before:absolute before:top-1/2 before:w-full before:h-px before:left-0 after:content-[''] after:block after:border-t after:border-gray-300 after:absolute after:top-1/2 after:w-full after:h-px after:right-0">
        <span class="relative z-10 px-4 bg-[#f4f3ec] text-gray-500 text-sm">
          OR
        </span>
      </div>

      <div className="flex flex-col gap-2 ">
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

export default AuthSelect;
