import React, { useContext, useMemo } from 'react';
import { BookContext } from '../../context/BookContext/BookProvider';
import BookCard from './BookCard';

const WishList = ({sortingType}) => {
    const {wishList} = useContext(BookContext);

    const fileteredWishList = useMemo(()=> {
        if(!sortingType) return wishList;
        if(sortingType === "pages") {
            const sortedDataByPage = [...wishList].sort((a,b) => a.totalPages - b.totalPages);
            return sortedDataByPage;
        } else if(sortingType === "ratings") {
            const sortedDataByRatings = [...wishList].sort((a,b) => a.rating - b.rating);
            return sortedDataByRatings;
        }
        return wishList;
    }, [sortingType, wishList]);

    if(fileteredWishList.length === 0) {
        return <div className='bg-base-300 rounded-2xl py-20'>
            <h1 className='text-4xl font-bold text-center'>There is no Wish List Book Found</h1>
        </div>
    }

    return (
        <div className='flex flex-col gap-4'>
            {
                fileteredWishList.map((book, idx) => <BookCard key={idx} book={book} />)
            }
        </div>
    );
};

export default WishList;