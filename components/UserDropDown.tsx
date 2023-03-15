import React from 'react';
import CustomLink from './CustomLink';

type user = {
    email: string;
    name: string;
    picture: string;
}

type UserDropDownProps = {
    user: user;
}

const UserDropDown = ({ user }: UserDropDownProps) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
    <div onClick={toggle}>
        <button className="flex items-center justify-center text-gray-500 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" id="avatarButton" aria-haspopup="true">
            <span className="sr-only">Open user menu</span>
            <img className="w-5 h-5 rounded-full" src={user.picture} alt="" />
        </button>
            {
                isOpen && (
                    <div id="userDropdown" className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 right-5 top-20">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            {
                                user.name ? user.name.split('@')[0] : user.email.split('@')[0]
                            }
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                            <li>
                                <CustomLink href="/user" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</CustomLink>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-1">
                            <a href='/api/auth/logout' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>
                )
            }
    </div>
    );
}

export default UserDropDown;