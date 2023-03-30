import React, { useState } from 'react';

function Dropdown() {
  const [selectedOption, setSelectedOption] = useState('option1');

  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <label htmlFor="dropdown">Gender</label>
      <select id="dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="option1">Male</option>
        <option value="option2">Female</option>
        <option value="option3">Other</option>
      </select>
    </div>
  );
}

export default Dropdown;
