import React, {useState} from 'react'
import Pagination from 'react-js-pagination'

import './Paging.css'



const Paging = ({ listsPerPage, totalLists, paginate, page}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalLists / listsPerPage); i++){
        pageNumbers.push(i);
    }
    const handlePageChange = (page) => {
        paginate(page);
    };
    return (
        <Pagination
            activePage={page}
            itemsCountPerPage={listsPerPage}
            totalItemsCount={totalLists}
            pageRangeDisplayed={10}
            prevPageText={"‹"}
            nextPageText={"›"}
                onChange={handlePageChange} />
            
    );
};


export default Paging;