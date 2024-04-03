
const Contact = () => {
  return (
    <div className='h-full w-full flex justify-center'>
        <div className='flex justify-between md:px-8 px-4 md:py-3 py-5 md:w-[80vw] md:h-[18vh] w-[90vw] h-fit bg-green-700 font-bold rounded-xl md:text-[4vh] text-[1.5vh] text-white items-center'>
            <h1>Need help?</h1>
            <h1>Connect with us Anytime!</h1>
            <button className=' md:block px-2 md:p-2 md:px-6 bg-gradient-to-br from-green-400 to-green-600 rounded-lg hover:bg-gradient-to-br hover:from-green-600 hover:to-green-400  font-semibold md:text-2xl text-[1.8vh] border-teal-300 border-2'>Let's Connect</button>
        </div>
    </div>
  )
}

export default Contact