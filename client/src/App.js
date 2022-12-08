import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import About from './components/About';
import Login from './components/Login';
import { Route, Routes } from "react-router-dom"
import Userinfo from './components/Userinfo';
import Gallery from './components/Gallery';
import Details from './components/Details';
import Edit  from './components/Edit'
import Readmore from './components/Readmore';


function App() {

  return (
    <React.Fragment>
      
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userinfo' element={<Userinfo/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<Readmore/>}/>

      </Routes>
    </React.Fragment>
  );
}

export default App;

