import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <React.Fragment>
        <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
            <div className='container'>
                <Link to={'/userlist'} className='navbar-brand' > 
                <i className='fa fa-mobile text-warning'></i>User <span className='text-warning'>Module</span></Link>
            </div>
        </nav>
    </React.Fragment>
  )
}

export default Navbar