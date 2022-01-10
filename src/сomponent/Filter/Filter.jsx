import React from 'react';

export function Filter({ value, handleChangeFiltrContacts }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={handleChangeFiltrContacts}
      ></input>
    </label>
  );
}
