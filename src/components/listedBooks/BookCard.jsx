import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GrDocumentText } from "react-icons/gr";
import { IoMdContacts } from "react-icons/io";
import { Link } from "react-router";

const BookCard = ({ book }) => {
  return (
    <div>
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-8 p-6 rounded-2xl border border-zinc-300">
        {/* Image */}
        <div className="lg:w-1/4">
          <figure className="bg-base-300 rounded-2xl py-8">
            <img
              className="object-cover h-43 mx-auto -rotate-x-15 rotate-y-30 shadow-2xl rounded-sm transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-101"
              src={book.image}
              alt={book.bookName}
            />
          </figure>
        </div>
        {/* Content */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-bold">{book.bookName}</h3>
          <p className="text-zinc-500">By: {book.author}</p>
          <div className="flex items-center gap-2">
            <p className="text-[#131313] font-bold">Tag</p>
            {book.tags.map((badge, idx) => (
              <div
                key={idx}
                className="bg-green-50 text-green-500 px-4 py-1 rounded-full"
              >
                # {badge}
              </div>
            ))}
            <span className="flex gap-2 items-center text-zinc-600">
              <FiMapPin /> Year of Publishing: {book.yearOfPublishing}
            </span>
          </div>
          <div className="flex gap-3 items-center pb-4 border-b-2 border-zinc-300">
            <span className="flex gap-2 items-center text-zinc-600">
              <IoMdContacts /> Publisher: {book.publisher}
            </span>
            <span className="flex gap-2 items-center text-zinc-600"><GrDocumentText /> Pages: {book.totalPages}</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="px-4 py-1 rounded-full bg-blue-50 text-blue-500">
                Category: {book.category}
            </div>
            <div className="px-4 py-1 rounded-full bg-orange-50 text-orange-400">
                Category: {book.category}
            </div>
            <Link to={`/bookDetails/${book.bookId}`} className="px-4 py-1 rounded-full bg-green-500 text-white cursor-pointer hover:grayscale">
                View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
