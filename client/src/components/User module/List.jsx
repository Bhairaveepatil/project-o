import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './all.css'



const List = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="search p-3" >
        <div className="container p-3">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold"> User Module
                  <Link to={'/userlist/add'} className="btn btn-primary ms-3">
                    <i className="fa fa-plus-circle me-2"></i>
                    Add User</Link>
                </p>
                <p className="fst-italic">
                  An user module from which the application can manage the user information like Name, Email, Phone number, Gender, Hobbies, Highest Education, and many more. All the
                  details are well managed with frontend and backend validations which helps to adds and
                  update/edit the data, also it delete user functionality is managed in an attractive Card format.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="list">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex-justify-content-around">
                  <div className="col-md-4">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9pIsCYx9Z9wPHyN-qDcqJMUALTYV0phaxw&usqp=CAU" alt="" className="user-img" />
                  </div>
                  <div className="col-md-7">
                     <ul className="list-group">
                      <li className="list-group-item list-group-item-action my-1">
                         Name: <span className="fw-bold">Yashvi</span>
                      </li>
                      <li className="list-group-item list-group-item-action my-1">
                         Email: <span className="fw-bold">Yashvi@gmail.com</span>
                      </li>
                      <li className="list-group-item list-group-item-action my-1">
                         Phone no. : <span className="fw-bold">9898987070</span>
                      </li>

                     </ul>
                  </div>
                  <div className="col-md-1 d-flex flex-column align-items-center">
                  <Link to={'/userlist/view/:userId'} className="btn btn-warning my-1"><i className="fa fa-eye"></i></Link>
                      <Link to={'/userlist/edit/:userId'} className="btn btn-primary my-1"><i className="fa fa-pen"></i></Link>
                      <Link to={'/userlist/edit/:userId'} className="btn btn-danger my-1"><i className="fa fa-trash"></i></Link>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="list m-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center d-flex-justify-content-around">
                  <div className="col-md-4">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9pIsCYx9Z9wPHyN-qDcqJMUALTYV0phaxw&usqp=CAU" alt="" className="user-img" />
                  </div>
                  <div className="col-md-7">
                     <ul className="list-group">
                      <li className="list-group-item list-group-item-action my-1">
                         Name: <span className="fw-bold">Yashvi</span>
                      </li>
                      <li className="list-group-item list-group-item-action my-1">
                         Email: <span className="fw-bold">Yashvi@gmail.com</span>
                      </li>
                      <li className="list-group-item list-group-item-action my-1">
                         Phone no. : <span className="fw-bold">9898987070</span>
                      </li>

                     </ul>
                  </div>
                  <div className="col-md-1 d-flex flex-column align-items-center">
                  <Link to={'/userlist/view/:userId'} className="btn btn-warning my-1"><i className="fa fa-eye"></i></Link>
                      <Link to={'/userlist/edit/:userId'} className="btn btn-primary my-1"><i className="fa fa-pen"></i></Link>
                      <Link to={'/userlist/edit/:userId'} className="btn btn-danger my-1"><i className="fa fa-trash"></i></Link>

                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

export default List