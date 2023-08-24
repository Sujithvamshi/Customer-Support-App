import React,{useState} from 'react'
import { UnAuthApi } from '../common/Apis';
import { useNavigate } from 'react-router-dom';
import { toast } from '../common/StylingConstants';
function CustomerRegister() {
    const navigate = useNavigate();
    const [passwordCopy,setPasswordCopy] = useState("")
    const [customerForm,setCustomerForm] = useState({
        accountId:"",
        name:"",
        email:"",
        contactDetails:"",
        address:"",
        password:""
    })
    const handleCustomerFormChange = (e) => {
        setCustomerForm({
          ...customerForm,
          [e.target.name]: e.target.value
        });
      };

    const handleCustomerSubmit = async (e) => {
        e.preventDefault();
        if(passwordCopy !== customerForm.password){
            toast("Password Does Not Match")
            return
        }
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
    return (
        <form className="w-3/4 items-center sm:w-2/6 " onSubmit={(e)=>{handleCustomerSubmit(e)}}>
            <label className="block font-bold text-lg text-center mb-5">Welcome to Customer Registration Page</label>
            <p className=" mt-3 font-normal">Are You an Employee? <a className="font-medium text-maroon" href="/register/employee">Register Here</a></p>
            <label className="block font-normal mb-1">Account ID</label>
            <input
              type="text" className="border-0  border-b p-1 w-full mb-4"
              name='accountId'
              value={customerForm.accountId}
              onChange={(e) => handleCustomerFormChange(e)}
            />
            <label className="block font-normal mb-1">Name</label>
            <input
              type="text" className="border-0  border-b p-1 w-full"
              name='name'
              value={customerForm.name}
              onChange={(e) => handleCustomerFormChange(e)}
            />
            <label className="block font-normal mb-1">Email</label>
            <input
              type="email" className="border-0  border-b p-1 w-full"
              name='email'
              value={customerForm.email}
              onChange={(e) => handleCustomerFormChange(e)}
            />
            <label className="block font-normal mb-1">Contact Details</label>
            <input
              type="text" className="border-0  border-b p-1 w-full"
              name='text'
              value={customerForm.contactDetails}
              onChange={(e) => handleCustomerFormChange(e)}
            />
            <label className="block font-normal mb-1">Address</label>
            <input
              type="text" className="border-0  border-b p-1 w-full"
              name='text'
              value={customerForm.address}
              onChange={(e) => handleCustomerFormChange(e)}
            />
            <label className="block font-normal mb-1">Password</label>
            <input
              type="password" className="border-0  border-b p-1 w-full"
              name='password'
              value={customerForm.password}
              onChange={(e) => handleCustomerFormChange(e)}
            />
            <label className="block font-normal mb-1">Confirm Password</label>
            <input
              type="password" className="border-0  border-b p-1 w-full"
              value={passwordCopy}
              onChange={(e) => setPasswordCopy(e.target.value)}
            />
            <button type='submit' onClick={(e)=>{handleCustomerSubmit(e)}} className=" mt-1 items-center rounded-lg bg-maroon b-700 px-10 py-2 text-center text-base font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
              Register</button>
          </form>
    )
}

export default CustomerRegister