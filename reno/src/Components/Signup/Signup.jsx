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
        <div className="min-h-screen flex flex-col justify-center bg-black text-white py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            {/* <img
              className="mx-auto h-32 w-40"
              src={Logo}
              alt="Workflow"
            /> */}
            <h2 className="mt-6 text-center text-3xl font-extrabold text-amber-600">Sign in to your account</h2>
            <p className="mt-2 text-center text-sm text-amber-600">
              Or{' '}
              <a href="/login   " className="font-sm  text-indigo-300">
                Login
              </a>
            </p>
          </div>
  
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit(saveUser)} className="space-y-6" action="#" method="POST">
              <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-600">
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
                  <label htmlFor="email" className="block text-sm font-medium text-amber-600" >
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
                  <label htmlFor="password" className="block text-sm font-medium text-amber-600" >
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
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-600">
                      Remember me
                    </label>
                  </div>
  
                  <div className="text-sm">
                    <a href="#f" className="font-medium text-amber-600hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
  
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-500  hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
                  </button>
                </div>
              </form>
  
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-amber-600">Or continue with</span>
                  </div>
                </div>
  
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      href="/#"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-600 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
  
                  <div>
                    <a
                      href="#/"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-600 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <svg className="w-5 h-5 text-amber-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"/></svg>
                    </a>
                  </div>
  
                  <div>
                    <a
                      href="#/"
                      className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-amber-400 hover:bg-gray-50"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  