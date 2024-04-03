
import {  useState } from 'react';
import Logo from '../../public/images/Color horizontalPNG.png'
import Storepanel from '../assets/StorePanel/Group-1597883790.png'
import AdminPanel from '../assets/StorePanel/Group-1597883788.png'
import Reactimg from '../assets/StorePanel/react.png'
import flutter from '../assets/StorePanel/flutter.png'
import StoreApp from '../assets/StorePanel/storeapp.png'
import Deliveryman from '../assets/StorePanel/deliveryman.png'

import { motion, useAnimation } from 'framer-motion';
const Nav = () => {




    const [a, b] = useState(false)
    const vari3 = {
        initial: { x: "100%" },
        animate: { x: "0" },
        exit: { x: "100%" }

    }

    const vari2 = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    }

    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);


    const handleHoverEnter = () => {
        setIsHovered(true);
        if (!isHovered) {
            controls.start({ opacity: 1, y: "0%" });
        } else {
            controls.start({ opacity: 0, y: "-5%" });
        }
    };
    const handleHoverLeave = () => {
        setIsHovered(false);
        if (!isHovered) {
            controls.start({ opacity: 1, y: "0%" });
        } else {
            controls.start({ opacity: 0, y: "-5%" });
        }
    };

    const vari1 = {
        initial: { y: "-130%", zIndex: -1 },
        animate: { y: "0", zIndex: 1 },
        exit: { y: "-130%", zIndex: -1 }
    }


    return (



        <div className='absolute md:w-screen w-fit h-[10vh] text-white flex justify-center z-50'>
            <div className='md:w-[82%]  h-full flex justify-between items-center p-2
            '>
                <img className='md:w-[12vw] max-[400px]:h-[4vh]' src={Logo} alt="" />
                <div className='hidden md:flex gap-7 font-semibold text-md '>
                    <h1 className='text-[17px]'>Home</h1>

                    <div onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>

                        <h3 className="hover:text-[#FF6B00] transition text-[17px] ease-in-out">Feature</h3>
                        <motion.div
                            variants={vari1}
                            initial="initial"
                            animate={isHovered ? "animate" : "exit"}
                            // onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}
                            transition={{ duration: 0.5, }} className="absolute text-black top-[92%] w-[40vw] left-[30%] bg-white  z-[999] py-10 rounded-xl  shadow-md">
                            <div className="absolute w-28 h-28   pointer-events-none top-0 left-1/2 -translate-x-[100%] -translate-y-1/2"></div>
                            <div className="w-full   px-9">
                                <h1 className="text-[1.4vw] font-semibold">Core Packages</h1>


                            </div>

                            <div className="w-full h-[37vh] px-5 mt-3  grid grid-cols-2 grid-rows-3">

                                <div className="w-[17vw] h-[12vh] p-3 rounded-lg hover:bg-[#EEFFFC]  transition ease-in-out flex gap-2 items-center ">
                                    <img className="object-cover h-[4vw]" src={AdminPanel} alt="" />

                                    <div>
                                        <a href='#admin' className="font-semibold mt-1">Admin Panel</a>
                                    </div>
                                </div>

                                <div className="w-[17vw] h-[12vh] rounded-lg hover:bg-[#EEFFFC] p-3 transition ease-in-out flex  gap-2 items-center">
                                    <img className="object-cover h-[4vw]" src={Storepanel} alt="" />

                                    <div>
                                        <a href='#storepanel' className="font-semibold mt-1">Store Panel</a>
                                    </div>
                                </div>





                                <div className="w-[17vw] h-[12vh] rounded-lg hover:bg-[#EEFFFC] p-3 transition ease-in-out items-center flex gap-2">
                                    <img className="object-cover h-[4vw]" src={Reactimg} alt="" />

                                    <div>
                                        <a href='#admin' className="font-semibold mt-1">Website</a>
                                    </div>
                                </div>

                                <div className="w-[17vw] h-[12vh] rounded-lg hover:bg-[#EEFFFC] p-3 transition ease-in-out flex gap-2 items-center">
                                    <img className="object-cover h-[4vw]" src={flutter} alt="" />

                                    <div>
                                        <a href='#admin' className="font-semibold mt-1">Application</a>
                                    </div>
                                </div>

                                <div className="w-[17vw] h-[12vh] rounded-lg hover:bg-[#EEFFFC] p-3 transition ease-in-out flex gap-2 items-center">
                                    <img className="object-cover h-[4vw]" src={StoreApp} alt="" />

                                    <div>
                                        <a href='#admin' className="font-semibold mt-1">Store App</a>
                                    </div>
                                </div>

                                <div className="w-[17vw] h-[12vh] rounded-lg hover:bg-[#EEFFFC] p-3 transition ease-in-out flex gap-2 items-center">
                                    <img className="object-cover h-[4vw]" src={Deliveryman} alt="" />

                                    <div>
                                        <a href='#admin' className="font-semibold mt-1">Deliveryman App</a>
                                    </div>
                                </div>


                            </div>

                            <div className='w-[90%] mt-7 hover:bg-[#37C86C] ml-7 flex text-3xl text-white items-center justify-center
                             rounded-xl h-[12vh] transition ease-in-out bg-[#004D2B]'>
                                <a href="#">Connect Us</a>
                            </div>

                                


                        </motion.div>
                    </div>
                    <h1 className='text-[17px]'>Demo</h1>
                </div>
                <button className='hidden md:block p-2 px-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400
                  font-semibold text-xl'>
                    <a href="#">
                        Connect Us
                    </a>

                </button>

                <div>
                    <i onClick={() => b(!a)} className="hidden text-4xl  ri-menu-line
                     max-[400px]:block
                     max-[400px]:ml-[20vh]" />
                </div>





                <motion.aside
                    variants={vari3}
                    initial="initial"
                    animate={a ? "animate" : "exit"}

                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2, staggerChildren: .2 }}
                    className="w-80 h-screen bg-white text-black fixed right-0 top-0 px-10 py-32
                    max-[400px]: flex flex-col">

                    <motion.button variants={vari2}
                        className='w-full flex items-start'
                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                        onClick={() => b(!a)}><i className="text-4xl ri-close-line" />
                    </motion.button>
                    {["Home", "Feature", "Demo", ].map((item, index) => (
                        <div className='dropdown dropdown-bottom dropdown-end' key={index}>
                            <motion.a
                                variants={vari2}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 2 }}
                                key={index}
                                tabIndex={0} role="button"
                                className="block text-5xl mt-8 font-semibold "
                            >
                                {item}
                            </motion.a>
                            {item === 'Feature' &&
                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow  bg-[#F3F3F3] rounded-box w-64">
                                    <li>
                                        <div>

                                            <img className="object-cover h-10" src={AdminPanel} alt="" />

                                            <a className='text-[17px]  ml-4'>Admin Panel</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>

                                            <img className="object-cover h-10" src={Storepanel} alt="" />

                                            <a className='text-[17px] ml-4'>Store Panel</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div>

                                            <img className="object-cover h-10" src={Reactimg} alt="" />

                                            <a className='text-[17px] ml-4'>React website</a>
                                        </div>
                                    </li>

                                    <li>
                                        <div>

                                            <img className="object-cover h-10" src={flutter} alt="" />

                                            <a className='text-[17px] ml-4'>Flutter</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>

                                            <img className="object-cover h-10" src={StoreApp} alt="" />

                                            <a className='text-[17px] ml-4'>Store App</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div>

                                            <img className="object-cover h-10" src={Deliveryman} alt="" />

                                            <a className='text-[17px] ml-4'>Delivery</a>
                                        </div>
                                    </li>
                                    
                                </ul>
                            }
                        </div>

                        
                    ))}
                    
                    <button className='absolute top-[53vh] block p-4 px-7 bg-gradient-to-br from-green-400 to-green-600 rounded-lg hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400
                  font-semibold text-xl'>
                    <a href="#">
                        Connect Us
                    </a>

                   </button>


                </motion.aside>

                
                

            </div>
        </div>
    )
}
export default Nav

