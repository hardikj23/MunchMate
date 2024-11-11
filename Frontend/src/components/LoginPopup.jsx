/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from 'axios';

const LoginPopup = ({ setShowLogin }) => {
  const {Url, setToken} = useContext(StoreContext);
  const [currState, setCurrState] = useState("Sign Up");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async( event) =>{
    event.preventDefault()
    let newUrl = Url
    if (currState === "Login"){
      newUrl += "/API/user/login"
    }
    else{
      newUrl += "/API/user/register"
    }
    console.log(newUrl)
    const response = await axios.post(newUrl,data)

    if (response.data.success){
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }
  }

  return (
    <>
      <div className="absolute z-10 w-full h-full bg-[#00000090] grid mt-[-16px]">
        <form
          onSubmit={onLogin}
          className="place-self-center w-80 text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-lg text-sm transition animate-fadeInFast "
        >
          <div className="flex justify-between items-center text-black">
            <h2 className="text-2xl font-semibold">{currState}</h2>
            <img
              className="cursor-pointer w-4"
              src={assets.cross_icon}
              onClick={() => setShowLogin(false)}
            />
          </div>
          <div className="flex flex-col gap-5">
            {currState === "Login" ? (
              <></>
            ) : (
              <input
                className="outline-none border border-[#c9c9c9] rounded-md p-2"
                name="name"
                onChange={onChangeHandler}
                value={data.name}
                type="text"
                placeholder="Your Name"
                required
              />
            )}
            <input
              className="outline-none border border-[#c9c9c9] rounded-md p-2"
              name="email"
              onChange={onChangeHandler}
              value={data.email}
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              className="outline-none border border-[#c9c9c9] rounded-md p-2"
              name="password"
              onChange={onChangeHandler}
              value={data.password}
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit"
          className="border-none text-white bg-orange-500 rounded-md text-sm cursor-pointer p-2 ">
            {currState === "Sign Up" ? "Create Account" : "Login "}
          </button>
          {currState === "Sign Up" ? (
            <div className="flex gap-2 mt-[-15px] items-start">
              <input type="checkbox" name="" className="mt-[5px]" required />
              <p>
                By Continuing, i agree to the terms of use & privacy policy.
              </p>
            </div>
          ) : (
            <></>
          )}

          {currState === "Login" ? (
            <p>
              Create a New Account!{" "}
              <span
                className="cursor-pointer text-orange-500 font-medium"
                onClick={() => setCurrState("Sign Up")}
              >
                Click Here
              </span>{" "}
            </p>
          ) : (
            <p>
              Already a User?{" "}
              <span
                className="cursor-pointer text-orange-500 font-medium"
                onClick={() => setCurrState("Login")}
              >
                Login Here
              </span>{" "}
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default LoginPopup;
