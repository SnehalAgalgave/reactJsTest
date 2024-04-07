import React, { useState } from 'react';

const NewItemForm = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ name, price: parseFloat(price) });
    setName('');
    setPrice('');
  };
  return (
    <div className='mainWrappTbl'>
      <h2 className='mrgnBtm'>Add New Item</h2>
      <div className='box-shadow'>
        <form onSubmit={handleSubmit}>
          <div className='flex'>
            <div className='icnRhtMrgn'>
              <label className='icnRhtMrgn'>Name:</label>
              <input className='searchInput' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className='icnRhtMrgn'>
              <label className='icnRhtMrgn'>Price:</label>
              <input className='searchInput' type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
            <div>
              <button type="submit" className='csvBtn'>Add Item</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    
  );
};

export default NewItemForm;
