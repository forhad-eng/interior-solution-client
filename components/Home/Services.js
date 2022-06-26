import Link from 'next/link'
import img2 from '../../assets/Icon/affordable 1.png'
import img1 from '../../assets/Icon/apartment 1.png'
import img3 from '../../assets/Icon/lessee 1.png'
import ServiceCard from './ServiceCard'

const Services = () => {
    const serviceDetails = [
        {
            id: 1,
            name: 'Office Interior Design',
            price: 299,
            img: img1
        },
        {
            id: 2,
            name: 'Showroom Design',
            price: 399,
            img: img2
        },
        {
            id: 3,
            name: 'Residential/ Home',
            price: 499,
            img: img3
        }
    ]

    return (
        <div id="services" className="text-center max-w-7xl mx-auto px-6 lg:px-10 my-20">
            <p className="font-bold">Services</p>
            <h2 className="text-3xl font-extrabold text-secondary tracking-wide">
                We're an agency tailored to all <br /> clients' needs that always delivers
            </h2>

            <div className="grid lg:grid-cols-3 my-20">
                {serviceDetails.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
            <Link href="/">
                <button className="btn btn-primary text-white">Explore More</button>
            </Link>
        </div>
    )
}

export default Services
