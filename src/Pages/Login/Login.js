import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../dentist-assets/login.PNG';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
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
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn glass bg-primary text-black" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Create an Account! <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;