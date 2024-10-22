import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Row, Col } from "reactstrap";
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const PaginatedItems = ({ itemsPerPage }) => {
  // eslint-disable-next-line
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Row className="align-items-center" noGutters>
        <Col md={6}>
          <div className="tableCount">Showing 3 entries out of 20 entries</div>
        </Col>
        <Col md={6}>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
            className="pagination justify-content-end"
          />
        </Col>
      </Row>
    </>
  );
};

export default PaginatedItems;
