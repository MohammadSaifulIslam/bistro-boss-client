import { useForm } from "react-hook-form";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import loginBg from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';



const Login = () => {
    const capthaRef = useRef(null);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        // validate captcha and disabled btn 

        let user_captcha_value = capthaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            alert('Captcha Matched');
        }

        else {
            alert('Captcha Does Not Match');
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
                    <p className="text-accent mt-5 text-center">New here? <Link to='/register' className="font-semibold">Create a New Account</Link></p>
                </form>
            </div>
        </section>
    );
};

export default Login;