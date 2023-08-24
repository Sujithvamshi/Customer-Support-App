import { Dropdown,Item, Navbar,Avatar} from 'flowbite-react';
import {HiUser} from "react-icons/hi";
export default function NavbarWithDropdown() {
  const role = (localStorage.getItem('role').includes("USER"))?"USER":"ADMIN"
  return (
    <Navbar
      fluid
      rounded
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
          <Dropdown.Item>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item>
            Settings
          </Dropdown.Item>
          <Dropdown.Item>
            Earnings
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/" className="text-red-700 hover:text-red-900">
            Sign out
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/dashboard">
            Home
        </Navbar.Link>
        <Navbar.Link href="/tickets">
          Tickets
        </Navbar.Link>
        <Navbar.Link href="/faqs">
          FAQ's
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}


