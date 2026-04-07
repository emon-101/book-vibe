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

export {getReadListFromLocalDB, AddReadListToLocalDB}