import React from "react";
import ReactPaginate from "react-paginate";
import "./style.css";

export default function Pagination({
  itemsPerPage,
  commandsData,
  setItemOffsetValue,
}) {
  const pageCount = Math.ceil(commandsData.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % commandsData.length;
    setItemOffsetValue(newOffset);
  };


  return (
    <>
      <div className="pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="pagination-container"
          pageLinkClassName="page-link"
          previousLinkClassName="previous-link"
          nextLinkClassName="next-link"
          breakClassName="dot-link"
          activeLinkClassName="active-link"
        />
      </div>
    </>
  );
}
