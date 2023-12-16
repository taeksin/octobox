import React, { useState } from 'react';
import '../css/FilterComponent.css';
const FilterComponent = ({onApplyFilter}) => {
  const [isFilterVisible, setFilterVisible] = useState(true);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const toggleFilterVisibility = () => {
    setFilterVisible(!isFilterVisible);
  };

  const handleFilterChange = (event) => {
    const { value } = event.target;
  
    if (selectedFilters.includes(value)) {
      const newFilters = selectedFilters.filter(filter => filter !== value);
      setSelectedFilters(newFilters);
      onApplyFilter(newFilters);
    } else {
      const newFilters = [...selectedFilters, value];
      setSelectedFilters(newFilters);
      onApplyFilter(newFilters);
    }
  };
  

  const applyFilter = (event) => {
    event.preventDefault();
    console.log('Selected Filters:', selectedFilters);

    onApplyFilter(selectedFilters);
  };

  const resetFilter = () => {
    setSelectedFilters([]);
    onApplyFilter([]);
    console.log('Filters reset');
  };
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', margin: '2rem' }}>
      <a href="#" onClick={toggleFilterVisibility} style={{ textDecoration: 'none', color: '#333', marginRight: '10px' }}>
        Filter
      </a>
      {isFilterVisible && (
        <form onSubmit={applyFilter} style={{ display: 'flex', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label className='filter'>
              <input type="checkbox" name="language" value="python" onChange={handleFilterChange} checked={selectedFilters.includes('python')}/> Python.
            </label>
            <label className='filter'>
              <input type="checkbox" name="language" value="c" onChange={handleFilterChange} checked={selectedFilters.includes('c')}/> C.
            </label>
            <label className='filter'>
              <input type="checkbox" name="language" value="java" onChange={handleFilterChange} checked={selectedFilters.includes('java')}/> Java.
            </label>
            <label className='filter'>
              <input type="checkbox" name="language" value="cpp" onChange={handleFilterChange} checked={selectedFilters.includes('cpp')}/> C++.
            </label>
            <label className='filter'>
              <input type="checkbox" name="language" value="javascript" onChange={handleFilterChange} checked={selectedFilters.includes('javascript')}/> Javascript.
            </label>
          </div>
          <p>
            <button type="button" onClick={resetFilter} style={{ backgroundColor: '#4CAF50', color: 'white', padding: '6px', borderRadius: '5px', marginRight: '5px' }}>
              Reset
            </button>
            {/* 시간 되면 리셋버튼 추가하고 클릿기 체크박스 풀리게하기 */}
            {/* <button type="button" onClick={resetFilter} style={{ backgroundColor: '#f44336', color: 'white', padding: '5px', borderRadius: '5px' }}>
              Cancel
            </button> */}
          </p>
        </form>
      )}
    </div>
  );
};

export default FilterComponent;
