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
import axios from "axios"
import {useForm} from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
export default function Login() {
  let { register, handleSubmit } = useForm();
  let move = useNavigate();

  const findUser = (data) => {
    // data.id = v4();
    console.log(data, "jxjnsxj");
    // useEffect(() => {
    axios.post("http://localhost:6073/login", data).then((resp) => {
      // console.log(resp.data);
      if (resp.data) {
        localStorage.setItem("someToken", resp.data.myToken);
        move("/");
      
      } else {
        NotificationManager.warning("Invalid Credentials");
      }
    });
  }

    return (
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-50">
          <body class="h-full">
          ```
        */}
        <div id="bg" className=" min-h-screen flex flex-col justify-center bg-black text-white py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
           
            <h2 className="mt-6 text-center text-3xl font-extrabold text-[#be9563]">Sign in to your account</h2>
            
            <p className="mt-2 text-center text-sm text-[#8f6e45]">
            Dont have an account?
              <a href="/admin/signup" className="font-sm text-indigo-300">
              <p className="ml-36 text-red-500">Sign up now!</p>
              </a>
       
            </p>
          </div>
  
          <div id="in" className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-transparent py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form onSubmit={handleSubmit(findUser)} className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#8f6e45]">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      {...register("email")}
                      autoComplete="email"
                      required
                      className="appearance-none block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#8f6e45] focus:border-[#8f6e45] sm:text-sm"
                    />
                  </div>
                </div>
  
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-[#8f6e45]">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      {...register("password")}
                      autoComplete="current-password"
                      required
                      className="appearance-none block text-black w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#8f6e45]focus:border-[#8f6e45] sm:text-sm"
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
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-[#8f6e45]">
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
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8f6e45]  hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign in
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