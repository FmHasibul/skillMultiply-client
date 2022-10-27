import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/Authprovider/Authprovider';
import image from '../mylogo.png'
import { FaUserAlt } from 'react-icons/fa';

const Header = () => {
    const [theme, setTheme] = useState(false)
    const { user, LogOut } = useContext(AuthContext)
    console.log(user?.photoURL)
    const handleLogout = () => {
        LogOut()
            .then(() => { })
        .catch((e) => (console.error('Mistake: ',e)))
    }
    const themeHandle = () => {
        setTheme(dark => !dark)
        console.log(theme)
    }
    return (
        <div className="navbar bg-base-500 bg-gray-300 text-black-content mb-16 ">
            <div className="navbar-start">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={image} alt='logo'/>
                    </div>
                </label>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Skill <span className='text-green-400'>Multiply</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/courses'>Courses</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                    <li><Link to='/faq'>FAQ</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='menu lg:menu-horizontal'>
                    {user?.uid ?
                        <>
                            <li >
                                <button onClick={handleLogout} className="  rounded px-5 py-1">Log  Out</button>
                            </li>
                            <li  className=" rounded-full">
                                {user?.photoURL ? 
                                    <div data-tip={user?.displayName} className="w-16 tooltip tooltip-bottom rounded-full">
                                        <img className='rounded-full' src={user?.photoURL} alt="DP"/>
                                    </div>
                                    
                                    :
                                    <div data-tip={user?.displayName} className="w-16 tooltip tooltip-bottom rounded-full">
                                        <FaUserAlt />
                                    </div>
                                }
                            </li>
                        </>
                        :
                        <>
                            <li  >
                                <Link to='/signup' className="rounded-3xl " >Sign Up</Link>
                            </li>
                            <li>
                                <Link to='/login' className="  rounded-3xl px-5 py-1">Login</Link>
                            </li>
                        </>
                        
                    }
                    
                    <div onClick={themeHandle} className="form-control align-middle ">     
                        {
                            theme ? <p className='ms-1'>Dark</p> : <p >Light</p>
                        }                            
                     <input type="checkbox" className="toggle ms-2"  />
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;