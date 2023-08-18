import React, { useState } from 'react'
import {RegisterInputStyle,LoginButtonStyle ,toast} from "../common/StylingConstants"
import { UnAuthApi } from "../common/Apis";
import Toast from '../common/Toast';
import { useNavigate } from 'react-router-dom';
function Register() {
  const navigate = useNavigate()
  const [isActive,setIsActive] = useState("customer")
  const [loading,setLoading] = useState(false)
  const [passwordCopy,setPasswordCopy] = useState("")
  const [customerForm,setCustomerForm] = useState({
    accountId:"",
    name:"",
    email:"",
    contactDetails:"",
    address:"",
    password:""
  })
  const [employeeForm,setEmployeeForm] = useState({
    employeeId:"",
    name:"",
    email:"",
    contactDetails:"",
    branchLocation:"",
    password:""
  })
  const handleCustomerFormChange = (e) => {
    setCustomerForm({
      ...customerForm,
      [e.target.name]: e.target.value
    });
  };
  const handleEmployeeFormChange = (e) => {
    setEmployeeForm({
      ...employeeForm,
      [e.target.name]: e.target.value
    });
  };
  const handleCustomerSubmit = async (e) => {
    e.preventDefault();
    
    UnAuthApi.post("/register/customer",customerForm).then((response) => {
        if(response.status === 200){
          navigate('/');
      } else {
        toast('!Invalid Credantials')
      }
    })
    .catch((error)=>{
          console.error('Error:', error);
          toast('An error occurred while logging in. Please try again later.');
      });
  }
  const handleEmployeeSubmit = (e)=>{
    e.preventDefault();
    
    UnAuthApi.post("/register/employee",employeeForm).then((response) => {
        if(response.status === 200){
          navigate('/');
      } else {
        toast('!Invalid Credantials')
      }
    })
    .catch((error)=>{
          console.error('Error:', error);
          toast('An error occurred while logging in. Please try again later.');
      });
  }
  return (
    <div className="flex min-h-full flex-1 flex-col px-6 justify-center py-12">
      <Toast />
      {isActive==="customer" &&
      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="font-bold text-center text-2xl">Customer Registation Form</p>
            <form className="space-y-3 mt-5" onSubmit={(e)=>{
              if(isActive==="customer"){
                handleCustomerSubmit(e)
              }
            }}>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Account ID</label>
                <input type="text" name="accountId" value={customerForm.accountId} onChange={handleCustomerFormChange} required className={RegisterInputStyle}/>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <input type="text" name="name" value={customerForm.name} onChange={handleCustomerFormChange} required className={RegisterInputStyle}/>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <input type="text" name="email" value={customerForm.email} onChange={handleCustomerFormChange} required className={RegisterInputStyle}/>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Contact Details</label>
                <input type="text" name="contactDetails" value={customerForm.contactDetails} onChange={handleCustomerFormChange} required className={RegisterInputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Address</label>
                <input type="text" name="address" value={customerForm.address} onChange={handleCustomerFormChange} required className={RegisterInputStyle}/>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <input type="password" name="password" value={customerForm.password} onChange={handleCustomerFormChange} required className={RegisterInputStyle}/>
              </div>
              <div>
                <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                <input type="password" name="password" onChange={(e)=>{setPasswordCopy(e.target.value)}} value={passwordCopy}  required className={RegisterInputStyle}/>
              </div>
              <button type="submit" onClick={(e)=>{handleCustomerSubmit(e)}} className={LoginButtonStyle}>Sign in</button>
            </form>
            <div className="py-3 text-center text-sm">
              <button onClick={()=>{
                setIsActive("employee")
                setPasswordCopy("")}} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Register as an Employee
              </button>
            </div>
        </div>}
        {isActive==="employee" &&
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <p className="font-bold text-center text-2xl">Employee Registation Form</p>
        <form className="space-y-3 mt-5" onSubmit={(e)=>{
          if(isActive==="employee"){
            handleEmployeeSubmit(e)
          }
        }}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Employee ID</label>
            <input type="text" name="employeeId" value={employeeForm.employeeId} onChange={handleEmployeeFormChange} required className={RegisterInputStyle}/>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Name</label>
            <input type="text" name="name" value={employeeForm.name} onChange={handleEmployeeFormChange} required className={RegisterInputStyle}/>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <input type="text" name="email" value={employeeForm.email} onChange={handleEmployeeFormChange} required className={RegisterInputStyle}/>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Contact Details</label>
            <input type="text" name="contactDetails" value={employeeForm.contactDetails} onChange={handleEmployeeFormChange} required className={RegisterInputStyle} />
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Branch Location</label>
            <input type="text" name="branchLocation" value={employeeForm.branchLocation} onChange={handleEmployeeFormChange} required className={RegisterInputStyle}/>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <input type="password" name="password" value={employeeForm.password} onChange={handleEmployeeFormChange} required className={RegisterInputStyle}/>
          </div>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            <input type="password" name="password" onChange={(e)=>{setPasswordCopy(e.target.value)}} value={passwordCopy} required className={RegisterInputStyle}/>
          </div>
          <button type="submit" onClick={(e)=>{handleEmployeeSubmit(e)}} className={LoginButtonStyle}>Sign in</button>
        </form>
        <div className="py-3 text-center text-sm">
          <button onClick={()=>{
            setIsActive("customer") 
            setPasswordCopy("")}} className="font-semibold text-indigo-600 hover:text-indigo-500">
              Register as a Customer
          </button>
        </div>
    </div>
        } 
    </div>
  )
}

export default Register