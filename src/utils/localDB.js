

const getReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem("readList");
    if(allReadList) return JSON.parse(allReadList);
    return [];
}

const AddReadListToLocalDB = (book) => {
    const allBooks = getReadListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    if(!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}

const getWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem("wishList");
    if(allWishList) return JSON.parse(allWishList);
    return [];
}

const AddWishListToLocalDB = (book) => {
    const allBooks = getWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId);
    if(!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}

export {getReadListFromLocalDB, AddReadListToLocalDB, getWishListFromLocalDB, AddWishListToLocalDB}