
const Page2 = () => {
  return (
    <div className='h-[50vh] w-screen '>
        <div className='h-full w-full flex justify-center items-center'>
            <div className='md:h-[95%] md:w-4/5 w-[95vw] h-[23vh] bg-cover bg-[url("https://6ammart.app/wp-content/uploads/2023/05/Group-1597883874-scaled.webp")] rounded-3xl flex md:flex-row flex-col justify-around items-center p-3' >
                <div className='flex flex-col md:gap-4 md:text-[3vw] text-[2vh] text-center md:text-start font-semibold text-white'>
                    <h1>Still Have <span className="text-[#0AD577]">Questions?</span> </h1>
                    <p className="text-[18px] font-light">Book a meeting with our eCommerce solution specialists and discuss your queries.

</p>
                </div>
                <button className='md:px-16 md:p-6 p-2 px-5 md:rounded-xl rounded-md md:text-base text-[1.6vh] font-semibold bg-white ease-out duration-300 transition-all
                 text-green-600  hover:bg-gradient-to-l from-[#039D55] to-[#00CB6C]
                   hover:text-white'
                   >
                    <a href="#">Book Now</a>
                    
                    </button>
            </div>
        </div>
    </div>
  )
}
export default Page2
