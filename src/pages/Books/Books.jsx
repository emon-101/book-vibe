import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ReadList from "../../components/listedBooks/ReadList";
import WishList from "../../components/listedBooks/WishList";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Books = () => {
  const [sortingType, setSortingType] = useState("");
  console.log(sortingType);
  return (
    <div className="lg:w-4/5 mx-auto my-20 px-4">
      <div className="flex justify-center items-center my-10">
        <div className="dropdown dropdown-start">
          <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-white">
            Sort By <IoIosArrowDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={()=> setSortingType("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={()=> setSortingType("ratings")}>Ratings</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <ReadList sortingType={sortingType} />
        </TabPanel>
        <TabPanel>
          <WishList sortingType={sortingType} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Books;
