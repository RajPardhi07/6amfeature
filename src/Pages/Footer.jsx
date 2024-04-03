
import Logo from '../assets/Color horizontalPNG.png'
const Footer = () => {
    return (
        <div className='h-screen w-full bg-[140%_auto] bg-no-repeat bg-[url("https://6ammart.app/wp-content/uploads/2023/05/Frame-1597883554-2.webp")]'>
            <div className='h-full md:w-full flex items-center  justify-around'>
                <div className="flexcontainer flex md:flex-nowrap flex-wrap md:w-5/6 w-[80vw] md:justify-between justify-around gap-4">
                    <div className='section1 flex flex-col md:w-[18%] w-[80vw] gap-3 text-center md:text-start items-center md:items-start'>
                        <img src={Logo} alt="" />
                        <h1>Boostup Digital is a Multi Vendor & Multi Purpose eCommerce Software with Apps allowing you to operate and manage multiple eCommerce businesses simultaneously.</h1>
                        <div className='flex items-center gap-3 text-4xl mt-3'>
                            {/* <i className="ri-facebook-circle-fill text-green-700"></i> */}
                           <h4 className='text-lg'>Connect us with</h4> 
                           <a href="#">
                           <i className="ri-linkedin-box-fill text-[#35A7C2]"></i>
                           </a>
                           
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-9" viewBox="0 0 26 25" fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M13 24C19.0751 24 24 19.0751 24 13C24 6.92487 19.0751 2 13 2C6.92487 2 2 6.92487 2 13C2 19.0751 6.92487 24 13 24ZM18.0885 7.91241L13.8155 12.7727L18.4626 19.3907H15.0447L11.9152 14.9341L7.99701 19.3907H6.98438L11.4656 14.2939L6.98438 7.91241H10.4023L13.3657 12.1325L17.076 7.91241H18.0885ZM11.9745 13.7147L12.4286 14.3502L15.5211 18.6787H17.0764L13.2867 13.3744L12.8327 12.739L9.91721 8.65831H8.36187L11.9745 13.7147Z" fill="green" /></svg> */}
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className='h-9' viewBox="0 0 30 30" fill="none"><path d="M17.5872 15.2826L14.6628 13.918C14.4076 13.7995 14.1979 13.9323 14.1979 14.2148V16.7852C14.1979 17.0677 14.4076 17.2005 14.6628 17.082L17.5859 15.7174C17.8424 15.5977 17.8424 15.4023 17.5872 15.2826ZM15.5 3C8.59635 3 3 8.59635 3 15.5C3 22.4036 8.59635 28 15.5 28C22.4036 28 28 22.4036 28 15.5C28 8.59635 22.4036 3 15.5 3ZM15.5 20.5781C9.10156 20.5781 8.98958 20.0013 8.98958 15.5C8.98958 10.9987 9.10156 10.4219 15.5 10.4219C21.8984 10.4219 22.0104 10.9987 22.0104 15.5C22.0104 20.0013 21.8984 20.5781 15.5 20.5781Z" fill="green"></path></svg> */}
                        </div>
                    </div>
                    <div className='section2 flex flex-col w-[35vw] md:w-auto gap-5 md:text-lg text-sm'>
                        <h1 className='font-semibold md:text-xl text-lg'>Company</h1>
                        <h1>About Us</h1>
                        <h1>Contact Us</h1>
                        <h1>
                            <a href="#">Privacy policy</a>
                        </h1>
                        <h1>Service & Support Policy</h1>
                        <h1>Cookies Policy</h1>
                    </div>
                    <div className='section3 flex flex-col  gap-5 md:text-lg text-sm'>
                        <h1 className='font-semibold md:text-xl text-lg'>Quick Links</h1>
                        <h1>Blog</h1>
                        <h1>Demo</h1>
                        <h1>Documentation</h1>
                        <h1>Community</h1>
                        <h1>Support</h1>
                        <h1>FAQs</h1>
                    </div>
                    <div className='section4 flex flex-col md:w-1/4 gap-5 md:text-lg text-sm'>
                        <h1 className='font-semibold md:text-2xl text-lg'>Contact Us</h1>
                        <div className='flex gap-3'>
                            <i className="ri-whatsapp-line text-2xl"></i>
                            <h1>+91123456789</h1>
                        </div>
                        <div className='flex gap-3'>
                            <i className="ri-mail-line text-2xl"></i>
                            <h1>
                                <a href="#">abcd@gmail.com</a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
