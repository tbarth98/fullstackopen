import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = (btnType) => {
    switch (btnType) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        break;
    }
  };

  const calcAverage = () => {
    let total = good + neutral + bad;
    let average = 0;
    if (total) {
      average = (good - bad) / total;
    }
    return average;
  };

  const calcPositivePercentage = () => {
    let total = good + neutral + bad;
    let positivePercentage = 0;
    if (total) {
      positivePercentage = (good / total) * 100;
    }
    return `${positivePercentage} %`;
  };

  return (
    <>
      <Heading text='give feedback' />
      <Button handleClick={handleClick} text='good' type='good' />
      <Button handleClick={handleClick} text='neutral' type='neutral' />
      <Button handleClick={handleClick} text='bad' type='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} calcAverage={calcAverage} calcPositivePercentage={calcPositivePercentage} />
    </>
  );
};
const Statistics = (props) => {
  const { good, neutral, bad, calcAverage, calcPositivePercentage } = props;
  if (good + neutral + bad) {
    return (
      <>
        <Heading text='statistics' />
        <table>
          <tbody>
            <StatisticLine text='good' value={good} />
            <StatisticLine text='neutral' value={neutral} />
            <StatisticLine text='bad' value={bad} />
            <StatisticLine text='all' value={good + neutral + bad} />
            <StatisticLine text='average' value={calcAverage()} />
            <StatisticLine text='positive' value={calcPositivePercentage()} />
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <>
        {' '}
        <Heading text='statistics' />
        <p>No feedback given</p>
      </>
    );
  }
};

const Heading = ({ text }) => <h1>{text}</h1>;

const Button = ({ handleClick, text, type }) => <button onClick={() => handleClick(type)}>{text}</button>;

const StatisticLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
);

export default App;
