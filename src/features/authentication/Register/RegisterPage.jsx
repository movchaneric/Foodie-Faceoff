import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../../components/Image";
import Input from "../../../components/Input";
import Form from "../../../components/Form";
import BackButton from "../../../components/BackButton";
import { postRegisterUser } from "./Services/RegisterService";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    const { repeatPassword, ...data } = formData;

    data.type = "local";

    if (data.password !== repeatPassword)
      return toast.error("Passwords doesn't match");

    postRegisterUser(data, () => {
      navigate("/login");
    });
  };

  return (
    <div className="flex flex-col items-center justify-between p-6 pb-11 h-[100dvh]">
      <div>
        <BackButton to="/" />
        <Image
          src="../../../public/favicon/foodie-faceoff-no-bg.png"
          alt="foodie-faceoff-logo"
        />
      </div>

      <Form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center p-8">
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <Input
            type="username"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
          />

          <Input
            type="password"
            name="repeatPassword"
            value={formData.repeatPassword}
            onChange={handleChange}
            placeholder="Repeat password"
          />

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
