import Image from 'next/image'
import Link from 'next/link'

const ServiceCard = ({ service }) => {
    const { name, price, img, id } = service
    return (
        <div className={`card p-4 ${id === 2 && 'shadow-2xl'}`}>
            <figure>
                <Image src={img} alt="Project" width="80" height="80" className="rounded-lg" />
            </figure>
            <div className="card-body">
                <h2 className="card-title mx-auto text-secondary">{name}</h2>
                <h2 className="card-title mx-auto font-extrabold text-primary">${price}</h2>
                <p className="tracking-wider leading-7 text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident doloribus ipsam impedit natus
                    enim assumenda?
                </p>
                <Link href={`/book/${id}`}>
                    <button className="btn btn-primary btn-sm text-white">Book Now</button>
                </Link>
            </div>
        </div>
    )
}

export default ServiceCard
