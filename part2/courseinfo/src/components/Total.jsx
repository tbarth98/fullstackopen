const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => {
    return sum + part.exercises;
  }, 0);
  return <b>Number of exercises {sum}</b>;
};

export default Total;
