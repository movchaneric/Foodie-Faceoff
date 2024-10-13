import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col items-center justify-between p-6 pb-11 h-[100dvh]">
      <Image
        src="../../../public/favicon/foodie-faceoff-no-bg.png"
        alt="foodie-faceoff-logo"
      />

      <Form>
        <Input
          type="username"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
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
