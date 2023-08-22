import { Sidebar } from 'flowbite-react';
import { HiChartPie,HiTicket,HiArrowSmRight, HiUser } from 'react-icons/hi';

function DefaultSidebar() {
  return (
    <Sidebar className="sticky h-screen w-60 top-0">
        {"Hello " + localStorage.getItem("username") + " ( " + localStorage.getItem("role")+" ) "}
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
            labelColor="dark"
          >
            <p>
              Support Tickets
            </p>
          </Sidebar.Item>
          <Sidebar.Item
          href="/faqs"
            icon={HiArrowSmRight}
            labelColor="dark"
          >
            <p>
              FAQ's
            </p>
          </Sidebar.Item>
          <Sidebar.Item
          href="/"
          
            icon={HiUser}
            labelColor="dark"
          >
            <p>
              Sign Out
            </p>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
export default DefaultSidebar;