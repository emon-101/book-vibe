import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AddReadListToLocalDB, getReadListFromLocalDB } from "../../utils/localDB";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const [wishList, setWishList] = useState([]);

  useEffect(()=> {
    const readList = getReadListFromLocalDB();
    console.log(readList);
    setStoredBooks(readList);
  }, [])

  const handleMarkAsRead = (currentBook) => {
    AddReadListToLocalDB(currentBook);
    const isExistInWishList = wishList.find(book => book.bookId === currentBook.bookId);
    if(isExistInWishList) {
        toast.error(`${currentBook.bookName} is exist in wish list`);
        return;
    }
    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId
    );
    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is added to the list`);
    }
  };

  const handleWishList = (currentBook) => {

    const isExistInReadList = storedBooks.find(book => book.bookId === currentBook.bookId);
    if(isExistInReadList) {
        toast.error(`${currentBook.bookName} is exist in Readlist`);
        return;
    }

    const isExist = wishList.find(book => book.bookId === currentBook.bookId);
    if(isExist) {
        toast.error(`${currentBook.bookName} is already in the wishlist`);
    } else {
        setWishList([...wishList, currentBook]);
        toast.success(`${currentBook.bookName} is added to the wishlist`);
    }
  }

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList
  };
  return <BookContext.Provider value={data}>{children}</BookContext.Provider>;
};

export default BookProvider;
