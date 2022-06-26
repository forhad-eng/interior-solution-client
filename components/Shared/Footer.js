import Image from 'next/image'
import mapIcon from '../../assets/Icon/map-pin-2-fill.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-[#251d58] text-white">
            <div className="flex">
                <Image src={mapIcon} alt="map-icon" width="16" height="16" />
                <p className="inline-block">
                    H#000 (0th Floor), Road #00,
                    <br />
                    New DOHS, Mohakhali, Dhaka, Bangladesh
                </p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    )
}

export default Footer
