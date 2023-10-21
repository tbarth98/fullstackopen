import Person from './Person';

const Persons = ({ displayedPersons, handleDeletePerson }) => {
  return (
    <div>
      {displayedPersons.map((person) => (
        <Person key={person.name} person={person} handleDeletePerson={handleDeletePerson} />
      ))}
    </div>
  );
};

export default Persons;
