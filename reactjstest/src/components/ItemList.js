import React from 'react';
import SearchBar from './SearchBar';
import Sorting from './Sorting';
import ExportCSVButton from './ExportCSVButton';
import Pagination from './Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../style.css';

const ItemList = ({ items, onDelete, searchTerm, onSearch, onSort, currentPage, totalPages, handlePageChange }) => {
  return (
    <div className='mainWrappTbl'>
      <div className='flex justify-content-between'>
        <div>
          <h2>Item List</h2>
        </div>
        <div className='flex'>
          <SearchBar searchTerm={searchTerm} onSearch={onSearch} />
          <Sorting onSort={onSort} />
          <ExportCSVButton items={items} />
        </div>
      </div>
      <div className='tblWrp'>
        <table className='w-100'>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td className='text-end'>{item.price}</td>
                <td className='text-center'>
                    <button className='delete' onClick={() => onDelete(item.id)}>
                    <span className='icnRhtMrgn'>
                        <FontAwesomeIcon icon={faTrash} />
                    </span> Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='mrgnTop'>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </div>
    </div>
  );
};

export default ItemList;
