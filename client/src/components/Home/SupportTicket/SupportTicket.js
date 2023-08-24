import Tickets from "./Tickets";
import { useState,useEffect,useRef } from "react";
import { AuthApi } from "../../common/Apis";
import { toast } from "../../common/StylingConstants";
import Toast from "../../common/Toast";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import TicketView from "./TicketView";
import { Button, Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';
import { statuses } from "../../common/Constants";
export default function SupportTicket() {
    const [tickets,setTickets] = useState([]);
    const role = (localStorage.getItem('role').includes("USER"))?"USER":"ADMIN"
    const Fetching = useRef(false)
    const location = useLocation()
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("All");
    useEffect(()=>{
        getTicketData()
    },[activeTab])
    const getTicketData = async () => {
      const queryArr = []
      if(activeTab!=="All"){
        queryArr.push("status="+activeTab)
      }
      if(role==="USER"){
        queryArr.push("accountId="+localStorage.getItem('username'))
      }
      await AuthApi.get("/tickets?"+queryArr.join("&")).then((response)=>{
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
      <div className="px-10">
          <Toast />
          <h1 className="my-10 text-2xl font-bold text-gray-900">
          Support Tickets</h1>
          {role=="USER" && <div className="m-10">
            <button onClick={(e) => {navigate("/tickets/new")}} className="rounded-lg bg-indigo-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                        Create New Ticket</button>
          </div>}
      <Tabs.Group className="w-full"
        onActiveTabChange={(tab) => {setActiveTab(statuses[tab]);console.log(activeTab)}}
      >
        <Tabs.Item active title="All">
          <div className="flex flex-wrap">
          {tickets.length>0 ? <Tickets {...{tickets}} /> : <>No {activeTab} Tickets.</>}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Open">
          <div className="flex flex-wrap">
              {tickets.length>0 ? <Tickets {...{tickets}} /> : <>No {activeTab} Tickets.</>}
          </div>
        </Tabs.Item>
        <Tabs.Item title="In Progress">
          <div className="flex flex-wrap">
          {tickets.length>0 ? <Tickets {...{tickets}} /> : <>No {activeTab} Tickets.</>}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Waiting For Customer">
          <div className="flex flex-wrap">
          {tickets.length>0 ? <Tickets {...{tickets}} /> : <>No {activeTab} Tickets.</>}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Resolved">
          <div className="flex flex-wrap">
          {tickets.length>0 ? <Tickets {...{tickets}} /> : <>No {activeTab} Tickets.</>}
          </div>
        </Tabs.Item>
        <Tabs.Item title="Closed">
          <div className="flex flex-wrap">
          {tickets.length>0 ? <Tickets {...{tickets}} /> : <>No {activeTab} Tickets.</>}
          </div>
        </Tabs.Item>
      </Tabs.Group>
      </div>
  )
} else {
  return(
    <div className="px-20 py-10">
    <TicketView />
    </div>
  )
    }}

