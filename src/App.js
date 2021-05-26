import Header from "./components/Header";
import {Todos} from "./components/Todos";
import React, { useState } from 'react';
import Footer from "./components/Footer";
import AddToDo from "./components/AddToDo";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: 'React',
      desc: 'Practice of React Components',
    },
    {
      sno: 2,
      title: 'DSA',
      desc: 'Do Practice on Binary Tree DS',
    },
    {
      sno: 3,
      title: 'Git',
      desc: 'Learn more about Git',
    }
  ]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e!==todo;
    }))
  };

  const addTodo = (title, desc) => {
    let sno;
    if(todos.length === 0) {
      sno = 1;
    } else {
       sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
  };

  return (
    <>
      <Router>
        <Header title = "My Todos List" searchBar={true}/>

        <Switch>
          <Route exact path="/" render={()=> {
            return(
              <>
                <AddToDo addTodo={addTodo}/>
                <Todos todos={todos} onDelete={onDelete}/>
              </>
            )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
