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
    <div>
      <strong>{name}</strong> {value}
    </div>
  );
};
const Statistics = ({ good, neutral, bad, average, positiveFeedback }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <Statistic name="good" value={good} />
        <Statistic name="neutral" value={neutral} />
        <Statistic name="bad" value={bad} />
        <Statistic name="all" value={good + neutral + bad} />
        <Statistic name="average" value={average} />
        <Statistic name="positive" value={positiveFeedback} />
      </div>
    );
  }
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button text="good" />
        <Button text="neutral" />
        <Button text="bad" />
      </div>
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        average={average}
        positiveFeedback={positiveFeedback}
      />
    </div>
  );
};

export default App;
