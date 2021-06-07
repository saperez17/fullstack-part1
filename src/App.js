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
  return <p>Number of exercises {props.total}</p>;
};

export default function App() {
  const course = "Half Stack application development";
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7
  };
  const part3 = {
    name: "State of a component",
    exercises: 14
  };
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />

      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  );
}
