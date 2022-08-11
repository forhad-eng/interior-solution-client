import Image from 'next/image'
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form"
import cart from '../../assets/Icon/Group.png'

const Bookings = () => {
    const router = useRouter()
    const { id } = router.query
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-base-200 pl-10 pt-10">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className='block w-1/2 p-2 mb-5 rounded-sm' defaultValue="test" {...register("name")} />
                        <input className={`block w-1/2 p-2 mb-5 rounded-sm ${errors.email && 'mb-1'}`} {...register("email", { required: true })} />
                        {errors.email && <span className='block text-red-500 mb-3'>This field is required</span>}
                        <input className={`block w-1/2 p-2 mb-5 rounded-sm ${errors.service && 'mb-1'}`} {...register("service", { required: true })} />
                        {errors.service && <span className='block text-red-500 mb-3'>This field is required</span>}
                        <input className='block text-[#ffffff] bg-[#251D58] px-10 py-3 rounded-md' type="submit" value="Book" />
                    </form>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 overflow-y-auto w-56 text-base-content">
                        <li>
                           <div>
                                <Image src={cart}   
                                    alt="cart"
                                    width={24}
                                    height={24}
                                />
                                <span>Book Now</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Bookings
