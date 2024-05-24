import { useContext, useEffect, useRef, useState } from 'react';
import loginImage from '../../assets/images/others/authentication2.png'
import './Login.css'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Auth/AuthProvider';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {

    const { signInUser } = useContext(AuthContext)

    const captcharef = useRef()
    const [disabledBtn, setDisabledBtn] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6)
    }, [])

    const handleLoginForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        // signing in
        signInUser(email, password)
            .then((result) => {
                console.log(result.user)
                toast.success('Login successfull')
            })
            .catch(error => {
                console.error(error.message)
                toast.error(error.message)
            })
    }


    const handleValidateCaptcha = () => {
    const value = captcharef.current.value;
    console.log(value)

    // validation of captcha
    if (validateCaptcha(value)) {
        setDisabledBtn(false)
    } else {
        setDisabledBtn(true)
    }
    }





    return (
        <div className='pageContainer'>
            <Toaster></Toaster>
            <div className="container mx-auto hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row items-center mt-12">
                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="w-3/5 ">
                        <h1 className='text-center text-2xl'>Login</h1>
                        <form onSubmit={handleLoginForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered rounded-md"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered rounded-md"
                                    required
                                />
                            </div>
                            < LoadCanvasTemplate />
                            <div className="form-control relative">
                                <input
                                    type="text"
                                    name="captcha"
                                    ref={captcharef}
                                    placeholder="Type the text above"
                                    className="input input-bordered rounded-md"
                                    // required
                                />
                                <button onClick={handleValidateCaptcha} className='btn btn-sm bg-[#111827] text-[#BB8506] absolute right-[2%] bottom-[17%]'>verify</button>
                            </div>
                            <div className="form-control mt-6">
                                {/* {
                                    disabledBtn ?
                                        <button disabled id='loginButton' type="submit" className="btn btn-primary">Login</button>
                                        :
                                        <button id='loginButton' type="submit" className="btn btn-primary">Login</button>
                                } */}
                                <button id='loginButton' type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div>
                            <p>Do not have an account ?</p>
                            <Link to='/register'>Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;