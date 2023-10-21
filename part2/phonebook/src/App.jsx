import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Notification from './components/Notification';
import personsService from './services/personsService';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    personsService
      .getAllPersons()
      .then((newPersons) => setPersons(newPersons))
      .catch((err) => alert(err));
  }, []);

  const displayedPersons = search ? persons.filter((person) => person.name.toLowerCase().includes(search.toLowerCase())) : persons;

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleAddPerson = (e) => {
    e.preventDefault();
    if (doesNameAlreadyExist(newName)) {
      handleUpdatePerson();
    } else {
      personsService
        .addPerson({ name: newName, number: newNumber })
        .then((person) => {
          setPersons([...persons, person]);
          setNewName('');
          setNewNumber('');
          showNotification(`Added ${person.name}`, 'success');
        })
        .catch((err) => alert(err));
    }
  };

  const handleUpdatePerson = () => {
    if (confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
      const personToUpdate = persons.find((person) => person.name.toLowerCase() === newName.toLowerCase());
      const updatedPerson = { ...personToUpdate, number: newNumber };
      personsService
        .updatePerson(updatedPerson)
        .then((responsePerson) => {
          setPersons(persons.map((person) => (person.id !== responsePerson.id ? person : responsePerson)));
          setNewName('');
          setNewNumber('');
          showNotification(`Updated ${updatedPerson.name}`, 'success');
        })
        .catch((err) => console.log(err));
    }
  };

  const handleDeletePerson = (personId, personName) => {
    if (confirm(`Delete ${personName} ?`)) {
      personsService
        .deletePerson(personId)
        .then((deletedPerson) => {
          setPersons(persons.filter((person) => person.id !== personId));
          setNewName('');
          setNewNumber('');
          showNotification(`Deleted ${personName}`, 'success');
        })
        .catch((err) => {
          console.log(err);
          showNotification(`${personName} was already deleted from the server`);
          setPersons(persons.filter((person) => person.id !== personId));
          setNewName('');
          setNewNumber('');
        });
    }
  };

  const doesNameAlreadyExist = (name) => {
    var personNamesArray = persons.map((person) => person.name.toLowerCase());
    return personNamesArray.includes(name.toLowerCase()) ? true : false;
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter search={search} setSearch={setSearch} />
      <h2>add a new</h2>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleAddPerson={handleAddPerson} />
      <h2>Numbers</h2>
      <Persons displayedPersons={displayedPersons} handleDeletePerson={handleDeletePerson} />
    </div>
  );
};

export default App;
