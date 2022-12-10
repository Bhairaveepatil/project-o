import React from 'react'
import { Link } from 'react-router-dom'

const Addcontact = () => {
  return (
    <React.Fragment>
      <section className="add-user p-3">
        <div className="container">
          <div className="row">
            <div className="column">
              <p className="h4 text-success fw-bold">Add New User</p>
              <p className="fst-italic"> Please provide the following information of the user</p>
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
                  <input  type="submit" className="btn btn-success col-md-12 " value="Add User"/>
                 </div>
                  <div className="mb-2">
                  <Link to={'/userlist'} className="btn btn-dark col-md-12 "> Cancel</Link>
                  </div>
              </form>
            </div>
          </div>
        </div>

      </section>
     
    </React.Fragment>
  )
}

export default Addcontact