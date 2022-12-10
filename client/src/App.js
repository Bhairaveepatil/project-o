import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import About from './components/About';
import Login from './components/Login';
import { Route, Routes , Navigate} from "react-router-dom"
import Userinfo from './components/Userinfo';
import Gallery from './components/Gallery';
import Details from './components/Details';
// import Edit  from './components/Oldedit'
import Readmore from './components/Readmore';

import List from './components/User module/List';
import Addcontact from './components/User module/Addcontact';
import View from './components/User module/View';
import Edit from './components/User module/Edit'


function App() {


  return (
    <React.Fragment>
      
      <Routes>
      <Route path='/' element={<Navigate to= {'/about'}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/userinfo' element={<Userinfo/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/details' element={<Details/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
        <Route path='/view/:id' element={<Readmore/>}/>
        <Route path='/userlist' element={<List/>}/>
        <Route path='/userlist/add' element={<Addcontact/>}/>
        <Route path='/userlist/view/:userId' element={<View/>}/>
        <Route path='/userlist/edit/:userId' element={<Edit/>}/>


      </Routes>
    </React.Fragment>
  );
}

export default App;

