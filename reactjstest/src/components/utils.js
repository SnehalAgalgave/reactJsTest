export const exportToCSV = (items) => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      items.map(item => `${item.name},${item.price}`).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "items.csv");
    document.body.appendChild(link);
    link.click();
  };
  