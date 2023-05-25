import { useForm } from "react-hook-form";

import loginBg from '../../assets/others/authentication.png';
import loginImg from '../../assets/others/authentication2.png';



const Login = () => {
    const { register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className={`h-screen w-full py-10`} style={{ backgroundImage: `url("${loginBg}")` }}>
            <div className='my-container shadow-2xl grid md:grid-cols-2 gap-5 p-10'>
                <img src={loginImg} alt="" className='w-full h-full object-contain' />
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="my-input" placeholder="Your Email" {...register("email")} type="email" required />

                    <input className="my-input mt-7" placeholder="Your Password" {...register("password")} type="password" required />


                    <input className="login-btn w-full mt-7" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default Login;