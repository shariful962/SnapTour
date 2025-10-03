import React, { useState } from "react";
import Icons from "../../assets/image";
import { MdOutlineMail } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import VerifyCode from "../../components/auth/VerifyCode";

const Signup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState('signup')
  const [formData, setFormData] = useState({ name:"", email: "", password: "", confirmPass: "" });
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  

  // handle change for all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
 // handle sign up logic
   const handleSignupSubmit  = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) return;
    if (formData.password !== formData.confirmPass) return;
    console.log(formData);
    setStep('verify');
  };

  const handleOptSubmit = (otp)=>{
    setOtpCode(otp)
    console.log("enter Otp",otp);
    // navigate("/signin")
  }

  return (
    <div className="w-full flex h-screen  md:flex-row font-Roboto">
      {/* left content  */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center bg-White px-4">
        {/* form section area  */}
        { step === 'signup' && (
          <div className="w-full max-w-[538px] flex flex-col">
          <form onSubmit={handleSignupSubmit } className="w-full">
            <h1 className="authTitle">Sign up</h1>
            {/* name input */}
            <div className="flex flex-col w-full gap-2 mb-4 md:mb-5.5">
              <label htmlFor="name" className="label-control">
                Fullname
              </label>
              <div className="relative">
                {/* <MdOutlineMail
                  size={22}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA]"
                /> */}
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your fullname"
                  className="form-control"
                />
              </div>
            </div>

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
            </div>
              {/* confirm password input  */}
          <div className="flex flex-col w-full gap-2 mb-6 md:mb-5.5">
            <label htmlFor="confirmPass" className="label-control">
              Confirm Password
            </label>
            <div className="relative">
            
              <input
                id="confirmPass"
                name="confirmPass"
                type={showConfirmPass ? "text" : "password"}
                value={formData.confirmPass}
                onChange={handleChange}
                placeholder="Retype Password"
                className="form-control"
              />
                <button
                type="button"
                onClick={() => setShowConfirmPass(!showConfirmPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#AAAAAA] cursor-pointer"
              >
                {showConfirmPass ? (
                  <IoEyeOutline size={22} />
                ) : (
                  <FaRegEyeSlash size={22} />
                )}
              </button>
            </div>
          </div>
            {/* sign in button  */}
            <button
              type="submit"
              disabled={!formData.name || !formData.email || !formData.password || formData.password !== formData.confirmPass}
              className={`w-full ${
                !formData.name ||!formData.email || !formData.password || formData.password !== formData.confirmPass
                  ? " bg-Primary/50 cursor-not-allowed"
                  : "bg-Primary cursor-pointer"
              }  auth_btn`}
            >
              Sign up
            </button>
            {/* sign up link  */}
            <div className="mt-3 text-center text-sm text-gray-600">
              Don have an account?{" "}
              <span
                onClick={() => {
                  navigate("/signin");
                }}
                className="text-Primary font-semibold hover:underline cursor-pointer"
              >
                Sign in
              </span>
            </div>
          </form>

          {/* or section  */}

          <div className="flex items-center justify-center my-4 md:my-6">
            <div className="flex items-center w-full gap-x-3">
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <p className="text-textClr">or</p>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
            </div>
          </div>

          {/* sign in with google button  */}
          <button className="mt-2 bg-[#EEEEEEEE] border border-[#B0B3B8] w-full px-8 h-[48px] md:h-13.5 flex items-center justify-center py-3 rounded-[8px] font-bold cursor-pointer">
            <div className="flex gap-x-2.5">
              <img src={Icons.googleIco} alt="" />
              <p className="text-textClr text-base  font-medium">
                Sign in with Google
              </p>
            </div>
          </button>
        </div>
        )}
        {step === 'verify' &&(
          <VerifyCode 
            email={formData.email}
            setOtp= {setOtpCode}
            onSubmit={handleOptSubmit}

          />
        )}
      </div>
      {/* right content  */}
      <div className="w-1/2 md:w-[55%] hidden lg:flex items-center justify-center bg-[#004AAD] h-screen">
        <img
          src={Icons.signinBg}
          alt="Login side"
          className="max-w-full max-h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Signup;

