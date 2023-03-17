import React from 'react';
import CustomLink from './CustomLink';
import {FaUserCircle} from 'react-icons/fa'

type user = {
    email: string;
    name: string;
    picture: string;
    nickname: string;
}

type UserDropDownProps = {
    user: user;
}

const UserDropDown = ({ user }: UserDropDownProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
    <>
    <div onClick={toggle}>
        <button className="px-2 flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <span className="sr-only">Open user menu</span>
            {
             user?.nickname
            }
            {
                user?.picture ? (
                    <img className="ml-2 w-5 h-5 rounded-full" src={user.picture} alt="" />
                ) : (
                    <FaUserCircle className="ml-2 w-5 h-5 rounded-full" />
                )
            } 
        </button>
            {
                isOpen && (
                    <>
                    <div className="z-30 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute md:top-20 top-30">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            {
                                user?.nickname
                            }
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                            <li>
                                <CustomLink href="/user" className="block px-4 py-2 hover:bg-gray-100 ">Dashboard</CustomLink>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href='/api/auth/logout' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                        </div>
                        </div>
                        <div 
                            onClick={toggle}  
                            className='fixed bottom-0 right-0
                            w-full h-full flex items-center justify-center
                            bg-black bg-opacity-50'
                        />
                        </>
                )
            }
    </div>
    </>
    );
}

export default UserDropDown;