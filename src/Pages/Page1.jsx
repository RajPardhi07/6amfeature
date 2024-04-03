import { useState } from "react"
import Box2 from "../Components/Box2"
import Box5 from "../Components/Box5"
import Box6 from "../Components/Box6"
import Box7 from "../Components/Box7"
import Box1 from "../Components/Box1"
import Box3 from "../Components/Box3"
import Box4 from "../Components/Box4"
import { motion } from 'framer-motion'

const Page1 = () => {

    const Pages1 = () => {
        return <Box1 />
    }
    const Pages2 = () => {
        return <Box2 />
    }
    const Pages3 = () => {
        return <Box3 />
    }
    const Pages4 = () => {
        return <Box4 />
    }
    const Pages5 = () => {
        return <Box5 />
    }
    const Pages6 = () => {
        return <Box6 />
    }
    const Pages7 = () => {
        return <Box7 />
    }
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const variants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <div id="admin" className="w-full h-[100vh] mt-6 flex items-center justify-center 
        ">


            <div className="w-[90%] h-[95%] flex 
            max-[400px]:flex-col">


                <div  className="w-[22vw] h-[82vh] m-1 bg-white 
                max-[400px]:w-[88vw]
            
                max-[400px]:h-[50vw]
                ">


                    <div className='w-full  mt-8   flex flex-col items-center gap-3 md:gap-8  mb-4
                    max-[400px]:flex-row
                    max-[400px]:justify-center
                    max-[400px]:h-[50vw]
                    overflow-x-auto
                    '>
                        <p  onClick={() => handlePageChange(1)} className={`cursor-pointer ${currentPage === 1 ? ' px-9  font-semibold text-white sm:py-3   py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : ' text-black sm:text-[20px] text-[15px] font-semibold'}`}>Admin Panel</p>
                        <p id="storepanel" onClick={() => handlePageChange(3)} className={`cursor-pointer ${currentPage === 3 ? ' px-9 font-semibold text-white   sm:py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : ' text-black sm:text-[20px] text-[15px] font-semibold'}`}>Store Panel</p>
                        <p id="customerpanel" onClick={() => handlePageChange(2)} className={`cursor-pointer ${currentPage === 2 ? ' px-9 font-semibold text-white   sm:py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : ' text-black sm:text-[20px] text-[15px] font-semibold'}`}>Customer App</p>
                        <p id="website" onClick={() => handlePageChange(4)} className={`cursor-pointer ${currentPage === 4 ? ' px-9 font-semibold text-white   sm:py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : 'text-black sm:text-[20px] text-[15px] font-semibold '}`}> Website</p>
                        <p id="storeapp" onClick={() => handlePageChange(5)} className={`cursor-pointer ${currentPage === 5 ? ' px-9 font-semibold text-white   sm:py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : ' text-black sm:text-[20px] text-[15px] font-semibold'}`}>Store App</p>
                        <p id="deliveryapp" onClick={() => handlePageChange(6)} className={`cursor-pointer ${currentPage === 6 ? ' px-9 font-semibold text-white   sm:py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : ' text-black sm:text-[20px] text-[15px] font-semibold'}`}>Delivery App</p>
                        <p id="application" onClick={() => handlePageChange(7)} className={`cursor-pointer ${currentPage === 7 ? ' px-9 font-semibold text-white   sm:py-3 sm:text-[17px] text-[13px] rounded-r-full rounded-l-none bg-[#07BD68] ' : ' text-black sm:text-[20px] text-[15px] font-semibold'}`}>Application</p>
                    </div>

                </div>

                <div className="w-[66vw] h-[85vh] grid grid-cols-3 overflow-y-scroll gap-4 
                max-[400px]:w-[88vw]">



                    {currentPage === 1 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 1 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages1 /></motion.div>
                        : null}
                    {currentPage === 2 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 2 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages2 /></motion.div>
                        : null}
                    {currentPage === 3 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 3 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages3 /></motion.div>
                        : null}
                    {currentPage === 4 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 4 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages4 /></motion.div>
                        : null}

                    {currentPage === 5 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 5 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages5 /></motion.div>
                        : null}


                    {currentPage === 6 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 6 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages6 /></motion.div>
                        : null}


                    {currentPage === 7 ?
                        <motion.div initial="hidden"
                            animate={currentPage === 7 ? 'visible' : 'hidden'}
                            variants={variants}
                            transition={{ duration: 0.5 }}> <Pages7 /></motion.div>
                        : null}


                </div>
            </div>

        </div>
    )
}

export default Page1