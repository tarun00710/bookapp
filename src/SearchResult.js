import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { bookContext } from "./context/BookCon";

const SearchResult = () => {
  const {searchResult : books} = useContext(bookContext)
  console.log(books)
  return (
    <div>
      <div className="book_section">
     
        {books.map((book) => {
          return (
            <Link style={{textDecoration:"none"}} to={`/book/${book.id}`}>
            <div class="card">
              <img
                src={book?.volumeInfo?.imageLinks?.smallThumbnail}
                alt="Avatar"
              />
              <div className="container">
                <p>
                  {book?.volumeInfo?.title}
                </p>
                <span>
                  {book?.volumeInfo?.authors}
                </span>
              </div>
            </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResult;
