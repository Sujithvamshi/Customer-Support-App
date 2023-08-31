import { useEffect,useState} from 'react'
import CustomerFaq from './Faq/CustomerFaq';
import NavbarWithDropdown from './Navbar/Navbar';
import { useLocation,useNavigate } from 'react-router-dom';
import SupportTicket from './SupportTicket/SupportTicket';
import Faqs from './Faq/Faqs';
import UpdateProfile from '../Home/Navbar/UpdateProfile';
import FooterWithSocialMediaIcons from '../common/DefaultFooter';
function Dashboard() {
  const [loggedIn,setLoggedIn] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    if(localStorage.getItem("token")){
      setLoggedIn(true)
    }
    else{
      navigate('/login')
    }
  },[])
  return (
    <div>
    {loggedIn && <div>
      <NavbarWithDropdown />
      <div className="w-screen h-screen overflow-scroll">
      {location.pathname==="/dashboard" && <CustomerFaq />}
      {location.pathname.includes("/tickets") && <SupportTicket />}
      {location.pathname=="/faqs" && <Faqs />}
      {location.pathname === "/update-profile" && <UpdateProfile/>}
      </div>
    </div>}
    
    <FooterWithSocialMediaIcons />
    </div>
  )
}
export default Dashboard;