import { useEffect, useState } from "react";
import { CiSquareChevRight } from "react-icons/ci";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [booksLength, setBooksLength] = useState(6);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div>
            <h2 className="text-6xl text-white font-medium text-center">Books</h2>
            
            <h1 className="text-2xl text-green-400 text-center underline">Available: {books.length}</h1>
            <br />
            <br />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 ">
                {
                    books.slice(0, booksLength).map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>

            <div className={booksLength === books.length ? "hidden" : ""}>
                <button onClick={() => setBooksLength(books.length)} className="btn px-4  bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white mx-[50%] my-[5%]">    
                    <CiSquareChevRight
                    className="text-3xl font-bold">
                    </CiSquareChevRight>
                </button>
            </div>
        </div>
    );
};

export default Books;