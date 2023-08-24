import { Dropdown, Navbar,Avatar} from 'flowbite-react';
import {HiUser} from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
export default function NavbarWithDropdown() {
  const role = (localStorage.getItem('role').includes("USER"))?"USER":"ADMIN"
  const navigate = useNavigate()
  return (
    <Navbar
      fluid
      rounded
      className='mt-1'
    >
      <Navbar.Brand href="/dashboard">
        <img
          alt="Axis Bank"
          className="mr-3 h-6 sm:h-9"
          src="https://brandpalettes.com/wp-content/uploads/2021/12/Axis-Bank-Logo-768x209.png"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          inline
          label={<Avatar alt="User settings" img={HiUser} rounded/>}
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {"Hello, " + localStorage.getItem('username')}
            </span>
            <span className="block truncate text-sm font-medium">
              {role}
            </span>
          </Dropdown.Header>
          <Dropdown.Item href="/" className="text-red-700 hover:text-red-900">
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/dashboard">
            <p className="py-2">Home</p>
        </Navbar.Link>
        
        { role === "ADMIN" && <Navbar.Link href="/tickets">
        <p className="py-2">Tickets Panel</p>
        </Navbar.Link>}
        { role==="USER" && <Navbar.Link href="/tickets">
        <p className="py-2">View Tickets</p>
      </Navbar.Link> }
        { role === "ADMIN" && <Navbar.Link href="/faqs">
        <p className="py-2">FAQ Editor</p>
        </Navbar.Link>}
        { role==="USER" && <Navbar.Link>
        <button onClick={(e) => {navigate("/tickets/new")}} className="rounded-lg bg-maroon px-4 py-2 ml-20 text-center font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                        Create New Ticket</button>
      </Navbar.Link> }
      </Navbar.Collapse>
    </Navbar>
  )
}


