import React, { useEffect, useState } from 'react'
import { Card,Dropdown,Badge } from 'flowbite-react'
import { useNavigate,generatePath } from 'react-router-dom';
import { AuthApi } from '../../common/Apis';
function Tickets({tickets}) {
    const [id,setId] = useState(false);
    const navigate = useNavigate();
    const handleProceed = () => {
        id && navigate(generatePath("/tickets/:id", { id }));
      };
    const badges = {
        "Open":"failure",
        "In Progress":"default",
        "Waiting For Customer":"warning",
        "Resolved":"purple",
        "Closed":"success"
    }
    useEffect(()=>{
        handleProceed();
    },[id])
    const deleteTicket = async (e) => {
        e.preventDefault();
        AuthApi.delete("/tickets/"+ e.target.name).then((response) => {
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
  return (
    <div className="flex flex-wrap" >
        {tickets.map(ticket =>{
            ticket.subject = (ticket.subject.length > 30) ? ticket.subject.substring(0,29)+".....":ticket.subject
            ticket.description = (ticket.description.length > 100) ? ticket.description.substring(0,100)+".....":ticket.description
            return(
        <Card className="mx-5 my-2.5 max-w-md">
            <div className="flex justify-between">
                <Badge color={badges[ticket.status]}>{ticket.status}</Badge>
                <Dropdown inline label="">
                    <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    href={"/tickets/"+ticket.id}>View Ticket</a>
                    <button name={ticket.id} className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={(e)=>{deleteTicket(e)}}>Delete</button>
                </Dropdown>
            </div>
            <div className="flex flex-col items-center">
                <h5 className="mb-1 text-l font-medium text-gray-900 dark:text-white">
                    {ticket.subject}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {ticket.description}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                    <button onClick={(e) => {setId(ticket.id)}} className="inline-flex items-center rounded-lg bg-indigo-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
                        Update Status</button>
                    <button onClick={(e) => {setId(ticket.id)}} className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                        Add Comment</button>
                </div>
            </div>
        </Card>
        )})}
    </div>
  )
}

export default Tickets