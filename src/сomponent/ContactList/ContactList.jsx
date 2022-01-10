import React from 'react';

export function ContactList({ contact, onDelete }) {
  return (
    <ul>
      {contact.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: tel:<span>{number}</span>
            <button type="button" name="del" onClick={() => onDelete(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}
