import axios from 'axios';
const baseUrl = 'http://localhost:3001/persons';

const getAllPersons = () => {
  const promise = axios.get(baseUrl);
  return promise.then((response) => response.data);
};

const addPerson = (personObj) => {
  const promise = axios.post(baseUrl, personObj);
  return promise.then((response) => response.data);
};

const updatePerson = (personObj) => {
  const promise = axios.put(`${baseUrl}/${personObj.id}`, personObj);
  return promise.then((response) => response.data);
};

const deletePerson = (personId) => {
  const promise = axios.delete(`${baseUrl}/${personId}`);
  return promise.then((response) => response.data);
};

export default { getAllPersons, addPerson, updatePerson, deletePerson };
