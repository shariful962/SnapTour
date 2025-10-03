import React, { useState } from "react";
import Icons from "../../assets/image";
import { MdOutlineMail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";

const Signin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // handle change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) return;
    console.log(formData);
    setTimeout(() => navigate("/dashboard"), 1000);
  };

  return (
    <div className="w-full flex h-screen  md:flex-row">
      {/* left content  */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center bg-White px-4">
        {/* form section area  */}
        <div className="w-full max-w-[538px] flex flex-col">
          <form onSubmit={handleSubmit} className="w-full">
            <h1 className="authTitle mb-9">Sign in</h1>

            {/* Email input */}
            <div className="flex flex-col w-full gap-2 mb-4 md:mb-5.5">
              <label htmlFor="email" className="label-control">
                Email
              </label>
              <div className="relative">
                
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="form-control"
                />
                <MdOutlineMail
                  size={22}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA]"
                />
              </div>
            </div>
            {/* Password input */}
            <div className="flex flex-col w-full gap-2 mb-6 md:mb-5.5">
              <label htmlFor="password" className="label-control">
                Password
              </label>
              <div className="relative">
              
                <input
                  id="password"
                  name="password"
                  type={showPass ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Password"
                />
                  <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
                >
                  {showPass ? (
                    <IoEyeOutline size={22} />
                  ) : (
                    <FaRegEyeSlash size={22} />
                  )}
                </button>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between mt-1 text-sm mb-5">
                {/* Remember Me Checkbox */}
                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                    className="w-4 h-4 accent-[#3093FC]"
                  />
                  Remember Me
                </label>

                {/* Forgot Password Link */}
                <button
                  type="button"
                  onClick={() => navigate("/forgotPassword")}
                  className="text-Primary text-sm hover:underline cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
            </div>
            {/* sign in button  */}
            <button
              type="submit"
              disabled={!formData.email || !formData.password}
              className={`w-full ${
                !formData.email || !formData.password
                  ? " bg-Primary/50 cursor-not-allowed"
                  : "bg-Primary cursor-pointer"
              }  auth_btn`}
            >
              Sign in
            </button>
            
           
          </form>

          {/* or section  */}

          <div className="flex items-center justify-center my-4 md:my-8">
            <div className="flex items-center w-full gap-x-3">
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <p className="text-textClr">or</p>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
            </div>
          </div>

          {/* sign in with google button  */}
          <button className="bg-[#C8C8C8]  w-full px-8 h-[48px] md:h-13.5 flex items-center justify-center py-3 rounded-[8px] font-bold cursor-pointer">
            <div className="flex gap-x-2.5">
              <img src={Icons.googleIco} alt="" />
              <p className="text-textClr text-base  font-medium">
                Sign in with Google
              </p>
            </div>
          </button>
          <button className="mt-8 bg-[#C8C8C8]  w-full px-8 h-[48px] md:h-13.5 flex items-center justify-center py-3 rounded-[8px] font-bold cursor-pointer">
            <div className="flex gap-x-2.5">
              <img src={Icons.apple} alt="" />
              <p className="text-textClr text-base  font-medium">
                Sign in with Apple account
              </p>
            </div>
          </button>
        </div>
      </div>
      {/* right content  */}
      <div className="w-1/2 md:w-[55%] hidden lg:block h-screen bg-no-repeat bg-cover bg-top"
  style={{ backgroundImage: `url(${Icons.signinBg})` }}>
      
      </div>
    </div>
  );
};

export default Signin;
