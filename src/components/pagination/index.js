import React, {useState} from 'react'
import ReactPaginate from "react-paginate";
import './style.scss'


const Index = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageChange = (selected) => {
      setCurrentPage(selected.selected);
    };


    return (
        <div>
            <ReactPaginate
                previousLabel={<span><i className='fas fa-chevron-left' /></span>}
                nextLabel={<span><i className='fas fa-chevron-right' /></span>}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={10} // Total number of pages
                marginPagesDisplayed={1}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
                initialPage={currentPage}
            />
        </div>
    )
}

export default Index