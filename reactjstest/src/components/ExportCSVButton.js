import React from 'react';
import { exportToCSV } from './utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
const ExportCSVButton = ({ items }) => {
  const handleExport = () => {
    exportToCSV(items);
  };

  return (
    <div>
      <button onClick={handleExport} className='csvBtn'>
        <span className='icnRhtMrgn'>
        <FontAwesomeIcon icon={faFile} />
        </span>
      
         CSV</button>
    </div>
  );
};

export default ExportCSVButton;
