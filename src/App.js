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

const Statistics = ({ good, neutral, bad, average, positiveFeedback }) => {
  if (good + neutral + bad === 0) {
    return <div>No feedback given</div>;
  } else {
    return (
      <div>
        <h2>statistics</h2>
        <div>
          <strong>good</strong> {good}{" "}
        </div>
        <div>
          <strong>neutral</strong> {neutral}{" "}
        </div>
        <div>
          <strong>bad</strong> {bad}{" "}
        </div>
        <div>
          <strong>all</strong> {good + neutral + bad}{" "}
        </div>
        <div>
          <strong>average</strong> {average}{" "}
        </div>
        <div>
          <strong>positive</strong> {positiveFeedback} %
        </div>
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
        <button>good</button>
        <button>neutral</button>
        <button>bad</button>
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
