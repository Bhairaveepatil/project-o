import React from 'react'
import { Link } from 'react-router-dom'
const Edit = () => {
  return (
    <React.Fragment>
    <section className="add-user p-3">
      <div className="container">
        <div className="row">
          <div className="column">
            <p className="h4 text-primary fw-bold">Edit User Details</p>
            <p className="fst-italic"> Please provide the details to edit information of the user</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Enter Name"/>
              </div>
              <div className="mb-2">
                <input type="email" className="form-control" placeholder="Enter Email"/>
              </div>
              <div className="mb-2">
              <input type="number" className="form-control" placeholder="Enter Phone No."/>
              </div>
              <div className="mb-2">
              <input type="text" className="form-control" placeholder="Photo URL"/>
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Gender"/>
              </div>
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Hobbies"/>
              </div>
              
              <div className="mb-2">
                <input type="text" className="form-control" placeholder="Highest Qualification"/>
              </div>
              <div className=" mb-2">
                <input  type="submit" className="btn btn-primary col-md-12 " value="Update Information"/>
               </div>
                <div className="mb-2">
                <Link to={'/userlist'} className="btn btn-dark col-md-12 "> Cancel</Link>
                </div>
            </form>
            {/* <div className="col-md-6">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9pIsCYx9Z9wPHyN-qDcqJMUALTYV0phaxw&usqp=CAU" alt="" className="align-items-right user-img" />
            </div> */}
          </div>
        </div>
      </div>

    </section>
   
  </React.Fragment>
  )
}

export default Edit