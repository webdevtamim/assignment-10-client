import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import Swal from 'sweetalert2'


const auth = getAuth(app);

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate()

    const provider = new GoogleAuthProvider();

    const handleGoogleRegister = () => {

        signInWithPopup(auth, provider)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.code}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const displayName = form.get('text');
        const photoURL = form.get('url');

        createUser(email, password, displayName, photoURL)
            .then(() => {
                Swal.fire({
                    title: 'Success!',
                    text: 'User created successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                Swal.fire({
                    title: 'Error!',
                    text: `${error.code}`,
                    icon: 'error',
                    confirmButtonText: 'Ok'
                })
            })
    }

    const formDataSheet = [
        {
            id: '1',
            type: 'text',
            placeholder: 'Name'
        },
        {
            id: '2',
            type: 'url',
            placeholder: 'Photo URL'
        },
        {
            id: '3',
            type: 'email',
            placeholder: 'Email'
        },
        {
            id: '4',
            type: 'password',
            placeholder: 'Password'
        }
    ]

    return (
        <div className="pb-20">
            <div className="max-w-[1400px] mx-auto px-5 md:px-0">
                <div className="pt-20 pb-2 mb-16 md:max-w-[70%] mx-auto space-y-4">
                    <p className="text-base tracking-widest">Please register</p>
                    <div className="space-x-5">
                        <span className="text-[#E2012D] md:text-5xl text-4xl font-semibold">BRAND SHOP</span>
                        <span className="md:text-5xl text-4xl font-semibold">REGISTER</span>
                    </div>
                </div>
                <div className="p-10 border md:max-w-[70%] mx-auto shadow-xl">
                    <form onSubmit={handleRegister}>
                        {
                            formDataSheet.map(formData => <div key={formData.id}>
                                <label className="text-xs tracking-widest" htmlFor={formData.type}>{formData.placeholder}</label><br />
                                <input className="mt-2 mb-6 w-full bg-white rounded border outline-none font-semibold border-[#7A7A7A] text tracking-widest text-xs py-3 px-4" type={formData.type} name={formData.type} id={formData.type} placeholder={formData.placeholder} />
                                <br />
                            </div>)
                        }
                        <input className="btn w-full bg-[#E2012D] font-semibold tracking-widest text-xs mt-4 py-3 text-white rounded-xl hover:bg-white hover:text-[#091022] active:scale-x-90 duration-100" type="submit" value="Register" />
                    </form>
                    <div className='flex'>
                        <div className='border-b-2  w-[45%]'></div>
                        <p className="text-center w-[10%] -mb-2  pt-5">OR</p>
                        <div className='border-b-2  w-[45%]'></div>
                    </div>
                    <div className="flex justify-center pt-10">
                        <button
                            onClick={handleGoogleRegister}
                            className='text-xl font-medium flex items-center gap-2 border rounded-md py-3 px-6 hover:text-[#091022] hover:bg-white active:text-[#E2012D] active:border-[#E2012D] active:bg-transparent'>
                            <span>Register with : </span>
                            <FaGoogle className='inline'></FaGoogle>
                        </button>
                    </div>
                    <p className="pt-4">All ready have an account? <Link to={'/login'}><span className="hover:underline underline-offset-4 font-bold">Log in</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;