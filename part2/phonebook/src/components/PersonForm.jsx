const PersonForm = ({ newName, setNewName, newNumber, setNewNumber, handleAddPerson }) => {
  return (
    <form>
      <div>
        name: <input value={newName} onChange={(e) => setNewName(e.target.value)} />
      </div>
      <div>
        number: <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
      </div>
      <div>
        <button type='submit' onClick={handleAddPerson}>
          add
        </button>
      </div>
    </form>
  );
};

export default PersonForm;
