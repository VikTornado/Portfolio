import React, {useState} from 'react';
import {FcMenu} from "react-icons/fc";
import {AiOutlineHome, AiOutlineMail, AiOutlineProject} from "react-icons/ai";
import {GrProjects} from "react-icons/gr";
import {BsPerson} from "react-icons/bs";
import {NavLink} from 'react-router-dom'

const SideNav = () => {
    const [nav, setNav] = useState(false)
    const handleBtn = () => {
        setNav(!nav)
    }


    return (
        <div>
            <FcMenu onClick={handleBtn}
                    size={30}
                    className={'absolute top-4 right-4 z-[90] md:hidden'}/>
            {nav ?
                (<div className={'fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'}>
                        <NavLink to="#main"
                           className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer md:hover-scale-110 easy-in duration-200'}>
                            <AiOutlineHome size={30}/>
                            <span className={'pl-4'}>Home</span>
                        </NavLink>
                        <NavLink to="#work"
                           className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer md:hover-scale-110 easy-in duration-200'}>
                            <GrProjects size={30}/>
                            <span className={'pl-4'}>Work</span>
                        </NavLink>
                        <NavLink to="#projects"
                           className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer md:hover-scale-110 easy-in duration-200'}>
                            <AiOutlineProject size={30}/>
                            <span className={'pl-4'}>Projects</span>
                        </NavLink>
                        <NavLink to="#slider"
                           className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer md:hover-scale-110 easy-in duration-200'}>
                            <BsPerson size={30}/>
                            <span className={'pl-4'}>Slider</span>
                        </NavLink>
                        <NavLink to="#contacts"
                           className={'w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer md:hover-scale-110 easy-in duration-200'}>
                            <AiOutlineMail size={30}/>
                            <span className={'pl-4'}>Contacts</span>
                        </NavLink>
                    </div>
                ) : (
                    ""
                )}
            <div className={'md:block hidden fixed top-[25%] z-10'}>
                <div className={'flex flex-col pl-5'}>
                    <a href="#main"
                       className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer md:hover-scale-110 easy-in duration-300'}>
                        <AiOutlineHome size={30}/>
                    </a>
                    <a href="#work"
                       className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer md:hover-scale-110 easy-in duration-300'}>
                        <GrProjects size={30}/>
                    </a>
                    <a href="#projects"
                       className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer md:hover-scale-110 easy-in duration-300'}>
                        <AiOutlineProject size={30}/>
                    </a>
                    <a href="#slider"
                       className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer md:hover-scale-110 easy-in duration-300'}>
                        <BsPerson size={30}/>
                    </a>
                    <a href="#contacts"
                       className={'rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer md:hover-scale-110 easy-in duration-300'}>
                        <AiOutlineMail size={30}/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SideNav;