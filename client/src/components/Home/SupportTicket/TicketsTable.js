import { Rating, Table } from 'flowbite-react';
import { useNavigate,generatePath } from 'react-router-dom';
import { Badge } from 'flowbite-react';
import { useState } from 'react';
export default function TicketsTable({tickets}) {
  const navigate = useNavigate();
  const badges = {
    "Open":"failure",
    "In Progress":"default",
    "Waiting For Customer":"warning",
    "Resolved":"purple",
    "Closed":"success"
}
const [feedback,setFeedback] = useState({})
const role = localStorage.getItem('role')
  const calculateTimeElapsed = (timestamp) => {
    const currentDate = new Date();
    const createdDate = new Date(timestamp);
    const elapsedMilliseconds = currentDate - createdDate;
    if (elapsedMilliseconds < 1000) {
      return 'Just now';
    } else if (elapsedMilliseconds < 60000) {
      const seconds = Math.floor(elapsedMilliseconds / 1000);
      return `${seconds} Second${seconds !== 1 ? 's' : ''} ago`;
    } else if (elapsedMilliseconds < 3600000) {
      const minutes = Math.floor(elapsedMilliseconds / 60000);
      return `${minutes} Minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (elapsedMilliseconds < 86400000) {
      const hours = Math.floor(elapsedMilliseconds / 3600000);
      return `${hours} Hour${hours !== 1 ? 's' : ''} ago`;
    } else {
      return '24+ Hours ago';
    }
  }
  return (
    <Table hoverable>
      <Table.Head className="text-sm">
        <Table.HeadCell>
        <span className="sr-only">
            timestamp
          </span>
        </Table.HeadCell>
        <Table.HeadCell>
          Account ID
        </Table.HeadCell>
        <Table.HeadCell>
          Employee ID
        </Table.HeadCell>
        <Table.HeadCell>
          Subject
        </Table.HeadCell>
        <Table.HeadCell>
          Description
        </Table.HeadCell>
        <Table.HeadCell>
          Status
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Edit
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {tickets.map(ticket => {
        return (<Table.Row className="bg-white text-black dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-maroon dark:text-white">
          {(ticket.status == "Closed" && role=="ADMIN")?<Rating>
                {Array(ticket.feedback.rating).fill(1).map((el, i) =>
                    <Rating.Star />
                )}
                {Array(5-ticket.feedback.rating).fill(1).map((el, i) =>
                    <Rating.Star filled={false}/>
                )}
                </Rating>:calculateTimeElapsed(ticket.timestamp)}
          </Table.Cell>
          <Table.Cell>
            {ticket.accountId}
          </Table.Cell>
          <Table.Cell>
            {ticket.subject}
          </Table.Cell>
          <Table.Cell>
            {ticket.description}
          </Table.Cell>
          <Table.Cell className="flex">
            <Badge color={badges[ticket.status]}>{ticket.status}</Badge>
          </Table.Cell>
          <Table.Cell>
            {(role==="ADMIN")?  <a className=" text-red-600" onClick={()=> navigate(generatePath("/tickets/"+ticket.id))}>View</a> :
            <a className=" text-red-600" onClick={()=> navigate(generatePath("/tickets/"+ticket.id))}>Edit</a>}
          </Table.Cell>
        </Table.Row>)})}
      </Table.Body>
    </Table>
  )
}

