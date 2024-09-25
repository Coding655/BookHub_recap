import { Link } from "react-router-dom";

const ReadingList = ({bookRead}) => {
    const {
        logo, book_title, writer_name, 
        hash_tags, year_of_publishing, 
        publisher, number_of_page, rating
    } = bookRead;

    return (
        <div className="p-4">
            <div className="flex place-items-center">
                <div className="w-[2100px] shadow-xl shadow-cyan-500/50 mr-12 ">
                    <img  src={logo} alt="failed to load" />
                </div>
                <div className="text-white border p-4">
                    <h2 className="font-bold text-2xl mb-2">{book_title}</h2>
                    <p className="text-white mb-2">By: {writer_name}</p>
                    <div className=" flex place-items-center ">
                      <p className="flex">Tags <span className="text-green-400 ml-4">{hash_tags}</span></p>
                      <p className="ml-4 ">Year:
                        <span className="text-green-400">{year_of_publishing}</span>
                      </p>
                    </div>
                    <div className="flex place-items-center">
                        <p className="mr-4">Publisher: <span className="text-green-400">{publisher}</span></p>
                        <p>pages:
                            <span className="text-green-400">{number_of_page}</span>
                        </p>
                    </div>
                    <div className="flex mt-6 place-items-center ">
                       <p className="mr-6">Category:
                        <span className="text-green-400">CLASSIC</span></p>
                       <p>Rating:
                        <span className="text-green-400">{rating}</span>
                       </p>
                       <Link to={'/'}>
                           <button className="ml-6 btn text-white">Details</button>
                       </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReadingList;