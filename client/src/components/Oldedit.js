// import React from 'react'
// import { useState } from 'react'
// import { NavLink } from 'react-router-dom'

// const Edit = () => {

//   const [input, setinput] = useState({
//     name: "",
//     email: "",
//     age: "",
//     mobile: "",
//     work: "",
//     address: "",
//     description: ""
//   })
//   const setdata = (e) => {
//     console.log(e.target.value)
//     const { name, value } = e.target;
//     setinput((prev) => {
//       return {
//         ...prev,
//         [name]: value
//       }
//     })
//   }
//   return (
//     <div className='details_container'>
//       <nav class="navbar navbar-expand-lg navbar-light bg-light">
//         <div class="container-fluid">
//           <NavLink to="/userinfo">Go Back</NavLink>
//         </div>
//       </nav>


//       <form className='mt-5 '>
//         <div className='row'>
//           <div class="mb-3 col-lg-4 col-md-6 col-12 ">
//             <label for="exampleInputEmail1" class="form-label">Name:</label>
//             <input onChange={setdata} value={input.name}
//               type="text" name='name' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>
//           <div class="mb-3 col-lg-4 col-md-6 col-12 ">
//             <label for="exampleInputEmail1" class="form-label">Email address:</label>
//             <input onChange={setdata}
//               value={input.email} type="email" name='email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>
//           <div class="mb-3 col-lg-4 col-md-6 col-12 ">
//             <label for="exampleInputEmail1" class="form-label">Age:</label>
//             <input onChange={setdata}
//               value={input.age} type="number" name='age' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>
//           <div class="mb-3 col-lg-4 col-md-6 col-12 ">
//             <label for="exampleInputEmail1" class="form-label">Mobile:</label>
//             <input onChange={setdata}
//               value={input.mobile} type="number" name='mobile' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>
//           <div class="mb-3 col-lg-4 col-md-6 col-12 ">
//             <label for="exampleInputEmail1" class="form-label">Work:</label>
//             <input onChange={setdata}
//               value={input.work} type="text" name='work' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>
//           <div class="mb-3 col-lg-4 col-md-6 col-12 ">
//             <label for="exampleInputEmail1" class="form-label">Address:</label>
//             <input onChange={setdata}
//               value={input.address} type="text" name='address' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
//           </div>
//           <div class="mb-3 col-lg-12 col-md-12 col-12  ">
//             <label for="exampleInputEmail1" class="form-label">Description:</label>
//             <textarea onChange={setdata}
//               value={input.description} type="text" name='description' class="form-control" id="" cols='30' rows='5'></textarea>
//           </div>

//           <button type="submit" class="btn btn-primary">Submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Edit