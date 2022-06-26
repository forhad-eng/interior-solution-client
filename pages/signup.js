import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import googleIcon from '../assets/Icon/Group 573.png'
import signupPic from '../assets/Image/signup.jpg'
import Meta from '../components/Shared/Meta'
import { auth } from '../firebase.config'

const Signup = () => {
    const [createUserWithEmailAndPassword, eUser, eLoading, eErr] = useCreateUserWithEmailAndPassword(auth)
    const [updateProfile, updating, upError] = useUpdateProfile(auth)
    const [signInWithGoogle, gUser, gLoading, gErr] = useSignInWithGoogle(auth)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    if (eUser) {
        router.replace('/')
    }

    const onSubmit = async data => {
        const name = data.name
        const email = data.email
        const pass = data.pass
        const conPass = data.conPass

        if (pass !== conPass) {
            toast.error("Password doesn't match")
            return
        }

        await createUserWithEmailAndPassword(email, pass)
        await updateProfile({ displayName: name })
    }

    return (
        <>
            <Meta title="Interior Solution - Login" />
            <div className="hero mt-10 lg:mt-20 mb-24 px-4 lg:px-0">
                <div className="hero-content flex-col lg:flex-row-reverse border-2 rounded-2xl">
                    <div className="card flex-shrink-0 w-full max-w-sm">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-4">
                            <h2 className="text-2xl font-bold text-secondary mb-4">Sign Up</h2>
                            <div className="form-control">
                                <input
                                    {...register('name', { required: { value: true, message: 'Name is required' } })}
                                    type="text"
                                    placeholder="Name"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                                {errors?.name?.type === 'required' && (
                                    <p className="text-sm text-red-600">{errors.name.message}</p>
                                )}
                            </div>
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
                            </div>
                            <div className="form-control">
                                <input
                                    {...register('conPass', {
                                        required: { value: true, message: 'Confirm password is required' },
                                        minLength: {
                                            value: 6,
                                            message: 'Password required minimum 6 characters length'
                                        }
                                    })}
                                    type="password"
                                    placeholder="Confirm Password"
                                    className="border-b-2 outline-none pb-2 text-sm"
                                />
                                {errors?.conPass?.type === 'required' && (
                                    <p className="text-sm text-red-600">{errors.conPass.message}</p>
                                )}
                                {errors?.conPass?.type === 'minLength' && (
                                    <p className="text-sm text-red-600">{errors.conPass.message}</p>
                                )}
                            </div>
                            <div className="form-control mt-4">
                                <button type="submit" className="btn btn-primary text-white">
                                    Sign Up
                                </button>
                            </div>
                            <label className="label py-0">
                                <Link href="/login">
                                    <a className="label-text-alt link text-blue-600">Already have an account? Login</a>
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
                        <Image src={signupPic} alt="Signup" width="350" height="300" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup
