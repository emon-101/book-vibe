import React, { use } from 'react';
import Book from './Book';

const allBooksPromise = fetch('/booksData.json').then(res => res.json());
const AllBooks = () => {
    const allBooks = use(allBooksPromise);
    return (
        <div className='my-12 lg:w-4/5 mx-auto px-4'>
            <h2 className='text-3xl font-bold text-zinc-600 mb-8 text-center'>Books</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allBooks.map(book => <Book key={book.bookId} book={book} />)
                }
            </div>
        </div>
    );
};

export default AllBooks;