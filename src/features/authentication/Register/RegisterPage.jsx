import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log("show password: ", showPassword);

  return (
    <div className="flex flex-col items-center justify-between p-6 pb-11 h-[100dvh]">
      <Image
        src="../../../public/favicon/foodie-faceoff-no-bg.png"
        alt="foodie-faceoff-logo"
      />

      <Form>
        <div className="flex flex-col items-center">
          <Input
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex items-center ml-6">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Repeat password"
              onChange={(e) => setRepeatPassword(e.target.value)}
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
          Sign up
        </button>
        <p
          className="text-[16px] flex justify-center items-center hover:cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Already have an account?
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
