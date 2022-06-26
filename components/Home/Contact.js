import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const Contact = () => {
    const [chars, setChars] = useState(100)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()
    const onSubmit = data => console.log(data)

    useEffect(() => {
        setChars(100 - watch('message').length)
    }, [watch('message')])

    return (
        <div className="text-center max-w-7xl mx-auto px-6 lg:px-10 my-20">
            <p className="font-bold">Contact</p>
            <h2 className="text-3xl font-extrabold text-secondary tracking-wide">
                Let us handle your <br /> project, professionally.
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto mt-10 mb-20">
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <input
                            {...register('fname', { required: { value: true, message: 'First name is required' } })}
                            type="text"
                            placeholder="First Name"
                            className="bg-[#f6f6f6] w-full p-3 rounded-md text-sm"
                        />
                        <label className="label">
                            <span className="label-text-alt text-error">
                                {errors?.fname?.type === 'required' && errors.fname.message}
                            </span>
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <input
                            {...register('lname')}
                            type="text"
                            placeholder="Last Name"
                            className="bg-[#f6f6f6] w-full p-3 rounded-md text-sm"
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control w-1/2">
                        <input
                            {...register('email', {
                                required: { value: true, message: 'Email is required' },
                                pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid Email' }
                            })}
                            type="email"
                            placeholder="Email address"
                            className="bg-[#f6f6f6] w-full p-3 rounded-md text-sm"
                        />
                        <label className="label">
                            <span className="label-text-alt text-error">
                                {errors?.email?.type === 'required' && errors.email.message}
                                {errors?.email?.type === 'pattern' && errors.email.message}
                            </span>
                        </label>
                    </div>

                    <div className="form-control w-1/2">
                        <input
                            {...register('phone', {
                                required: { value: true, message: 'Phone is required' },
                                minLength: { value: 11, message: 'Phone number requires 9 digit' },
                                pattern: { value: /[0-9]/, message: 'Invalid Phone number' }
                            })}
                            type="text"
                            placeholder="Phone Number"
                            className="bg-[#f6f6f6] w-full p-3 rounded-md text-sm"
                        />
                        <label className="label">
                            <span className="label-text-alt text-error">
                                {errors?.phone?.type === 'required' && errors.phone.message}
                                {errors?.phone?.type === 'pattern' && errors.phone.message}
                                {errors?.phone?.type === 'minLength' && errors.phone.message}
                            </span>
                        </label>
                    </div>
                </div>
                <div className="relative">
                    <textarea
                        {...register('message', { required: { value: true, message: 'Message is required' } })}
                        cols="30"
                        rows="4"
                        placeholder="Your message"
                        className="bg-[#f6f6f6] w-full rounded-md text-sm pl-3 pt-3"
                    ></textarea>
                    <label className="label">
                        <span className="label-text-alt text-error">
                            {errors?.message?.type === 'required' && errors.message.message}
                        </span>
                    </label>
                    <span className="absolute bottom-8 right-10 label-text-alt">
                        {watch('message')?.length > 100 ? (
                            <span className="text-red-600">{-1 * chars} chars exceeds</span>
                        ) : (
                            <span className="text-green-600">{chars} chars left</span>
                        )}
                    </span>
                </div>
                <input
                    disabled={watch('message')?.length > 100}
                    type="submit"
                    className="btn btn-primary block mx-auto mt-4 text-white"
                    value="Send Message"
                />
            </form>
        </div>
    )
}

export default Contact
