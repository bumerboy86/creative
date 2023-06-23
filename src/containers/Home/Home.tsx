
const Home = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center pt-[5rem] pl-[2rem] sm:pl-[4rem] pb-[6rem]">
            <h1 className="text-[#98ec65] font-bold text-[4rem] sm:text-[5rem]">
                Creative
            </h1>
            <h3 className="text-white text-[2rem] font-bold">Design Studio</h3>
            <a 
                className="w-[10rem] py-[6px] bg-[#98ec65] text-center rounded-3xl hover:bg-[#81e047] mt-[1rem]"
                href="https://github.com/bumerboy86"
                target="_blank"
                rel="noopener noreferrer"
            >
            Explore Now
            </a>
        </div>
    )
}

export default Home;