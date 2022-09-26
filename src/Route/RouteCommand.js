import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
  import Home from '../page/Home'
  import Movies from '../page/Movie/Movies';
  import MoviesDetail from '../page/Movie/MoviesDetail';
  import Todo from '../page/Todo';
  import Nwitter from '../page/Nwitter/Nwitter';
  import NwitterLogin from '../page/Nwitter/NwitterLogin'
  import Navigation from '../components/Navigation';
  import Profile from '../page/Nwitter/Profile';
  
  const RouteCommond = ( {isLogined, userObj  }) => {
  
  return (
        <>
          <Router>
          {isLogined && <Navigation />}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/movie' element={<Movies />} />
              <Route path='/movieDetail/:id' element={<MoviesDetail />} />
              <Route path='/Todo' element={<Todo />}/>
              {isLogined ? 
              <>
                <Route path='/nwitter' element={<Nwitter userObj={userObj} />}/>
                <Route path='/nwitter/profile' element={<Profile />}/>
              </> :
              <>
                <Route path='/nwitter' element={<NwitterLogin />}/>
              </>
              }
            </Routes>
          </Router>
        </>
    )
}

export default RouteCommond