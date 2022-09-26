import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../../src/style/Home.css'

function App() {

  const [moviesId, setMoviesID] = useState()
  
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  
  return (
    <div className="home_container">
      <div>
        <div className="home_title">
          <h1>W e l l C o m e</h1>
        </div>
        <ul>
          <li><Link to='/Todo'>Todo 페이지로 이동</Link></li>
          <li><Link to='/movie'>Movie 페이지로 이동</Link></li>
          <li><Link to='/nwitter'>Nwitter 페이지로 이동</Link></li>
        </ul>
      </div>
      {/* <h1><Link to='/movie'>Movie 페이지로 이동</Link></h1>
      <h1><Link to='/Todo'>Todo 페이지로 이동</Link></h1>
      <h1><Link to='/nwitter'>Nwitter 페이지로 이동</Link></h1> */}
      {/* <h1><Link to='/movie'>영화 페이지로 이동</Link></h1> */}
    </div>
  );
}

export default App;
