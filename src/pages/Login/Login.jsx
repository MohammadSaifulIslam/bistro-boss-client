import { useForm } from "react-hook-form";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginBg from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import SocialLogin from "../Shared/socialLogin/socialLogin";



const Login = () => {
    const [error, setError] = useState(null);
    const { loginUser } = useContext(AuthContext);
    const capthaRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const onSubmit = data => {
        setError(null)
        const { email, password } = data;
        // validate captcha and disabled btn 
        let user_captcha_value = capthaRef.current.value;


        if (validateCaptcha(user_captcha_value) == true) {
            loginUser(email, password)
                .then(result => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login Success',
                        text: 'You successfully logged in'
                    })
                    console.log(result)
                    reset()
                    navigate(from, { replace: true })
                })
                .catch(error => {
                    console.log(error)
                })
        }

        else {
            setError('Captcha Does Not Match')
        }
        console.log({ data })
        console.log(capthaRef.current.value)

    };




    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <section className={`min-h-screen w-full py-10 px-5`} style={{ backgroundImage: `url("${loginBg}")` }}>
            <div className='my-container shadow-2xl grid md:grid-cols-2 gap-5 p-10'>
                <img src={loginImg} alt="" className='w-full h-full object-contain' />
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-center text-3xl font-bold mb-5">Login</h3>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="my-input" placeholder="Your Email" {...register("email", { required: true })} type="email" />
                        {errors.email && <p className="mt-1 p-0 mb-0 text-red-600">Email is required</p>}

                        <input className="my-input mt-5" placeholder="Your Password" {...register("password", {
                            required: true,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} type="password" />

                        {errors.password?.type === 'required' && <p className="mt-1 p-0 mb-0 text-red-600">Password is required</p>}
                        {errors.password?.type === 'pattern' && <p className="mt-1 p-0 mb-0 text-red-600">Password must be one number, one uppercase, one lowercase and one special character</p>}

                        <div className="captcha-canvas my-input mt-5 mb-2">
                            <LoadCanvasTemplate />
                        </div>
                        <input className="my-input mt-7" ref={capthaRef} placeholder="Type the above captcha" type="text" />

                        <input className={`login-btn w-full mt-7`} type="submit" />
                        <p className="mt-2 text-center text-red-600">{error}</p>

                        <p className="text-accent mt-5 text-center">New here? <Link to='/register' className="font-semibold">Create a New Account</Link></p>
                    </form>
                    <SocialLogin />
                </div>
            </div>
        </section>
    );
};

export default Login;