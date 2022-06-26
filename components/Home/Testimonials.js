import { useRef } from 'react'
import Carousel from 'react-elastic-carousel'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
    const testimonials = [
        { id: 1, name: 'Nash Patrik', img: 'https://api.lorem.space/image/face?hash=47449', pos: 'CEO' },
        { id: 2, name: 'Miriam Barron', img: 'https://api.lorem.space/image/face?hash=47233', pos: 'CEO' },
        { id: 3, name: 'Bria Malone', img: 'https://api.lorem.space/image/face?hash=47789', pos: 'CEO' }
    ]

    const carouselRef = useRef(null)
    let resetTimeout

    return (
        <div className="pt-16 pb-20 bg-[#F6F6F6]">
            <h1 className="text-3xl text-secondary text-center tracking-wide font-extrabold mb-8">Testimonials</h1>
            <Carousel
                ref={carouselRef}
                enableAutoPlay
                autoPlaySpeed={3000}
                onNextEnd={({ index }) => {
                    clearTimeout(resetTimeout)
                    if (index + 1 === 3) {
                        resetTimeout = setTimeout(() => {
                            carouselRef?.current?.goTo(0)
                        }, 3000)
                    }
                }}
                className="p-2"
            >
                {testimonials.map(test => (
                    <TestimonialCard key={test.id} testimonial={test} />
                ))}
            </Carousel>
        </div>
    )
}

export default Testimonials
