const Person = ({ person, handleDeletePerson }) => {
  return (
    <p>
      {person.name} | {person.number} &nbsp;
      <button onClick={() => handleDeletePerson(person.id, person.name)}>delete</button>
    </p>
  );
};

export default Person;
