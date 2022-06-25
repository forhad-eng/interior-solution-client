const TestimonialCard = ({ testimonial }) => {
    const { name, img, pos } = testimonial
    return (
        <div className="w-96 border-2 rounded-lg mx-auto p-6 bg-white">
            <div className="flex gap-4">
                <div className="avatar">
                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} alt="Client" />
                    </div>
                </div>

                <div>
                    <h5 className="font-bold">{name}</h5>
                    <h5 className="text-left font-bold">{pos}</h5>
                </div>
            </div>

            <p className="text-left my-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et esse voluptatibus, nisi exercitationem
                officia voluptate delectus veritatis non voluptates optio.
            </p>
        </div>
    )
}

export default TestimonialCard
