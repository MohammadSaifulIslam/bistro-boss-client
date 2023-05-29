
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider/AuthProvider";

const SocialLogin = () => {
    const { googleSignin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';


    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                const saveUser = { name: loggedUser.displayName, email: loggedUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => console.log(error))
                Swal.fire({
                    icon: 'success',
                    title: 'Login Success',
                    text: 'You successfully logged in'
                })
                console.log(result)
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))
    }
    return (
        <div className="text-center">
            <div className="divider">Or</div>

            <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;