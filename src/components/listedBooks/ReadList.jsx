import React, { useContext, useMemo } from 'react';
import { BookContext } from '../../context/BookContext/BookProvider';
import BookCard from './BookCard';

const ReadList = ({sortingType}) => {
    const {storedBooks} = useContext(BookContext);
    const filteredReadList = useMemo(() => {
        if (!sortingType) return storedBooks;
        if (sortingType === "pages") {
            const sortedDataByPage = [...storedBooks].sort((a, b) => a.totalPages - b.totalPages);
            return sortedDataByPage;
        } else if (sortingType === "ratings") {
            const sortedDataByRatings = [...storedBooks].sort((a, b) => a.rating - b.rating);
            return sortedDataByRatings;
        }
        return storedBooks;
    }, [sortingType, storedBooks]);

    if(filteredReadList.length === 0) {
        return <div className='bg-base-300 rounded-2xl py-20'>
            <h1 className='text-4xl font-bold text-center'>There is no Read List Book Found</h1>
        </div>
    }

    return (
        <div className='flex flex-col gap-4'>
            {
                filteredReadList.map((book, idx) => <BookCard key={idx} book={book} />)
            }
        </div>
    );
};

export default ReadList;