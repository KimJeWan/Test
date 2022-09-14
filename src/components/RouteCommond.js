import {
    BrowserRouter as Router,
    Route,
    Routes
  } from 'react-router-dom';
  import Home from '../page/Home'
  import Test from '../page/Test'

const RouteCommond = () => {
    return (
        <>
          <Router>
            <Routes>
              <Route exact={true} path='/test/:id' element={<Test />}/>
              <Route exact={true} path='/' element={<Home />} />
            </Routes>
          </Router>
        </>
    )
}

export default RouteCommond