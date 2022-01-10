import React, { Component } from 'react';

export class ContactForm extends Component {
  static defaultProps = {
    initName: '',
    initNumber: '',
  };

  state = {
    name: this.props.initName,
    number: this.props.initNumber,
  };

  handleChange = e => {
    const name = e.currentTarget.name;
    this.setState({ [name]: e.currentTarget.value });
  };

  addContact = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: this.props.initName,
      number: this.props.initNumber,
    });
  };

  render() {
    const { number, name } = this.state;
    return (
      <form onSubmit={this.addContact}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleChange}
            required
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}
