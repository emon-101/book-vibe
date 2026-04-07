import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext/BookProvider';
import BookCard from './BookCard';

const WishList = () => {
    const {wishList} = useContext(BookContext);

    if(wishList.length === 0) {
        return <div className='bg-base-300 rounded-2xl py-20'>
            <h1 className='text-4xl font-bold text-center'>There is no Wish List Book Found</h1>
        </div>
    }

    return (
        <div className='flex flex-col gap-4'>
            {
                wishList.map((book, idx) => <BookCard key={idx} book={book} />)
            }
        </div>
    );
};

export default WishList;