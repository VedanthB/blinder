import React from "react";

function FilterListItem({ value, onChange, text }) {
  return (
    <li className="pb-3">
      <label className="text-white text-lg">
        <input
          type="checkbox"
          value={value}
          onChange={onChange}
          className="mr-3"
        />
        {text}
      </label>
    </li>
  );
}

export default FilterListItem;
