const Banner = () => {
    return (
        <div className="flex place-items-center justify-between ml-[110px] ">
            <div>
                <h1 className="font-bold text-white text-6xl ">Books to freshen up </h1> <br />
                 <span className="text-orange-300 text-6xl font-medium">your bookshelf</span>
                 <br />
                 <button className="btn mt-12 bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 font-bold text-white">View The List</button>
            </div>
            <div>
                <figure>
                    <img src="https://i.ibb.co.com/gz10RpZ/2148779756-removebg-preview.png" alt="" />
                </figure>
            </div>
        </div>
    );
};

export default Banner;