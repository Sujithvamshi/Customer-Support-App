import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {LoginButtonStyle ,toast} from "../common/StylingConstants"
import { UnAuthApi } from "../common/Apis";
import Toast from '../common/Toast';
import Loading from '../common/Loading';
function Login() {
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const [userForm,setUserForm] = useState({
    username:"",
    password:""
  })
  const register = () => {
    navigate("/register")
   }
   const handleUserFormChange = (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    });
  };
  const handleUserSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    UnAuthApi.post("/auth/login",userForm).then((response) => {
        if(response.status === 200){
          const { token, username, role } = response.data;
          localStorage.setItem('token', token);
          localStorage.setItem('username', username);
          localStorage.setItem('role', role);
          setLoading(false)
          navigate('/dashboard');
      } else {
        setLoading(false)
        toast('!Invalid Credantials')
      }
    })
    .catch((error)=>{
          setLoading(false)
          console.error('Error:', error);
          toast('An error occurred while logging in. Please try again later.');
      });
  }
    return (
      <>
      <Toast />
      {loading && <Loading />}
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={(e)=>{handleUserSubmit(e)}}>
              <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
              <input type="text" name="username" onChange={handleUserFormChange} value={userForm.username} required className="block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <input type="password" name="password" value={userForm.password} onChange={handleUserFormChange} required className="block w-full rounded-md border-0 
              py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
              focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
              <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
              </div>
              <button type="submit" onClick={(e)=>{handleUserSubmit(e)}} className={LoginButtonStyle}>Sign in</button>
            </form>
            <div className="mt-10 text-sm space-y-1">
                <p className='font-semibold text-600'>Not Registered?</p>
                <button type="submit" onClick={()=>register()} className={LoginButtonStyle}>Register</button>
            </div>
          </div>
        </div>
      </>
    )
  
}

export default Login