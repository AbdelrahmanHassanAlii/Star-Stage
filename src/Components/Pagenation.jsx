import React from "react";
import ReactPaginate from 'react-paginate';
import '../CSS/pagination.css'

export default function Pagenation() {

  const handlePageClick = () => {

  }

  const pageCount = 500;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        marginPagesDisplayed={2}
        // pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
        containerClassName="mypagination"
      />
    </>
  );
}
