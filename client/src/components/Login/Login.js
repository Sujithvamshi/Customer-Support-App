import React from 'react'
import { useLocation} from 'react-router-dom';
import Slideshow from './Slideshow';
import CustomerRegister from './CustomerRegister';
import EmployeeRegister from './EmployeeRegister';
import LoginPage from './LoginPage';
function Login() {
  const location = useLocation();
    return (
      <div className="fixed w-screen h-screen">
        <a href='/'><img
            alt="Axis Bank"
            className="mx-5 my-5 h-6 sm:h-9"
            src="https://brandpalettes.com/wp-content/uploads/2021/12/Axis-Bank-Logo-768x209.png"
          /></a>
        <div className="sm:flex p-20 sm:justify-around" >
          <div className="w-2/5">
            <Slideshow />
          </div>
          {location.pathname === "/" && <LoginPage /> }
          {location.pathname === "/register/customer" && <CustomerRegister/>}
          {location.pathname === "/register/employee" && <EmployeeRegister/>}
        </div>
      </div>
    )
  
}

export default Login