import { useRef, useState } from "react";
import styles from "./login.module.scss";
import { useNavigate } from "react-router-dom";

export default function LoginComponent(){
    const inputRef = useRef();
    const navigate = useNavigate();
    const [showOtpForm, setShowOtpForm] = useState(false);
    const [otpValues, setOtpValues] = useState(['','','','']);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
    const mobilePattern = /^\d{10}$/; // Basic mobile number pattern (10 digits)
    const handleSubmit = (e) => {
        e.preventDefault();
        const value = inputRef.current.value;
        if(!emailPattern.test(value) && !mobilePattern.test(value)){
            alert('Please Enter Valid Email Address or mobile number')
            return;
        }
        setShowOtpForm(true);
    }

    const onOtpInputBox = (e, index) => {
        const value = e.target.value;
        if(value.length > 1) return;
        let allValues = [...otpValues];
        allValues[index] = value;
        setOtpValues([...allValues])
    }

    const handleOtpSubmit = (e) =>{
        e.preventDefault();
        if(otpValues.some(ele => ele === '')){
            alert('Please Enter Valid One time password');
            return;
        }
        let otp = '';
        otpValues.forEach((ele, index)=>{
            otp += ele
        })
        if(otp === '1234'){
            console.log('Success');
            navigate("/dashboard");

        } 
        else{
            alert('Please Enter Valid One time password');
            return;
        }
            
    }
    return <>
        <div className={styles.login__div}>
            <div className={`${styles.login__inner__div} container`}>
                {
                    !showOtpForm && <span>Login As Admin</span>
                }
                <h1>
                    {
                        showOtpForm ? <>
                            Enter Your OTP
                        </> : 
                        <>
                            Verify Phone Number
                        </>
                    }
                </h1>
                {
                    !showOtpForm && <>
                        <form>
                            <label>Enter your Mobile Number / Email</label>
                            <input 
                                type="text" 
                                ref={inputRef}
                            />
                            <button 
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Next
                            </button>
                        </form>
                    </>
                }

                {
                    showOtpForm && <>
                        <form datatype="otp-form">
                            <label>
                                We have send you the four digit code to your mobile number
                            </label>

                            <div>
                                {
                                    Array.from({length: 4}, ()=> {}).map((ele, index)=>{

                                        return <input 
                                            onChange={(e) => onOtpInputBox(e,index)} 
                                            datatype={index+1} 
                                            maxLength={1} 
                                            type="number"
                                            value={otpValues[index]}
                                            key={index}
                                        />
                                    })
                                }
                            </div>

                            <button 
                                type="submit"
                                onClick={handleOtpSubmit}
                            >
                                Continue
                            </button>
                            <span datatype="resend-otp">
                                Don't receive code? 
                                <button 
                                    datatype="resend-btn"
                                    // onClick={resendOtp}
                                >Resend</button>
                            </span>
                        </form>
                    </>
                }
            </div>
        </div>
    </>
}