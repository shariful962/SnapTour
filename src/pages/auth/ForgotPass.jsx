import React, { useState } from 'react'
import  Icons from "../../assets/image"
import ForgotPassword from '../../components/auth/ForgotPassword'
import VerifyCode from '../../components/auth/VerifyCode'
import UpdatePassword from '../../components/auth/UpdatePassword'
import { useNavigate } from 'react-router'



const ForgotPass = ({initialStep,initialEmail}) => {
    const [step, setStep] = useState(initialStep || "email")
    const [email, setEmail ] = useState(initialEmail || "")
    const [otp, setOtp] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const navigate = useNavigate()

    
    // email function 
    const handleEmailSent = ()=>{
        setStep('verify')
    }

    const handleOtp = ()=>{
        setStep('reset')
    }

    const handleSetPassword = ()=>{
        navigate('/signin')
    }


  return (
     <div className="w-full flex md:h-screen  md:flex-row font-Poppins">
      {/* left content */}
      <div className="w-full lg:w-[45%] flex flex-col justify-center items-center px-4">
      {/* function  */}
      {step === 'email' && (
        <ForgotPassword
         email={email}
         setEmail = {setEmail}
         onSubmit = {handleEmailSent}

         />
      )}

      {step === 'verify' && (
        <VerifyCode
         email ={email}
         otp = {otp}
         setOtp = {setOtp}
         onSubmit = {handleOtp}

        />
      )}

      {step === 'reset' && (
        <UpdatePassword
         newPassword = {newPassword}
         setNewPassword = {setNewPassword}
         onSubmit = {handleSetPassword}
        />
      )}
      </div>
      {/* right content  */}
     <div className="w-1/2 md:w-[55%] hidden lg:block h-screen bg-no-repeat bg-cover bg-top"
  style={{ backgroundImage: `url(${Icons.signinBg})` }}>
      
      </div>
    </div>
  )
}

export default ForgotPass
