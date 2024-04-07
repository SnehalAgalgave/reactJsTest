import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons'; // Corrected import
import '../style.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className='flex justify-content-end '>
      <button className='csvBtn' onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <span className='icnLftMrgn'>
          <FontAwesomeIcon icon={faAngleDoubleLeft} />
        </span>
        Previous
      </button>
      <span>{currentPage} of {totalPages}</span>
      <button className='csvBtn' onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next <span className='icnLftMrgn'>
        <FontAwesomeIcon icon={faAngleDoubleRight} />
          </span>
      </button>
    </div>
  );
};

export default Pagination;
