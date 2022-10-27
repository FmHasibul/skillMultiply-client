import React from 'react';
import {FaGooglePlay , FaAppStoreIos } from 'react-icons/fa'

import img1 from '../asset/card-1.svg'
import img2 from '../asset/card-2.svg'
import img3 from '../asset/card-3.svg'
import img4 from '../asset/card-4.svg'
import img5 from '../asset/card-5.svg'
import student from '../asset/students.svg'
import professional from '../asset/professionals.svg'
import { Link } from 'react-router-dom';


const Home = () => {

    
    return (
        <div className='my-16'>
            <div className="header bg-zinc-800 mx-auto text-center pb-16">
                <h1 className="text-zinc-50 text-6xl font-bold py-16">The best way to learn to code</h1>
                <div className="desc text-zinc-200 text-2xl font-normal mb-8">
                    <p>Courses designed by experts with real-world practice.</p>
                    <p>Join our global community. <span className="font-bold">It's free.</span></p>
                </div>
                <Link to='/courses'><button className="btn btn-wide btn-info rounded-md hover:bg-sky-700">Start Learning Now</button></Link>
            </div>
            {/* info  */}
            <div  className="pb-24 bg-gray-300">
                <div className="container mx-auto pt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                   
                    <div className="card glass shadow-md bg-white rounded-md">
                        <figure className="pt-10">
                            <img src={img1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center pb-20">
                            <h2 className="card-title text-4xl font-bold mb-8">Best for you</h2>
                            <p className="text-xl text-slate-500">No matter your experience level, you'll be writing <span
                                className="font-bold">real, functional code within minutes</span> of starting your first course.
                            </p>
                        </div>
                    </div>
                    
                    <div className="card glass shadow-md bg-white rounded-md">
                        <figure className="pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center pb-20">
                            <h2 className="card-title text-4xl font-bold mb-8">Never Hesitate</h2>
                            <p className="text-xl text-slate-500">Don't Worry about your present situation <span
                                className="font-bold">We are here guide you at your best</span> Take a look of Our courses
                            </p>
                        </div>
                    </div>
                    
                    <div className="card glass shadow-md bg-white rounded-md">
                        <figure className="pt-10">
                            <img src={img3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center pb-20">
                            <h2 className="card-title text-4xl font-bold mb-8">Tailored to you</h2>
                            <p className="text-xl text-slate-500">No matter your experience level, you'll be writing <span
                                className="font-bold">Dont waste your time by random surffing</span>  start your first course.
                            </p>
                        </div>
                    </div>
                    
                    <div className="card glass lg:card-side bg-white shadow-md rounded-md col-span-2 grid md:grid-cols-2">
                        <figure><img src={img4} alt="Album" /></figure>
                        <div className="flex flex-col sm:text-center md:text-right gap-6 self-center">
                            <h2 className="text-4xl font-bold">Learning on the go</h2>
                            <p>Learn on the web or on the go. <span className='text-xl font-semibold'>Skill <span className='text-green-600'>Multiply</span></span> is always ready for you and you'll never lose your
                                place.</p>
                            <div className="flex mb-5 mx-auto gap-8">
                                <a href="#">
                                    <FaGooglePlay className='hover:text-green-700' />
                                    
                                </a>
                                <a href="#">
                                    <FaAppStoreIos className='hover:text-green-700' />
                                </a>

                            </div>
                        </div>
                    </div>
                    
                    <div className="card glass bg-base-100 shadow-md bg-white rounded-md">
                        <figure className="pt-10">
                            <img src={img2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center pb-20">
                            <h2 className="card-title text-4xl font-bold mb-8">We are here for you</h2>
                            <p className="text-xl text-slate-500">Start Learning from scrach . You will reach  on Mounten Top<span
                                className="font-bold">real, journey starts within minutes</span> Do it now .
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Key aspect  */}
            <div className="bg-gray-300 py-24">
                <div className="key-aspect container mx-auto text-center">
                    <h1 className="w-2/4 mx-auto text-5xl font-bold mb-28">The perfect platform to boost your technical skills</h1>
                    <div className="aspects lg:flex gap-8">
                        <div className="students glass flex flex-col gap-8 basis-1/2">
                            <img src={student} alt="students"/>
                                <h2 className="text-4xl font-bold">Students</h2>
                                <p className="text-xl text-slate-500 w-4/6 mx-auto">Prepping for the big test or want to ace your first
                                interview? Use <span className='text-xl font-semibold'>Skill <span className='text-green-600'>Multiply</span></span>'s real-world practice to reinforce what you've learned and get you
                                    ready for that big moment.</p>
                        </div>
                        <div className="professionals glass flex flex-col gap-8 basis-1/2">
                            <img src={professional} alt="professionals"/>
                                <h2 className="text-4xl font-bold">Professionals</h2>
                                <p className="text-xl text-slate-500 w-4/6 mx-auto">You can learn something totally new to advance your
                                career. Or maybe you just want to knock off the rust. Try <span className='text-xl font-semibold'>Skill <span className='text-green-600'>Multiply</span></span> to get access to a variety
                                    of courses, from machine learning to web development.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact  */}
            <div className="bg-gray-900">
                <div className="container mx-auto py-24">
                    <h1 className="text-slate-200 text-center text-6xl font-semibold pb-16">Contact</h1>
                    <section className="py-6 dark:bg-gray-900 dark:text-gray-50">
                        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x pb-16">
                            <div className="py-6 md:py-0 md:px-6">
                                <h1 className="text-4xl font-bold">Get in touch</h1>
                                <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
                                <div className="space-y-4">
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            className="w-5 h-5 mr-2 sm:mr-6">
                                            <path fill-rule="evenodd"
                                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                                clip-rule="evenodd"></path>
                                        </svg>
                                        <span>Barishal, Bangladesh</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            className="w-5 h-5 mr-2 sm:mr-6">
                                            <path
                                                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                                            </path>
                                        </svg>
                                        <span>01760085053</span>
                                    </p>
                                    <p className="flex items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                            className="w-5 h-5 mr-2 sm:mr-6">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z">
                                            </path>
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                        </svg>
                                        <span>fmhhasan22@gmail.com</span>
                                    </p>
                                </div>
                            </div>
                            <form novalidate=""
                                className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
                                <label className="block">
                                    <span className="mb-1">Full name:</span>
                                    <input type="text" placeholder="Your full name"
                                        className="block w-full mt-2 px-3 py-2 rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"/>
                                </label>
                                <label className="block">
                                    <span className="mb-1">Email address:</span>
                                    <input type="email" placeholder="Your email address"
                                        className="block w-full mt-2 px-3 py-2 rounded-sm shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"/>
                                </label>
                                <label className="block">
                                    <span className="mb-1">Message:</span>
                                    <textarea rows="3"
                                        className="block w-full mt-2 px-3 py-2 rounded-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                                </label>
                                <button type="button"
                                    className="self-center  px-8 py-3 text-lg rounded-3xl focus:ring hover:ring focus:ring-opacity-75 dark:bg-gray-400 dark:text-white-900 focus:ring-gray-400 hover:ring-gray-400">Send</button>
                            </form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Home;