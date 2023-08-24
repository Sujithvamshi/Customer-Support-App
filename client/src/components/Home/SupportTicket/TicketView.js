import React, { useEffect, useState } from 'react'
import { useNavigate, useParams,useLocation } from 'react-router-dom'
import { AuthApi } from '../../common/Apis';
import { Badge } from 'flowbite-react';
import { toast } from '../../common/StylingConstants';
import Toast from '../../common/Toast';
import Loading from '../../common/Loading';
function TicketView() {
    const {id} = useParams();
    const [loading,setLoading] = useState(false)
    const location = useLocation()
    const role = (localStorage.getItem('role').includes("USER"))?"USER":"ADMIN"
    const navigate = useNavigate()
    const [ticketData,setTicketData] = useState({status:"Open"})
    const [newTicketData,setNewTicketData]=useState({
        subject:"",
        description:"",
        accountId:localStorage.getItem("username")
    })
    const badges = {
        "Open":"failure",
        "In Progress":"default",
        "Waiting For Customer":"warning",
        "Resolved":"purple",
        "Closed":"success"
    }
    useEffect(()=>{
        if(!location.pathname.includes("new")){
            getTicketData()
        }
    },[id])
    const getTicketData = ()=>{
        AuthApi.get("/tickets/"+id).then((response)=>{
            if(response.status===200){
                setTicketData(response.data)
            }
            else{
                console.log("Ticket Not Found")
            }
        }).catch((e)=>{console.log(e)})}

        const handleTicketChange = (e) => {
            setTicketData({
              ...ticketData,
              [e.target.name]: e.target.value
            });
    };
    const handleNewTicketChange = (e) => {
        setNewTicketData({
          ...newTicketData,
          [e.target.name]: e.target.value
        });
};
const handleNotResolvedChange = (e) => {
  setTicketData({
    ...ticketData,
    [e.target.id]: e.target.name
  });
  handleTicketSubmit(e)
};
const handleResolvedChange = (e) => {
  ticketData.status = "Resolved"
  handleTicketSubmit(e);
};
          const handleTicketSubmit = async (e) => {
            e.preventDefault();
            setLoading(true)
            await AuthApi.put("/tickets/"+id,ticketData).then((response) => {
              console.log(ticketData)
                if(response.status === 200){
                  setLoading(false)
                  toast("Successully Updated Ticket")
                  navigate('/tickets');
                  navigate(0);
              } else {
                setLoading(false)
                toast('!Invalid Credantials')
              }
            })
            .catch((error)=>{
                  setLoading(false)
                  console.error('Error:', error);
                  toast('An error occurred while logging in. Please try again later.');
              });
          }
          const handleNewTicketSubmit = async (e) => {
            e.preventDefault();
            setLoading(true)
            AuthApi.post("/tickets",newTicketData).then((response) => {
                if(response.status < 205){
                  setLoading(false)
                  toast("Successully Updated Ticket")
                  navigate('/tickets');
                  navigate(0)
              } else {
                setLoading(false)
                toast('!Invalid Credantials')
              }
            })
            .catch((error)=>{
                  setLoading(false)
                  console.error('Error:', error);
                  toast('An error occurred while logging in. Please try again later.');
              });
          }
          const deleteTicket = async (e) => {
            e.preventDefault();
            AuthApi.delete("/tickets/"+ id).then((response) => {
                if(response.status === 200){
                  console.log("Successully Deleted Ticket")
                  navigate('/tickets');
                  navigate(0)
              } else {
                console.error('Not deleted');
              }
            })
            .catch((error)=>{
                  console.error('Error:', error);
              });
          }
    if(location.pathname.includes("new")){
        return(
            <form className="max-w-lg"  onSubmit={(e)=>{handleNewTicketSubmit(e)}}>
            <Toast />
            {loading && <Loading />}
            <div className="flex justify-center al">
                <div className="my-10 text-center text-3xl font-bold text-gray-900">
                    Customer Support Ticket </div>
                    <Badge className=" mx-3 my-10 text-center text-2xl font-bold text-gray-900" color={badges.status}>#{id}</Badge>
                </div>
                <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Raise New Support Ticket</h2>            

                <div className="sm:col-span-4">
                <label htmlFor="subject" className="block text-sm font-medium leading-6 text-gray-900">
                    Subject
                </label>
                <div className="mt-2">
                    <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={newTicketData.subject}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e)=>{handleNewTicketChange(e)}}
                    />
                </div>
            </div>
            <div className="mt-2 col-span-full">
              <label htmlFor="description" className="block text-sm font-normal leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={newTicketData.comment}
                  onChange={(e)=>{handleNewTicketChange(e)}}
                />
              </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={()=>{navigate("/tickets");navigate(0)}} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancel
                    </button>
                    <button
                    onClick={(e)=>{handleNewTicketSubmit(e)}}
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Create Ticket
                    </button>
                </div>
            </form>
        )
    }else{
  return (
  <form className="w-full"  onSubmit={(e)=>{handleTicketSubmit(e)}}>
    <Toast />
    {loading && <Loading />}
    <div className="flex justify-center al">
    <div className="my-3 text-center text-3xl font-bold text-gray-900">
        Customer Support Ticket </div>
        <Badge className=" mx-3 my-3 text-center text-2xl font-bold text-gray-900" color={badges.status}>#{id}</Badge>
    </div>
    <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <p className="text-lg">Subject:</p>
          <h2 className="text-xl font-semibold text-gray-900">{ticketData.subject}</h2>
          <p className="mt-5 text-lg">Description:</p>
          <p className="text-gray-600">{ticketData.description}.</p>
            <p className="mt-5 text-lg">Status: <p className="font-extrabold" name="status" onChange={(e)=>{handleTicketChange(e)}}>{ticketData.status}</p></p>
            <div className="sm:col-span-3">
                {role==="ADMIN" && <div>
                    <p className=" mt-5 text-lg">Update Status </p>
                    <div className="mt-2">
                        <select
                        id="country"
                        name="status"
                        autoComplete="country-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                        value={ticketData.status}
                        onChange={(e)=>{handleTicketChange(e)}}>
                        <option>Open</option>
                        <option>In Progress</option>
                        <option>Waiting For Customer</option>
                        <option>Resolved</option>
                        <option>Closed</option>
                        </select>
                    </div>
                    <div className="mt-2 col-span-full">
                    <p htmlFor="about" className="mt-5 text-lg">Comment</p>
                    <div className="mt-2">
                        <textarea
                        id="about"
                        name="employeeComment"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={ticketData.employeeComment}
                        onChange={(e)=>{handleTicketChange(e)}}/>
                    </div>
                </div>
            </div>}
            {role==="USER" && ticketData.employeeComment!=null && ticketData.employeeComment.length > 0 && <div><p className=" mt-5 text-lg">Employee Comment:</p>
            <p className="text-lg text-gray-600" name="employeeComment" >{ticketData.employeeComment}</p></div>
            }
            {role==="USER" && ticketData.status==="Waiting For Customer" && 
            <div><p className=" mt-5 text-lg">Comment:</p>
                    <div className="mt-2">
                        <textarea
                        id="about"
                        name="customerComment"
                        rows={3}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        value={ticketData.customerComment}
                        onChange={(e)=>{handleTicketChange(e)}}/>
                    </div></div>
            }
            {role==="ADMIN" && ticketData.customerComment!=null && ticketData.customerComment.length > 0 && <div><p>Customer Comment</p>
            <p className=" mt-5 text-lg text-gray-600" name="customerComment" >{ticketData.customerComment}</p></div>
            }
        </div>
        </div>   
    </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button onClick={()=>{navigate("/tickets");navigate(0)}} type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        {role==="ADMIN" && <button
        onClick={(e)=>{handleTicketSubmit(e)}}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>}
        {role==="USER" && ticketData.status === "Waiting For Customer" && <a
        onClick={(e)=>{ticketData.status = "Resolved";handleTicketSubmit(e);}}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Resolved
        </a>}
        {role==="USER" && ticketData.status === "Waiting For Customer" && <a
        onClick={(e)=>{ticketData.status = "Open";handleTicketSubmit(e);}}
          type="submit"
          className="rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
        >
          Not Resolved
        </a>}
        {role==="USER" && <button 
        onClick={(e)=>{deleteTicket(e)}}
          type="button"
          className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Delete
        </button>}
        
      </div>
    </form>
  )
}
}

export default TicketView