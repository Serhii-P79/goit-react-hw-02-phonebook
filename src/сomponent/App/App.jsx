import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm, Filter, ContactList } from 'сomponent';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (
      this.state.contacts.some(({ name }) =>
        name.toLowerCase().includes(data.name.toLowerCase()),
      )
    ) {
      alert(`${data.name} is already in contacts.`);
      return false;
    }

    this.setState(({ contacts }) => {
      return {
        contacts: [
          ...contacts,
          {
            id: nanoid(),
            name: data.name,
            number: data.number,
          },
        ],
      };
    });
  };

  deleteContact = delId => {
    // console.log(delId);

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts.filter(({ id }) => id !== delId)],
      };
    });
  };

  handleChangeFiltrContacts = evt => {
    this.setState({ filter: evt.currentTarget.value }, () => {
      // console.log(this.state.filter);
    });
  };

  getFilteringContacts = () => {
    const normolizeFiltr = this.state.filter.toLowerCase();
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(normolizeFiltr),
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          handleChangeFiltrContacts={this.handleChangeFiltrContacts}
        />
        <ContactList
          contact={this.getFilteringContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
