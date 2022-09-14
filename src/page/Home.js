import { useEffect, useState } from "react";
import '../../src/style/Home.css'

import GetWeather from "../components/GetWeather";
import {Link} from 'react-router-dom';

function App() {

  const [test, setTest] = useState(false)
  const [test3, setTest3] = useState(123123)
  const [city, setCity] = useState('daegu')
  ///////////////////////////////////////////////
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])


  const ShowWeather = () => {

    return (
      <>
        <GetWeather city={city}/>
      </>
    )
  }
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('안녕')
  // }
  
  return (
    // <>
    // <div>
    //   <h1>현재 알고싶은 도시의 날씨를 영어로 검색해봐 ( default : daegu ) </h1>
    //   <input
    //     type='text'
    //     value={city}
    //     onChange={(e)=>setCity(e.target.value)}
    //     on
    //   >
    //   </input>
    //   <button onClick={()=>ShowWeather()}>검색</button><br/><br/><br/>
    //   {ShowWeather()}
    // </div>
    // </>
    <>
     <h1>Todo List ( {todos.length} )</h1>
     <form onSubmit={(e)=> {
        e.preventDefault()
        if(todo == '')
        {
          alert('할일을 입력해주세요')
          return
        }
        setTodos((currentArray) => [todo, ...currentArray])
        setTodo('')
     }}>
      <input
        type='text'
        placeholder="write you are todo list"
        onChange={(e)=> setTodo(e.target.value)}
        value={todo}
      >

      </input>
      <button>Add to Toto</button>
     </form>
     <ul>
      {todos.map((item, index) => 
      <li key={index}>{item}</li>)
      }
     </ul>
     <h2>
        <Link to={`test/${test3}`}>이걸 눌러봐 </Link>
     </h2>
     {/* <button onClick={()=> {
      alert('정말로 초기화 하시겠습니까 ?')
      // setTodos([])
    }}>Empty to Toto</button> */}
    </>
  );
}

export default App;
