import { CiStar } from "react-icons/ci";
import { MdLibraryAddCheck } from "react-icons/md";
import { Link } from "react-router-dom";

const Book = ({book}) => {

    const {
        logo, book_title, 
        writer_name, age_or_time, 
        identity, rating, id,
         number_of_page, publisher
    } = book;

    return (
        <div className="shadow-lg shadow-cyan-500/50">
          <div className=" bg-base-100 shadow-2xl text-white rounded-xl ">
            <figure className="grid place-items-center w-[40%] mx-auto shadow-lg shadow-cyan-500/50">
                <img
                src={logo}
                alt="Books"
                className="" />
            </figure>
            <div className="ml-12 mt-16 ">
                <div className="flex  text-green-400 mt-4">
                    <p className="mr-16">{age_or_time}</p>
                    <p>{identity}</p>
                </div>
           <div className="mt-6">
                </div>
                <h2 className="card-title font-bold ">{book_title}</h2>
                
                <div className="mt-4">
                    <p>By: {writer_name}</p>
                </div>
                <div className="flex justify-between place-items-center mt-4">

                        <div className="flex place-items-center">
                           <Link to={`/book/${id}`}>
                           <button className=" btn px-4 rounded text-white">Book Details </button>
                           </Link>
                           <span><MdLibraryAddCheck className="text-green-500 text-3xl"></MdLibraryAddCheck></span>

                        </div>

                    <div className="flex justify-end place-items-center p-4 ">

                        <p className="mr-2">Rating: {rating}</p>
                        <CiStar className="text-2xl"></CiStar>

                    </div>

                </div>
                
            </div>
          </div>
        </div>
    );
};

export default Book;