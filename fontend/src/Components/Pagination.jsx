import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Products from "./Products";
const Pagination = ({ itemsPerPage, carts }) => {
  const items = carts;

  function Items({ currentItems }) {
    return (
      <div className=" flex flex-wrap justify-between">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <Products pInfo={item} pimage={item.image} isNew={true} />
            </div>
          ))}
      </div>
    );
  }
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <div className="flex items-center justify-between">
        <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          containerClassName="flex items-center gap-2 ml-[-10px] mt-10"
          pageClassName="px-[14px] py-[6px] border border-secondary  "
          activeClassName="bg-primary text-white"
        />
        <p>
          Products from {itemOffset + 1} to {endOffset} of {carts.length}
        </p>
      </div>
    </>
  );
};

export default Pagination;
