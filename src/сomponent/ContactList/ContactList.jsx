import React from 'react';
import PropTypes from 'prop-types';
import { CssForm, CssContactList } from 'сomponent';

export function ContactList({ contact, onDelete }) {
  return (
    <CssContactList.ContactList>
      {contact.map(({ id, name, number }) => {
        return (
          <CssContactList.Contact key={id}>
            <CssContactList.Name>{name}:</CssContactList.Name> tel:{' '}
            <CssContactList.Number>{number}</CssContactList.Number>
            <CssForm.Button
              type="button"
              name="del"
              onClick={e => onDelete(e, id)}
            >
              Delete
            </CssForm.Button>
          </CssContactList.Contact>
        );
      })}
    </CssContactList.ContactList>
  );
}

ContactList.protoType = {
  contact: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
