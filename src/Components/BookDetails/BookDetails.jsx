import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveStoredBookApplication } from "../../Utility/localStorage";

const BookDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job)

    const handleWishList = () =>{

        saveStoredBookApplication(idInt)

        toast('This book attached successfully')
    }

    return (
        <div>
            <h2 className="text-center mb-12">Book Details Of: {id}</h2>
            <div className="flex place-items-center p-8" >
                <div className="w-[2100px] shadow-xl shadow-cyan-500/50 ">
                   <img className="" src={job.logo} alt="" />
                </div>
                <div className="mx-[100px]">
                    <h1 className="text-2xl text-white font-medium mb-4">{job.book_title}</h1>
                    <p className="mb-4">By: {job.writer_name}</p>
                    <hr />
                    <p className="p-2 text-white">Fiction</p>
                    <hr />
                    <p className="mt-4 font-medium mb-4">Review: {job.review}</p>
                    <span className=" text-green-500 ">Tags <span className="ml-4">{job.hash_tags}</span></span>
                    <hr className="mt-4" />
                        <div className="mt-6 mx-4 mb-4">
                        <ul>
                            <li>Number Of pages: {job.number_of_page}</li>
                            <li>Publisher: {job.publisher}</li>
                            <li>Year Of Publishing: {job.year_of_publishing}</li>
                            <li>Rating: {job.rating}</li>
                        </ul>
                        </div>
                    <div>
                        <button className="btn mr-4 text-white font-bold">Read</button>

                        <Link to={'/listed'}>
                            <button onClick={handleWishList} className="btn font-bold bg-gradient-to-r     from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500     text-white">Wishlist</button>
                        </Link>
                    </div>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default BookDetails;