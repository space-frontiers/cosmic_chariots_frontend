// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from "@apollo/react-hooks";
// import { LOGIN_USER } from "../utils/mutations";

// import Auth from "../utils/auth";

// import Header from '../components/Header';

// const SignIn = () => {
//   const [userFormData, setUserFormData] = useState({ email: "", password: "" });
//   // const [validated] = useState(false);
//   // const [showAlert, setShowAlert] = useState(false);

//   // declaring loginUser with useMutation
//   const [login, { error, data }] = useMutation(LOGIN_USER);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setUserFormData({ ...userFormData, [name]: value });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(userFormData);

//     // check if form has everything 
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     // use loginUser function
//     try {
//       const { data } = await login({
//         variables: { ...userFormData },
//       });

//       Auth.login(data.login.token);
//     } catch (e) {
//       console.error(e);
//       // setShowAlert(true);
//     }

//     setUserFormData({
//       email: "",
//       password: "",
//     });
//   };

//   return (
//     <div className="flex flex-col min-h-screen overflow-hidden">

//       {/*  Site header */}
//       <Header />

//       {/*  Page content */}
//       <main className="flex-grow">

//         <section className="bg-gradient-to-b from-gray-100 to-white">
//           <div className="max-w-6xl mx-auto px-4 sm:px-6">
//             <div className="pt-32 pb-12 md:pt-40 md:pb-20">

//               {/* Page header */}
//               <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
//                 <h1 className="h1">Welcome back, space adventurer! Sign in to view your profile or reservations!</h1>
//               </div>

//               {/* Form */}
//               <div className="max-w-sm mx-auto">
//                 <form onSubmit={handleFormSubmit}>
                  
//                   <div className="flex flex-wrap -mx-3 mb-4">
//                     <div className="w-full px-3">
//                       <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
//                       <input 
//                         id="email" 
//                         type="email" 
//                         className="form-input w-full text-gray-800" 
//                         placeholder="Enter your email address"
//                         value={userFormData.email} 
//                         onChange={handleInputChange} 
//                         required />
//                     </div>
//                   </div>
//                   <div className="flex flex-wrap -mx-3 mb-4">
//                     <div className="w-full px-3">
//                       <div className="flex justify-between">
//                         <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
//                         {/* <Link to="/reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link> */}
//                       </div>
//                       <input 
//                         id="password" 
//                         type="password" 
//                         className="form-input w-full text-gray-800" 
//                         placeholder="Enter your password" 
//                         value={userFormData.password}
//                         onChange={handleInputChange}
//                         required />
//                     </div>
//                   </div>
//                   {/* <div className="flex flex-wrap -mx-3 mb-4">
//                     <div className="w-full px-3">
//                       <div className="flex justify-between">
//                         <label className="flex items-center">
//                           <input type="checkbox" className="form-checkbox" />
//                           <span className="text-gray-600 ml-2">Keep me signed in</span>
//                         </label>
//                       </div>
//                     </div>
//                   </div> */}
//                   <div className="flex flex-wrap -mx-3 mt-6">
//                     <div className="w-full px-3">
//                       <button 
//                         className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
//                         type="submit" >Sign in</button>
//                     </div>
//                   </div>
//                 </form>

//                 <div className="text-gray-600 text-center mt-6">
//                   Don’t have an account? <Link to="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }

// export default SignIn;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

import Header from '../components/Header';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">Welcome back, space adventurer! Sign in to view your profile or reservations!</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleFormSubmit}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input
                          id="email"
                          className="form-input w-full text-gray-800"
                          placeholder="Enter your email address"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Password</label>
                        <input
                          id="password"
                          className="form-input w-full text-gray-800"
                          placeholder="******"
                          name="password"
                          type="password"
                          value={formState.password}
                          onChange={handleChange}
                          required
                        />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                        <button
                          className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                          style={{ cursor: 'pointer' }}
                          type="submit"
                        >
                          Submit
                        </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  Don’t have an account?
                  <Link to="/signup" className="text-blue-600 hover:underline transition duration-150 ease-in-out">Sign up</Link>
                </div>

                  {error && (
                    <div className="my-3 p-3 bg-danger text-white">
                      {error.message}
                    </div>
                  )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
