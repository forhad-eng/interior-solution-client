import { signOut } from 'firebase/auth'
import Image from 'next/image'
import Link from 'next/link'
import { useAuthState } from 'react-firebase-hooks/auth'
import logo from '../../assets/Group 33069.png'
import { auth } from '../../firebase.config'

const Header = () => {
    const [user] = useAuthState(auth)

    const navigateItems = (
        <>
            <li>
                <Link href="/">
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
        <nav className="bg-[#f6f6f6] py-2">
            <div className="navbar max-w-7xl mx-auto px-6 lg:px-10">
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
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary font-bold tracking-wider"
                        >
                            {navigateItems}
                        </ul>
                    </div>

                    <Link href="/">
                        <Image src={logo} alt="Logo" width="125" height="41" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 text-secondary font-bold tracking-wider">
                        {navigateItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? (
                        <a onClick={() => signOut(auth)} className="btn btn-primary text-white lg:w-[96px] lg:h-[20px]">
                            Logout
                        </a>
                    ) : (
                        <Link href="/login">
                            <a className="btn btn-primary text-white lg:w-[96px] lg:h-[20px]">Login</a>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Header
