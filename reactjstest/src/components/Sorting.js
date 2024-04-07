import React from 'react';

const Sorting = ({ onSort }) => {
  return (
    <div>
      <label className='icnRhtMrgn '>Sort By:</label>
      <select className='icnRhtMrgn searchInput sortBox' onChange={(e) => onSort(e.target.value)}>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
};

export default Sorting;
