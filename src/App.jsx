import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList/ContactList';
import Container from './App.styled';

class App extends Component {
  state = {
    contacts: [],
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

  componentDidMount() {
    /*получение объекта с массивом контактов из localStorage в state*/
    let contacts;
    try {
      contacts = JSON.parse(localStorage.getItem('phonebook'));
    } catch (error) {
      console.log(error);
    }

    if (contacts) {
      this.setState(contacts);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    /*Добавление объекта с массивом контактов в localStorage*/
    const { contacts } = this.state;

    if (prevState.contacts.length !== contacts.length) {
      const data = JSON.stringify({ contacts: contacts });
      localStorage.setItem('phonebook', data);
    }
  }

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
