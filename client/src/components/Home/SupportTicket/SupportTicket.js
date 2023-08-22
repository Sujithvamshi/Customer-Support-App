import Tickets from "./Tickets";
import { useState,useEffect,useRef } from "react";
import { AuthApi } from "../../common/Apis";
import { toast } from "../../common/StylingConstants";
import Toast from "../../common/Toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TicketView from "./TicketView";
export default function SupportTicket() {
    const [tickets,setTickets] = useState([]);
    const role = (localStorage.getItem('role').includes("USER"))?"USER":"ADMIN"
    const Fetching = useRef(false)
    const location = useLocation()
    const navigate = useNavigate();
    useEffect(()=>{
      if(!Fetching.current){
        Fetching.current=true
        getTicketData()
      }
    },[])
    const getTicketData = async () => {
      await AuthApi.get("/tickets").then((response)=>{
        if(response.status===200){
          setTickets(response.data)
        }
        else{
          toast("Error Retriving Ticket's")
        }
      })
    .catch((e)=>{
      console.log(e)
    })
  }
  if(location.pathname==="/tickets"){
  return (
      <div>
          <Toast />
          <h1 className="mx-10 my-10 text-center text-2xl font-bold text-gray-900">
          Customer Support Tickets</h1>
          {role=="USER" && <div className="flex flex-col items-center justify-center m-10">
            <button onClick={(e) => {navigate("/tickets/new")}} className="rounded-lg bg-indigo-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                        Create New Ticket</button>
          </div>}
          <div className="flex flex-wrap">
              {tickets.length>0 && <Tickets {...{tickets}} />}
          </div>
      </div>
  )
} else {
  return(
    <div className="px-20 py-10">
    <TicketView />
    </div>
  )
}
}

