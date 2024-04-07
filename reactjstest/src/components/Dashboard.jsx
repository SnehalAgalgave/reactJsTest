import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import NewItemForm from './NewItemForm';
import '../style.css'

const Dashboard = () => {
    const [items, setItems] = useState(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
      });
      const [searchTerm, setSearchTerm] = useState('');
      const [sortBy, setSortBy] = useState('name');
      const [currentPage, setCurrentPage] = useState(1);
      const itemsPerPage = 5;
    
      // Function to add new item
      const handleAddItem = (newItem) => {
        setItems([...items, { ...newItem, id: items.length + 1 }]);
      };
    
      // Function to delete an item
      const handleDeleteItem = (itemId) => {
        setItems(items.filter(item => item.id !== itemId));
      };
    
      // Function to handle search
      const handleSearch = (term) => {
        setSearchTerm(term);
      };
    
      // Function to handle sorting
      const handleSort = (sortBy) => {
        setSortBy(sortBy);
      };
    
      // Function to handle pagination
      const handlePageChange = (page) => {
        setCurrentPage(page);
      };
    
      // Get filtered and sorted items
      const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      const sortedItems = filteredItems.sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'price') {
          return a.price - b.price;
        }
        return 0;
      });
      useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);
      // Calculate pagination
      const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexOfFirstItem = indexOfLastItem - itemsPerPage;
      const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  return (
    <div className='dashbordWrapper'>
      <h1 className='dashboard icnLftMrgn'>Dashboard</h1>
      <NewItemForm onAddItem={handleAddItem} />
      <ItemList 
        items={currentItems} 
        onDelete={handleDeleteItem} 
        searchTerm={searchTerm} 
        onSearch={handleSearch} 
        onSort={handleSort} 
        currentPage={currentPage}  
        totalPages={totalPages}   
        handlePageChange={handlePageChange} 
      />
    </div>
  )
}

export default Dashboard
