import React from 'react';

function MultiSelectInput({ options }) {
  return (
    <div className="p-4">
      <label htmlFor="multiselect" className="block text-sm font-medium mb-2">
        Select Options:
      </label>
      <select
        id="multiselect"
        multiple
        value={selectedOptions}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded-md"
      >
        <option value="option1">Option 1</option>
      </select>
      <p className="mt-4">Selected: {selectedOptions.join(", ")}</p>
    </div>
  );
}

export default MultiSelectInput;
