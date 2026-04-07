import { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookContext/BookProvider";

// const allBooksPromise = fetch('/booksData.json').then(res => res.json());

const BookDetails = () => {
  const { bookId } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId == bookId);

  const { handleMarkAsRead, handleWishList } = useContext(BookContext);


  return (
    <div className="lg:w-4/5 mx-auto px-4 my-20">
      <div className="bg-base-100 grid lg:grid-cols-2 gap-20">
        <figure className="bg-base-300 p-8 rounded-xl flex items-center justify-center">
          <img
            src={expectedBook.image}
            alt={expectedBook.bookName}
            className="max-h-141 rounded-xl"
          />
        </figure>
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-4xl">{expectedBook.bookName}</h2>
          <p className="text-xl font-medium text-[#131313]/80">
            By: {expectedBook.author}
          </p>
          <div className="border-t border-b border-zinc-300 py-4">
            <p className="text-xl font-medium text-[#131313]/80">
              {expectedBook.category}
            </p>
          </div>
          <div className="">
            <p>
              <span className="font-bold text-[#131313]">Review: </span>{" "}
              <span className="text-[#131313]/70">{expectedBook.review}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 py-6 border-b border-zinc-300">
            <p className="text-[#131313] font-bold mr-10">Tag</p>
            {expectedBook.tags.map((badge, idx) => (
              <div
                key={idx}
                className="bg-green-50 text-green-500 px-4 py-1 rounded-full"
              >
                # {badge}
              </div>
            ))}
          </div>

          <div className="text-[#131313]/70 w-1/2 flex justify-between">
            <div className="flex flex-col">
                <span>Number of Pages: </span>
                <span>Publisher: </span>
                <span>Year of Publishing: </span>
                <span>Rating: </span>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold text-[#131313]">{expectedBook.totalPages}</span>
                <span className="font-semibold text-[#131313]">{expectedBook.publisher}</span>
                <span className="font-semibold text-[#131313]">{expectedBook.yearOfPublishing}</span>
                <span className="font-semibold text-[#131313]">{expectedBook.rating}</span>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="btn btn-outline border border-zinc-300 font-semibold" onClick={()=> handleMarkAsRead(expectedBook)}>Mark asRead</button>
            <button onClick={()=> handleWishList(expectedBook)} className="btn btn-info text-white font-semibold">Add to Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
