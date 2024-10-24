import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import Form from "../../../components/Form";
import Input from "../../../components/Input";
import { useState } from "react";
import BackButton from "../../../components/BackButton";
import { postLogin } from "./service/loginService";
import { useUser } from "./context/userContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setProfile } = useUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = { username, password };

    postLogin(loginData, () => {
      // Set logged in user
      /* 
         1. Create session token on the backend for 1 hour? 
         2. setProfile(sessionToken)
      */
      setProfile({ username: "eric", password: "123" }); //DUmmy data
      navigate("/main");
    });
  };

  return (
    <div className="flex flex-col items-center justify-between p-6 pb-11 h-[100dvh]">
      <div className="">
        <BackButton to="/" />
        <Image
          src="../../../public/favicon/foodie-faceoff-no-bg.png"
          alt="foodie-faceoff-logo"
        />
      </div>

      <Form onSubmit={handleSubmit}>
        <div className="ml-7 flex flex-col justify-center items-center p-8">
          <Input
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="flex items-center ">
            <Input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-neutral btn-wide mt-3" type="submit">
            Sign in
          </button>
        </div>
      </Form>
      <div className="flex flex-col">
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
