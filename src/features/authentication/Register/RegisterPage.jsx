import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import { useEffect, useState } from "react";
import BackButton from "../../../components/BackButton";
import { postRegisterUser } from "./Services/RegisterService";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-between p-6 pb-11 h-[100dvh]">
      <div>
        <BackButton to="/" />
        <Image
          src="../../../public/favicon/foodie-faceoff-no-bg.png"
          alt="foodie-faceoff-logo"
        />
      </div>

      <Form>
        <div className="flex flex-col items-center">
          <Input
            type="email"
            placeholder="Email"
            {...register("email", { required: true })}
          />

          <Input
            type="username"
            placeholder="Username"
            {...register("username", { required: true })}
          />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            {...register("password", { required: true })}
          />

          <div className="flex items-center ml-6">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Repeat password"
            />
            <input type="checkbox" className="checkbox" />
          </div>
          <button className="btn btn-neutral btn-wide mt-5" type="submit">
            Sign up
          </button>
        </div>
      </Form>
      <div className="flex flex-col">
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
