import Image from 'next/image'
import image1 from '../../assets/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png'

const LandingUi = () => {
    return (
        <div className="my-20 px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Image
                    src={image1}
                    className="max-w-sm rounded-lg shadow-2xl"
                    alt="Home Pic"
                    width="571"
                    height="510"
                />

                <div>
                    <h1 className="text-5xl font-bold">
                        We Build <br /> Your Dream
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default LandingUi
