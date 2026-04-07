import React from "react";
import { FaRegStar } from 'react-icons/fa';
import { Link } from "react-router";

const Book = ({book}) => {
  return (
    <div>
      <Link to={`/bookDetails/${book.bookId}`} className="border border-zinc-300 rounded-2xl p-6 flex flex-col gap-4 h-full justify-between cursor-pointer">
        <figure>
          <div className="bg-base-300 rounded-2xl py-8">
            <img
              className="object-cover h-41.5 mx-auto -rotate-x-15 rotate-y-30 shadow-2xl rounded-sm transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-101"
              src={book.image}
              alt={book.bookName}
            />
          </div>
        </figure>
        {/* Badge */}
        <div className="flex items-center gap-2">
          {
            book.tags.map((badge, idx) => <div key={idx} className="bg-green-50 text-green-500 px-4 py-1 rounded-lg">
            {badge}
          </div> )
          }
        </div>
        {/* Title */}
        <div className="py-4 border-b-2 border-zinc-300 border-dashed">
          <h2 className="text-2xl font-bold mb-2">{book.bookName}</h2>
          <p className="text-zinc-500 font-medium">By: {book.author}</p>
        </div>
        {/* Ratings */}
        <div className="flex items-center justify-between font-medium">
          <p>{book.category}</p>
          <div className="flex items-center gap-1">
            <span>{book.rating}</span>
            <span>
              <FaRegStar />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
