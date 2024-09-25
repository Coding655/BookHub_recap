import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBookApplication } from "../../Utility/localStorage";
import ReadingList from "../ReadingList/ReadingList";

const ListedBooks = () => {
    const books = useLoaderData();
    const [bookReading, setBookReading] = useState([]);
    // const [displayBooks, setDisplayBooks] = useState([]);

    // const handleFilter = filter => {
    //     if(filter === 'rating'){
    //         const Rating = bookReading.filter(book => book.rating === 'rating')
    //         setDisplayBooks(Rating)
    //     }
    // }

    useEffect(()=>{
        const storedIds = getStoredBookApplication();
        if(books.length > 0){
            const BooksReading = [];
            for(const id of storedIds){
                const book = books.find(book => book.id === id);
                BooksReading.push(book)
            }
            setBookReading(BooksReading)
            // setDisplayBooks(BooksReading)
        }
    }, [])
    return (
        <div>
            <div className="flex place-items-center justify-around mt-12 text-white">
                <h2>List of Books: {bookReading.length}</h2>
                <h1>Wishlist Books</h1>
                <details className="dropdown">
                    <summary className="btn m-1">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li><a>Rating</a></li>
                        <li><a>Number of Pages</a></li>
                        <li><a>Publisher Year</a></li>
                    </ul>
                </details>
            </div>
            
            <div className="mt-20 mx-[20%] ">
                {
                    bookReading.map(bookRead => <ReadingList key={bookRead.id} bookRead={bookRead}></ReadingList>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;