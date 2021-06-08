import { useState } from "react";
import "./styles.css";

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <p>
      {props.parts.map((item, idx) => (
        <p>
          {item.name} {item.exercises}{" "}
        </p>
      ))}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

function CourseInfo() {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

const Statistic = ({ name, value }) => {
  return (
    <tr>
      <td>
        {" "}
        <strong>{name}</strong>{" "}
      </td>
      <td>{value}</td>
    </tr>
  );
};
const Statistics = ({ good, neutral, bad, average, positiveFeedback }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <table>
          <tbody>
            <Statistic name="good" value={good} />
            <Statistic name="neutral" value={neutral} />
            <Statistic name="bad" value={bad} />
            <Statistic name="all" value={good + neutral + bad} />
            <Statistic name="average" value={average} />
            <Statistic name="positive" value={positiveFeedback} />
          </tbody>
        </table>
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increaseGoodScore = () => setGood(good + 1);
  const increaseNeutralScore = () => setNeutral(neutral + 1);
  const increaseBadScore = () => setBad(bad + 1);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button text="good" clickHandler={increaseGoodScore} />
        <Button text="neutral" clickHandler={increaseNeutralScore} />
        <Button text="bad" clickHandler={increaseBadScore} />
      </div>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={(good - bad) / (good + bad + neutral)}
        positiveFeedback={good / (good + bad + neutral)}
      />
    </div>
  );
};

export default App;
