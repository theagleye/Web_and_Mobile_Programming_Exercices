import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
    return(
        <div>
                <h1>The course is <br /> {props.course}</h1>
        </div>
    )
}

// I could not figure out this part, with three 'part' components
const Content = (props) => {
    return(
        <div>
            <p>Contents of the course are: <br /> {props.part} <br /> </p>
            <part  />
            <part />
            <part />
        </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p>The total number of exercises are: {props.total} {props.exer}</p>
        </div>
    )
}

const App = () => {
    const course = 'Superadvanced web and mobile programming'
    const parts = [
    {
        name: 'Basics of React',
        exercises: 8
    },

//    const part2 = {
    {
        name: 'Using props',
        exercises: 10
    },

    //const part3 =
    {
        name: 'Component states',
        exercises: 12
    }
  ]
    return (
      <div>
        <Header course = {course} />
        <Content parts = {parts.name} />
        <Total total = {parts.exercises} />

      </div>
    )
  }


  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
