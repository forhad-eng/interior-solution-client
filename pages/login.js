import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import googleIcon from '../assets/Icon/Group 573.png'
import loginPic from '../assets/Image/login.jpg'
import Meta from '../components/Shared/Meta'
import { auth } from '../firebase.config'

const Login = () => {
    const [signInWithEmailAndPassword, eUser, eLoading, eErr] = useSignInWithEmailAndPassword(auth)
    const [signInWithGoogle, gUser, gLoading, gErr] = useSignInWithGoogle(auth)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()
    const router = useRouter()

    if (eUser || gUser) {
        router.replace('/')
    }

    const onSubmit = async data => {
        const email = data.email
        const pass = data.pass
        await signInWithEmailAndPassword(email, pass)
    }

    return (
        <>
            <Meta title="Interior Solution - Login" />
            <div className="hero mt-10 lg:mt-20 mb-24 px-4 lg:px-0">
                <div className="hero-content flex-col lg:flex-row-reverse border-2 rounded-2xl">
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4">
                            <h2 className="text-2xl font-bold text-secondary mb-4">Login</h2>
                            <div className="form-control">
                                <input
                                    {...register('email', {
                                        required: { value: true, message: 'Email is required' },
                                        pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid Email' }
                                    })}
                                    type="email"
                                    placeholder="Email"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                                {errors?.email?.type === 'required' && (
                                    <p className="text-sm text-red-600">{errors.email.message}</p>
                                )}
                                {errors?.email?.type === 'pattern' && (
                                    <p className="text-sm text-red-600">{errors.email.message}</p>
                                )}
                            </div>
                            <div className="form-control">
                                <input
                                    {...register('pass', {
                                        required: { value: true, message: 'Password is required' },
                                        minLength: {
                                            value: 6,
                                            message: 'Password required minimum 6 characters length'
                                        }
                                    })}
                                    type="password"
                                    placeholder="Password"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                                {errors?.pass?.type === 'required' && (
                                    <p className="text-sm text-red-600">{errors.pass.message}</p>
                                )}
                                {errors?.pass?.type === 'minLength' && (
                                    <p className="text-sm text-red-600">{errors.pass.message}</p>
                                )}

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
                                <Link href="/signup">
                                    <a className="label-text-alt link text-blue-600">New user? Create an account</a>
                                </Link>
                            </label>
                        </form>
                        <div className="divider m-0 px-10">Or</div>

                        <button
                            onClick={() => signInWithGoogle()}
                            className="flex gap-6 lg:gap-20 items-center rounded-full border-2 mx-8 mt-3"
                        >
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

export default Login
