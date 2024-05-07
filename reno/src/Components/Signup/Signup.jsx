/*
import Signup from './Signup';
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

// import Logo from "../../Images/Appbar/Logo.png";
import { NotificationManager } from "react-notifications";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import 'react-notifications/lib/notifications.css';
import axios from "axios"
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom"
export default function Signup() {

  let { register, handleSubmit, reset } = useForm();
let move = useNavigate()

  const saveUser = (data) => {
    // if (params.nID) {
    //   axios.put("/update-user", data).then(function (resp) {});
    // } else {
    //   // data.id = v4();
    //   console.log(data);
    //   // let myData = new FormData();
    //   // myData.append("id", v4());
    //   // myData.append("name", data.name);
    //   // myData.append("password", data.password);
    //   // myData.append("file", data.userFile[0]);
console.log(data)
    axios.post("http://localhost:6073/create-user", data)
  .then(function (resp) {
    move("/login")
    NotificationManager.success("User Created");
    console.log(resp)
      // Handle the response
  })
  .catch(function (error) {
    // Handle errors
    console.error("Error:", error);
  });
    }
    // dispatch({
    //   type: "USER_CREATED",
    //   payload: data,
    // });
    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div id="bg" className="min-h-screen flex flex-col justify-center bg-black text-white py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* <img
              className="mx-auto h-32 w-40"
              src={Logo}
              alt="Workflow"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[#be9563]">Sign up to your account</h2>
            <p className="mt-2 text-center text-sm text-[#be9563]">
              Already have an account?
              <a href="/admin/login   " className="font-sm  text-indigo-300">
                Sign in Now
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-transparent py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit(saveUser)} className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#be9563]">
                  Username
                  </label>
                  <div className="mt-1">
                    <input
                    {...register("name")}
                      id="name"
                      name="name"
                      type="text"
                   
                      required
                      className="bg-amber-100 text-black appearance-none block w-full px-3 py-2 border border-gray-300  rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#be9563]" >
                  Email address
                  </label>
                  <div className="mt-1">
                    <input {...register("email")}
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="appearance-none bg-amber-100 text-black  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#be9563]" >
                    Password
                  </label>
                  <div className="mt-1">
                    <input  {...register("password")}
                      id="password"
                      name="password"
                      type="password"
                     
                      required
                      className="appearance-none bg-amber-100 text-black  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
  
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[#be9563]">
                      Remember me
                    </label>
                  </div>
  
                  <div className="text-sm">
                    <a href="#f" className="font-medium text-[#be9563]hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#be9563]  hover:bg-[#be9563] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
                  </button>
                </div>
              </form>
  
              <div className="align-center text-center m-5 justify-center ml-20">
              <GoogleLogin
  onSuccess={credentialResponse => {

    const decoded = jwtDecode(credentialResponse?.credential);
    move("/");
    console.log(decoded);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
</div>
            </div>
          </div>
        </div>
      </>
    )
  }
  