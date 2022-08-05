import React, { useState, useContext } from "react";
import InputForm from "../inputForm/InputForm";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const LoginForm = () => {
  let navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const [errMsg, setErrMsg] = useState("");

  const handleLogin = async () => {
    try {
      const loginData = await loginUser(form);
      if (loginData.status === "success")
        navigate("/dashboard", {
          replace: true,
        });
      else setErrMsg(loginData.message);
    } catch (error) {
      console.log(error);
    }
  };
  const { username, password } = form;
  return (
    <div className="flex flex-col my-6 w-full items-center h-full">
      <p className="mb-6 text-4xl font-bold text-blue-600">Login</p>
      <div className="mx-auto w-10/12">
        <InputForm
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={username}
          required
        />
        <InputForm
          placeholder="Password"
          name="password"
          onChange={handleChange}
          type="password"
          value={password}
          required
        />
      </div>
      <p className="text-red-600 font-normal">{errMsg}</p>
      <button
        onClick={handleLogin}
        className="bg-green-400 border-2 border-green-500 font-bold text-white w-40 h-10 rounded-full mt-2 mb-4 hover:bg-white hover:text-green-500 hover:-translate-y-1 hover:duration-all-300 transition-all"
      >
        LOGIN NOW
      </button>
      <div>
        Do not have an account ?{" "}
        <Link
          to="/register"
          className="text-blue-400 hover:text-blue-600 sm:block sm:text-center md:inline-block"
        >
          Register now
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
