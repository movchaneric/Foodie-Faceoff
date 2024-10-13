import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useState } from "react";
import BackButton from "../../../components/BackButton";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between p-6 pb-11 h-[100dvh]">
      <div className="">
        <BackButton to="/" />
        <Image
          src="../../../public/favicon/foodie-faceoff-no-bg.png"
          alt="foodie-faceoff-logo"
        />
      </div>

      <Form>
        <div className="ml-7">
          <Input
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="flex items-center ">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => setShowPassword((show) => !show)}
            />
          </div>
        </div>
      </Form>
      <div className="flex flex-col">
        <button className="btn btn-neutral btn-wide" type="submit">
          Sign in
        </button>
        <p
          className="text-[16px] flex justify-center items-center hover:cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Don't have an account?
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
