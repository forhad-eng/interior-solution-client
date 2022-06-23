import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/Group 33069.png'

const Header = () => {
    const navigateItems = (
        <>
            <li>
                <Link href="/Home">
                    <a>Home</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </li>
            <li>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </li>
            <li>
                <Link href="/admin">
                    <a>Admin</a>
                </Link>
            </li>
        </>
    )

    return (
        <div className="navbar bg-base-100 max-w-7xl mx-auto px-6 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary"
                    >
                        {navigateItems}
                    </ul>
                </div>

                <Link href="/">
                    <Image src={logo} alt="Logo" width="125" height="41" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 text-secondary">{navigateItems}</ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-primary text-white lg:w-[96px] lg:h-[20px]">Login</a>
            </div>
        </div>
    )
}

export default Header
