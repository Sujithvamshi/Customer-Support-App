import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie,HiTicket, HiShoppingBag, HiTable, HiUser } from 'react-icons/hi';

function DefaultSidebar() {
  return (
    <Sidebar className="sticky h-screen w-60 top-0">
      <Sidebar.Items className="mt-10">
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/dashboard"
            icon={HiChartPie}
          >
            <p>
              Dashboard
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="/tickets"
            icon={HiTicket}
            label="10"
            labelColor="dark"
          >
            <p>
              Support Tickets
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiTicket}
            label="3"
          >
            <p>
              Inbox
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiUser}
          >
            <p>
              Users
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiShoppingBag}
          >
            <p>
              Products
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiArrowSmRight}
          >
            <p>
              Sign In
            </p>
          </Sidebar.Item>
          <Sidebar.Item
            href="#"
            icon={HiTable}
          >
            <p>
              Sign Up
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
export default DefaultSidebar;