import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext/BookProvider";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReadList from "../../components/listedBooks/ReadList";
import WishList from "../../components/listedBooks/WishList";

const Books = () => {
  const { storedBooks, wishList } = useContext(BookContext);
  console.log(storedBooks);
  console.log(wishList);
  return (
    <div className="lg:w-4/5 mx-auto my-20 px-4">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList />
        </TabPanel>
        <TabPanel>
          <WishList />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
