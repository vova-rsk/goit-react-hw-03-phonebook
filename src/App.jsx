import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  /*метод для фильтрации контактов*/
  contactsFiltering = key => {
    return this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(key.toLowerCase()),
    );
  };

  /*метод для добавления елемента в контакты*/
  contactAdding = newContact => {
    this.setState(({ contacts, filter }) => ({
      contacts: [...contacts, newContact],
      filter,
    }));
  };

  /*метод для удаления елемента в контактах*/
  contactRemoving = id => {
    this.setState(({ contacts, filter }) => {
      return {
        contacts: contacts.filter(elem => elem.id !== id),
        filter,
      };
    });
  };

  /*метод для проверки присутствия контакта с указанным именем*/
  availabilityСheck = inputName => {
    const existingСontact = this.state.contacts.find(
      ({ name }) => name.toLowerCase() === inputName.toLowerCase(),
    );

    if (existingСontact) {
      alert(`${inputName} is already in contacts`);
      return true;
    }
    return false;
  };

  /*метод для обработки введения данных в input*/
  handleChange(e) {
    const name = e.target.name;
    this.setState({ [name]: e.target.value.trim() });
  }

  /*метод для формирования разметки*/
  render() {
    const {
      state: { filter },
      handleChange,
      availabilityСheck,
      contactsFiltering,
      contactAdding,
      contactRemoving,
    } = this;

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm
          handleChange={handleChange}
          availabilityСheck={availabilityСheck}
          contactAdding={contactAdding}
        />

        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange.bind(this)} />
        <ContactList
          contacts={contactsFiltering(filter)}
          contactRemoving={contactRemoving}
        />
      </Container>
    );
  }
}

export default App;
