import { useForm } from "react-hook-form";
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';

import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import registerBg from '../../assets/others/authentication.png';
import registerImg from '../../assets/others/authentication2.png';
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import SocialLogin from "../Shared/socialLogin/socialLogin";


const Register = () => {
    const [error, setError] = useState(null);
    const { createUser, userProfileUpdate } = useContext(AuthContext);
    const capthaRef = useRef(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();


    const onSubmit = data => {
        setError(null);
        const { name, photo, email, password } = data
        // validate captcha and disabled btn 
        let user_captcha_value = capthaRef.current.value;

        if (validateCaptcha(user_captcha_value) == true) {
            createUser(email, password)
                .then(result => {
                    console.log(result.user)
                    userProfileUpdate(name, photo)
                        .then(() => {
                            const saveUser = { name, email }
                            fetch('http://localhost:5000/users', {
                                method: "POST",
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        console.log(data)
                                        Swal.fire({
                                            icon: 'success',
                                            title: 'Register Success',
                                            text: 'You successfully create account'
                                        })
                                        reset()
                                        navigate('/login')
                                    }
                                })
                        })
                        .catch(error => console.log(error))

                })
                .catch(error => setError(error.message))
        }
        else {
            setError('Captcha Does Not Match')
        }
        console.log({ data, name })
        console.log(capthaRef.current.value)

    };




    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    return (
        <section className={`min-h-screen w-full py-10 px-5`} style={{ backgroundImage: `url("${registerBg}")` }}>
            <div className='my-container shadow-2xl grid md:grid-cols-2 gap-5 p-10'>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className="text-center text-3xl font-bold mb-5">Register</h3>
                        {/* register your input into the hook by invoking the "register" function */}
                        <input className="my-input" placeholder="Your Name" {...register("name", { required: true })} type="text" />
                        {errors.name && <p className="mt-1 p-0 mb-0 text-red-600">Name is required</p>}
                        <input className="my-input mt-5" placeholder="Your Email" {...register("email", { required: true })} type="email" />
                        {errors.email && <p className="mt-1 p-0 mb-0 text-red-600">Email is required</p>}

                        <input className="my-input mt-5" placeholder="Photo URL" {...register("photo", { required: true })} type="url" />
                        {errors.photo && <p className="mt-1 p-0 mb-0 text-red-600">Photo is required</p>}

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
                        <p className="text-center mt-2 p-0 mb-0 text-red-600">{error}</p>

                        <p className="text-accent mt-5 text-center">Already registered? Go to <Link to='/login' className="font-semibold">login</Link></p>
                    </form>
                    <SocialLogin />
                </div>
                <img src={registerImg} alt="" className='w-full h-full object-contain' />
            </div>
        </section>
    );
};

export default Register;