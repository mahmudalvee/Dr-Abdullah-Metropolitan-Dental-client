import React from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';
import img from '../../dentist-assets/login.PNG';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../hooks/useTitle';


const Login = () => {
    useTitle('Login')

    const {login, googleLogin} = useContext(AuthContext);

    const googleProvider= new GoogleAuthProvider()

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .then(error => console.log(error));
    }

    const handleGoogleSignIn =() => {
        googleLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true});
        })
        .then(error => console.log(error));
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-4/4 rounded-lg' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-xl bg-base-100 py-5">
                    <h1 className="text-5xl text-center font-bold text-secondary underline underline-offset-8">Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn glass bg-primary text-black" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className='mx-auto mb-6'>
                    <button onClick={handleGoogleSignIn} className="btn btn-ghost text-xl flex"><FcGoogle className='my-auto text-4xl'></FcGoogle>Login with Google</button>
                        
                    </div>

                    <p className='text-center'>Create an Account! <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;