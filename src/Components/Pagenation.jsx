// import React from "react";
// import ReactPaginate from 'react-paginate';
// import '../CSS/pagination.css'

// export default function Pagenation({showNext, showPrevious}) {

//   const handlePageClick = () => {

//   }

//   const pageCount = 500;
//   return (
//     <>
//       <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         marginPagesDisplayed={2}
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={2}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         containerClassName="mypagination"
//       />
//     </>
//   );
// }
import React from "react";
import ReactPaginate from "react-paginate";
import "../CSS/pagination.css";

export default function Pagination({ pageNumber, showNext, showPrevious }) {
  const handlePageClick = (selectedItem) => {
    // Check if the user clicked on "previous" or "next" button
    if (selectedItem.selected === 0) {
      // Call the showPrevious function
      showPrevious();
    } else {
      // Call the showNext function
      showNext();
    }
  };

  const pageCount = pageNumber || 250;
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        containerClassName="mypagination"
      />
    </>
  );
}
