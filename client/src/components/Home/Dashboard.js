import { useEffect, useRef, useState } from 'react'
import CustomerFaq from './Faq/CustomerFaq';
import NavbarWithDropdown from './Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import SupportTicket from './SupportTicket/SupportTicket';
import Faqs from './Faq/Faqs';
function Dashboard() {
  const location = useLocation()
  return (
    <div>
      <NavbarWithDropdown />
      {location.pathname==="/dashboard" && <CustomerFaq />}
      {location.pathname.includes("/tickets") && <SupportTicket />}
      {location.pathname=="/faqs" && <Faqs />}
    </div>
  )
}
export default Dashboard;