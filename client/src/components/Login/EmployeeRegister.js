import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from '../common/StylingConstants';
import { UnAuthApi } from '../common/Apis';

function EmployeeRegister() {
    const navigate = useNavigate()
    const [passwordCopy,setPasswordCopy] = useState("")
    const [employeeForm,setEmployeeForm] = useState({
    employeeId:"",
    name:"",
    email:"",
    contactDetails:"",
    branchLocation:"",
    password:""
  })
  const handleEmployeeFormChange = (e) => {
    setEmployeeForm({
      ...employeeForm,
      [e.target.name]: e.target.value
    });
  };
  
  const handleEmployeeSubmit = (e)=>{
    e.preventDefault();
    if(passwordCopy !== employeeForm.password){
        toast("Password Does Not Match")
        return
    }
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
        <form className="w-3/4 sm:w-2/6 " onSubmit={(e)=>{handleEmployeeSubmit(e)}}>
            <label className="block font-bold text-lg text-center mb-5">Welcome to Employee Registration Page</label>
            <p className=" mt-3 font-normal">Are You a Customer? <a className="font-medium text-maroon" href="/register/customer">Register Here</a></p>
            <label className="block font-normal mb-1">Employee ID</label>
            <input
              type="text" className="border-0  border-b p-1 w-full mb-4"
              name='accountId'
              value={employeeForm.accountId}
              onChange={(e) => handleEmployeeFormChange(e)}
            />
            <label className="block font-normal mb-1">Name</label>
            <input
              type="text" className="border-0  border-b p-1 w-full"
              name='name'
              value={employeeForm.name}
              onChange={(e) => handleEmployeeFormChange(e)}
            />
            <label className="block font-normal mb-1">Email</label>
            <input
              type="email" className="border-0  border-b p-1 w-full"
              name='email'
              value={employeeForm.email}
              onChange={(e) => handleEmployeeFormChange(e)}
            />
            <label className="block font-normal mb-1">Contact Details</label>
            <input
              type="text" className="border-0  border-b p-1 w-full"
              name='text'
              value={employeeForm.contactDetails}
              onChange={(e) => handleEmployeeFormChange(e)}
            />
            <label className="block font-normal mb-1">Branch Location</label>
            <input
              type="text" className="border-0  border-b p-1 w-full"
              name='text'
              value={employeeForm.branchLocation}
              onChange={(e) => handleEmployeeFormChange(e)}
            />
            <label className="block font-normal mb-1">Password</label>
            <input
              type="password" className="border-0  border-b p-1 w-full"
              name='password'
              value={employeeForm.password}
              onChange={(e) => handleEmployeeFormChange(e)}
            />
            <label className="block font-normal mb-1">Confirm Password</label>
            <input
              type="password" className="border-0  border-b p-1 w-full"
              value={passwordCopy}
              onChange={(e) => setPasswordCopy(e.target.value)}
            />
            <button type='submit' onClick={(e)=>{handleEmployeeSubmit(e)}} className=" mt-1 items-center rounded-lg bg-maroon b-700 px-10 py-2 text-center text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
              Register</button>
          </form>
  )
}

export default EmployeeRegister