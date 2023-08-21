import Dialog from './Dialog';
import { useEffect, useState } from 'react'
import CustomerFaq from './Faq/CustomerFaq';
function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
        <Dialog {...{isOpen,setIsOpen,title:"Welcome "+localStorage.getItem("username"),content:"Get Support, Raise and Track Tickets",closeText:"Sure"}}/>
        <CustomerFaq />
    </>
  )
}
export default Dashboard;