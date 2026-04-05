import bannerImg from "../../assets/heroImg.png"

const Banner = () => {
    return (
        <div className="px-4">
            <div className="flex flex-col lg:flex-row justify-between items-center bg-base-200 lg:w-4/5 mx-auto rounded-2xl py-20 lg:px-30 mt-12 gap-10">
                {/* content */}
                <div className="">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className='text-white rounded-lg font-semibold bg-green-500 px-4 py-1.5 mt-8 btn'>View The List</button>
                </div>
                {/* Image */}
                <div className="">
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;