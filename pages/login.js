import Image from 'next/image'
import googleIcon from '../assets/Icon/Group 573.png'
import loginPic from '../assets/Image/login.jpg'
import Meta from '../components/Shared/Meta'

const login = () => {
    return (
        <>
            <Meta title="Interior Solution - Login" />
            <div className="hero mt-10 lg:mt-20 mb-24 px-4 lg:px-0">
                <div className="hero-content flex-col lg:flex-row-reverse border-2 rounded-2xl">
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body pb-4">
                            <h2 className="text-2xl font-bold text-secondary mb-4">Login</h2>
                            <div className="form-control">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                            </div>
                            <div className="form-control">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                            <label className="label py-0">
                                <a href="#" className="label-text-alt link link-hover">
                                    New user? Create an account
                                </a>
                            </label>
                        </div>
                        <div className="divider m-0 px-10">Or</div>

                        <button className="flex gap-6 lg:gap-20 items-center rounded-full border-2 mx-8 mt-3">
                            <Image src={googleIcon} alt="google-login" width="40" height="40" />
                            <p>Continue with Google</p>
                        </button>
                    </div>
                    <div className="text-center lg:text-left lg:w-[500px]">
                        <Image src={loginPic} alt="Login" width="350" height="300" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default login
