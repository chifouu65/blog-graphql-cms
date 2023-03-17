
import React from 'react'
import CustomLink from './CustomLink'
import { useUser } from '@auth0/nextjs-auth0/client';
import UserDropDown from './UserDropDown';

const links = [
    {
        href: '/',
        label: 'Home',
    },
    {
        href: '/about',
        label: 'About',
    }
]


function Navbar () {
    const { user } = useUser();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white mb-4 border-b border-gray-200 px-2 sm:px-4 py-2.5 rounded">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <CustomLink href="/" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap ">Blog</span>
                </CustomLink>
                <button 
                    onClick={toggleMenu}
                    type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 ">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" >
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <>
                             {
                                links.map(({ href, label }) => (
                                    <li key={`${href}${label}`}>
                                        <CustomLink
                                            href={href}
                                            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                        >
                                            {label}
                                        </CustomLink>
                                    </li>
                                ))
                             }
                        </>
                        {
                            user ? (
                                <li key="user">
                                    <UserDropDown
                                        user={user}
                                    />
                                </li>
                            ) : (
                                <li key="login">
                                    <CustomLink
                                        href="/api/auth/login"
                                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                    >
                                        Login
                                    </CustomLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className={`
                    ${isMenuOpen ? 'absolute top-10 w-full md:hidden' : 'hidden w-full md:hidden'}
                `} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                        <>
                             {
                                links.map(({ href, label }) => (
                                    <li key={`${href}${label}`}>
                                        <CustomLink
                                            href={href}
                                            className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                        >
                                            {label}
                                        </CustomLink>
                                    </li>
                                ))
                             }
                        </>
                        {
                            user ? (
                                <li key="user" className='py-2'>
                                    <UserDropDown
                                        user={user}
                                    />
                                </li>
                            ) : (
                                <li key="login">
                                    <CustomLink
                                        href="/api/auth/login"
                                        className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                    >
                                        Login
                                    </CustomLink>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar