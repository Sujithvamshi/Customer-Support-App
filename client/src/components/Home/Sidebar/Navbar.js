'use client';

import { Dropdown, Navbar } from 'flowbite-react';

export default function NavbarWithDropdown() {
  return (
        <Navbar
        fluid
        rounded
        className="fixed top-0 h-screen bg-indigo-100"
        >
        <div className="flex md:order-2">
            <Dropdown
            inline
            label={<img alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded/>}
            >
            <Dropdown.Header>
                <span className="block text-sm">
                Bonnie Green
                </span>
                <span className="block truncate text-sm font-medium">
                name@flowbite.com
                </span>
            </Dropdown.Header>
            <a>
                Dashboard
            </a>
            <a>
                Settings
            </a>
            <a>
                Earnings
            </a>
            <Dropdown.Divider />
            <a>
                Sign out
            </a>
            </Dropdown>
            <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
            <Navbar.Link
            active
            href="#"
            >
            <p>
                Home
            </p>
            </Navbar.Link>
            <Navbar.Link href="#">
            About
            </Navbar.Link>
            <Navbar.Link href="#">
            Services
            </Navbar.Link>
            <Navbar.Link href="#">
            Pricing
            </Navbar.Link>
            <Navbar.Link href="#">
            Contact
            </Navbar.Link>
        </Navbar.Collapse>
        </Navbar>
  )
}


