import React, {useState} from 'react'
import Pagination from 'react-js-pagination'

import './Paging.css'

export const Paging = ({ page, perPage, totalPages, setCurrentPage}) => {
    // const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={perPage}
            totalItemsCount={450}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
            onChange={handlePageChange}/>
    );
};
