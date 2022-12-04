const Hero = ({ onClick }) => {
    return (
      <div className="relative z-10 flex flex-col md:flex-row mt-10 items-center  max-w-6xl justify-evenly mx-auto">
        <div className="md:w-1/3 mb-20 md:mb-0 mx-10">
          <h1 className=" text-white font-bold text-5xl mb-10">
            Integrate{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              payments
            </span>{" "}
            in less than 10 minutes.
          </h1>
          <p className="text-sm text-gray-300 font-light tracking-wide w-[300px] mb-10">
            Learn how to integrate a Payment Gateway with your Next.js and React
            application.
          </p>
          <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md mb-4">
            <button
              onClick={onClick}
              className="bg-gradient-to-r from-[#2E3137] to-[#1D2328] rounded-md w-full py-4 shadow-xl drop-shadow-2xl text-gray-300 font-bold"
            >
              Purchase Now!
            </button>
          </div>
          <div className="bg-gradient-to-r from-[#3e4044] to-[#1D2328] p-[1px] rounded-md">
            <button className="bg-gradient-to-r from-[#1D2328] to-[#1D2328] rounded-md w-full py-4 shadow-sm drop-shadow-sm text-gray-400 font-light">
              Read Blog
            </button>
          </div>
        </div>
        {/* <div className="w-2/3 bg-white flex-shrink-0  relative"> */}
        <img
          className="w-full md:w-[36rem] h-full"
          alt="stripe payment from undraw"
          src="/payments.svg"
        />
        {/* </div> */}
      </div>
    );
  };