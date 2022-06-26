import Image from 'next/image'
import Link from 'next/link'
import googleIcon from '../assets/Icon/Group 573.png'
import signupPic from '../assets/Image/signup.jpg'
import Meta from '../components/Shared/Meta'

const Signup = () => {
    return (
        <>
            <Meta title="Interior Solution - Login" />
            <div className="hero mt-10 lg:mt-20 mb-24 px-4 lg:px-0">
                <div className="hero-content flex-col lg:flex-row-reverse border-2 rounded-2xl">
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <div className="card-body pb-4">
                            <h2 className="text-2xl font-bold text-secondary mb-4">Sign Up</h2>
                            <div className="form-control">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                            </div>
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
                            </div>
                            <div className="form-control">
                                <input
                                    type="c-password"
                                    placeholder="Confirm Password"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary text-white">Sign Up</button>
                            </div>
                            <label className="label py-0">
                                <Link href="/login">
                                    <a className="label-text-alt link text-blue-600">Already have an account? Login</a>
                                </Link>
                            </label>
                        </div>
                        <div className="divider m-0 px-10">Or</div>

                        <button className="flex gap-6 lg:gap-20 items-center rounded-full border-2 mx-8 mt-3">
                            <Image src={googleIcon} alt="google-login" width="40" height="40" />
                            <p>Continue with Google</p>
                        </button>
                    </div>
                    <div className="text-center lg:text-left lg:w-[500px]">
                        <Image src={signupPic} alt="Signup" width="350" height="300" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
