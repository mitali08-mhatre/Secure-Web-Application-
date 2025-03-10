import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home';



function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Signup />}> </Route>
          <Route path="/Login"  element={<Login />}></Route>
          <Route path='/Home' element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
