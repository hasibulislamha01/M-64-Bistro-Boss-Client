import { useContext } from 'react';
import loginImage from '../../assets/images/others/authentication2.png'
import { AuthContext } from '../../Auth/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';



const Register = () => {

    const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        console.log(userName, email, password, photo);

        // creating user
        createUser(email, password)
        .then(result=> {
            console.log(result.user)
            updateUserProfile(userName, photo)
            toast.success('Registration successfull')
        })
        .catch(error=>{
            console.error(error.message)
            toast.error(error.message)
        })
    }
    return (
        <div className='pageContainer'>
            <Toaster></Toaster>
            <div className="container mx-auto hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse items-center">
                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="w-3/5 ">
                        <h1 className='text-center text-2xl'>Sign Up</h1>
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    className="input input-bordered rounded-md"
                                    required
                                />
                            </div>
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
                                    type="text"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered rounded-md"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input
                                    type="text"
                                    name="photo"
                                    placeholder="photo"
                                    className="input input-bordered rounded-md"
                                    required
                                />
                            </div>
                           
                            
                            <div className="form-control mt-6">


                                <button type="submit" className="btn btn-primary">Login</button>

                                {/* <button id='loginButton' type="submit" className="btn btn-primary">Login</button> */}

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;