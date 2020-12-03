import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import Button from 'react-bootstrap/Button'
import {getSavedBooks} from "../utils/API";


function SearchForm() {
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [savedBooks, setSavedBooks] = useState([]);
    let tempBook = '';

    useEffect(() => {
        const fetchBooks = async () => {
            const books = await getSavedBooks()
            setSavedBooks(books)
        }
    }, [])


    function createBook(bookInfo) {
        return {
            _id: bookInfo.id,
            title: bookInfo.volumeInfo.title,
            authors: bookInfo.volumeInfo.authors,
            description: bookInfo.volumeInfo.description,
            image: bookInfo.volumeInfo?.imageLinks?.thumbnail,
            link: bookInfo.volumeInfo.previewLink
        }
    }

    function handleChange(event) {
        const book = event.target.value;
        setBook(book);
        console.log(book);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setResult([]);
        API.searchForBooks(book)
            .then(data => {
                let searchResult = data.data.items;
                console.log(searchResult);

                searchResult.map(bookResult => (
                    tempBook = createBook(bookResult),
                    setResult(result => [...result, tempBook])
                ))
                console.log(result);
            })
    }

    // function handleSave(book) {
    //     book.preventDefault();

    //     API.searchForBooks(book)
    //         .then(data => {
    //             let searchResult = data.data.items;
    //             searchResult.map(book => (
    //                 tempBook = createBook(book),
    //                 setResult(result => [...result, tempBook])
    //             ))
    //             console.log(result);
    //         })
    // }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search For Books" autoComplete="off" />
                </div>
                <Button variant="outline" type="submit" className="btn btn-danger">Search</Button>
            </form>
        
            <div>
                {result.map(book => (
                    <div className="card mb-3" key={book._id}>
                        <div className="row">
                            <div className="col-md-2">
                                <img alt={book.title} className="img-fluid" src={book.image} />
                            </div>
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className="card-title">{book.title} by {book.authors}</h5>
                                    <p className="card-text">{book.description}</p>
                                    <div>
                                        <a href={book.link} className="btn badge-pill btn-outline-dark mt-3" target="_blank" >View</a>
                                        {/* <button onChange={handleSave(book)} className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                            {savedBooks.map(book => book._id).includes(book._id) ? "Unsave" : "Save"}
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                    
        </div>
    );
}

export default SearchForm;