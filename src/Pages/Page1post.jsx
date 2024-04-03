import layer from '../assets/Layer-2-1.png'
const Page1post = () => {
  return (
    <div className="w-full h-[105vh] flex items-center justify-center 
    max-[400px]:h-[130vh]
    max-[800px]:h-[150vh]">
      <div className="w-[85%] h-[95%] 
      max-[400px]:w-[90%]
      max-[800px]:w-[90%]">

        <div className="w-full flex justify-between h-[75vh] 
        max-[400px]:flex-col
        max-[800px]:flex-col
        ">
          <div className="w-[41vw] rounded-xl h-[69vh] bg-[#CBF3E0]
          max-[400px]:w-[90vw]
          max-[400px]:h-[50vh]
          max-[800px]:w-[90vw]
          max-[800px]:h-[50vh]">

            <h1 className="text-center text-4xl font-bold mt-12
            max-[400px]:text-2xl
            max-[400px]:mt-8
            "><span className="text-[#08A75C]">Zone-wise</span> Business Setup</h1>

            <p className="text-center mt-10 text-xl text-[#6C768C]
            max-[400px]:text-sm
            max-[400px]:mt-5">With Boostup Digital, you can choose in which area your business will be effective by simply adding some points on the map. It is unbelievably simple yet a very powerful tool in your hand.</p>


<div className="w-[35vw] h-[45vh] pt-7 rounded-xl mt-[20vh] ml-[6vh] overflow-hidden bg-green-500
max-[400px]:mt-[2vh]
max-[400px]:ml-[2vh]
max-[400px]:w-[83vw]
max-[400px]:h-[28vh]
max-[800px]:mt-[2vh]
max-[800px]:ml-[2vh]
max-[800px]:w-[83vw]
max-[800px]:h-[40vh]">
<video
              className="w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            >
              <source src="https://6ammart.app/wp-content/uploads/2023/07/Map-Gif-comp.mp4" type="video/mp4" />
              {/* You can add other video formats like WebM and Ogg if needed */}
            </video> 

</div>
            


          </div>

          <div className="w-[41vw] h-[69vh] rounded-xl mt-[15vh] bg-[#E2FFFF]
          max-[400px]:w-[90vw]
          max-[400px]:h-[60vh]
          max-[800px]:w-[90vw]
          max-[800px]:h-[60vh]
          max-[800px]:mt-[30vh]
          ">
            <img className="h-[40vh] -mt-[10vh] ml-[8vh]
            max-[400px]:h-[25vh]
            max-[400px]:mt-0
            max-[400px]:ml-0
            max-[800px]:h-[30vh]
            max-[800px]:mt-[3vh]
            max-[800px]:ml-[24vh]" src={layer} alt="" />

            <h1 className="text-center text-4xl font-bold mt-12
            max-[400px]:text-2xl
            max-[400px]:mt-8"><span className="text-[#08A75C]">Zone-wise</span> Business Setup</h1>

<p className="text-center mt-10 text-xl text-[#6C768C]
max-[400px]:text-sm
max-[400px]:mt-5">With 6amMart, you can choose in which area your business will be effective by simply adding some points on the map. It is unbelievably simple yet a very powerful tool in your hand.</p>



          </div>

        </div>


      </div>


    </div>
  )
}

export default Page1post