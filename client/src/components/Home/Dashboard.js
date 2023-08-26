import { useEffect,useState} from 'react'
import CustomerFaq from './Faq/CustomerFaq';
import NavbarWithDropdown from './Navbar/Navbar';
import { useLocation,useNavigate } from 'react-router-dom';
import SupportTicket from './SupportTicket/SupportTicket';
import Faqs from './Faq/Faqs';
import { toast } from '../common/StylingConstants';
function Dashboard() {
  const [loggedIn,setLoggedIn] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setLoggedIn(true)
    }
    else{
      navigate('/')
      toast("Please Login")
    }
  },[])
  return (
    <div>
    {loggedIn && <div>
      <NavbarWithDropdown />
      {location.pathname==="/dashboard" && <CustomerFaq />}
      {location.pathname.includes("/tickets") && <SupportTicket />}
      {location.pathname=="/faqs" && <Faqs />}
    </div>}
    </div>
  )
}
export default Dashboard;