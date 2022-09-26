import RouteCommond from './Route/RouteCommand'
import {useState, useEffect} from 'react'
import {authService} from './Config/Firebase';

function App() {

  const [init, setInit] = useState(false)
  const [isLogined, setIsLogined] = useState(false)
  const [userObj, setUserObj] = useState(null)
  
  useEffect (() => {
    authService.onAuthStateChanged((user) => {
        if(user) {
          setIsLogined(true)
          setUserObj(user)
        } else {
          setIsLogined(false)
        }
        setInit(true)
      })
  },[])
  
  console.log(isLogined)

  return (
    <>
      {init? <RouteCommond isLogined={isLogined} userObj={userObj}/> : 'Initialzing ...'}
    </>
  );
}

export default App;
