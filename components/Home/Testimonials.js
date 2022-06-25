import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: 'Nash Patrik', img: 'https://api.lorem.space/image/face?hash=47449', pos: 'CEO' },
        { id: 2, name: 'Miriam Barron', img: 'https://api.lorem.space/image/face?hash=47233', pos: 'CEO' },
        { id: 3, name: 'Bria Malone', img: 'https://api.lorem.space/image/face?hash=47789', pos: 'CEO' }
    ]

    return (
        <div className="py-20 bg-[#F6F6F6]">
            <h1 className="text-3xl text-secondary text-center tracking-wide font-extrabold mb-10">Testimonials</h1>
            <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} interval="4000">
                {testimonials.map(test => (
                    <TestimonialCard key={test.id} testimonial={test} />
                ))}
            </Carousel>
        </div>
    )
}

export default Testimonials
