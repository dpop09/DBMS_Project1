import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Signin from './signin.jsx'
import Register from './register.jsx'
import Home from './home.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Signin />}
          />
          <Route
            exact
            path='/register'
            element={<Register />}
          />
          <Route
            exact
            path='/home'
            element={<Home />}
          />
          <Route
            path='*'
            element={<Navigate to='/' />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
