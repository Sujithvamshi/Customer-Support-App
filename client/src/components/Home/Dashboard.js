import Dialog from './Dialog';
import { useEffect, useState } from 'react'
import {AuthApi} from '../common/Apis';
function Dashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const [userData, setUserData] = useState([]);
  useEffect(()=>{
    AuthApi.get("/home/users").then((response)=>{
        if(response.status==200){
            setUserData(response.data)
        }
      })
  },[])
  return (
    <>
        <Dialog {...{isOpen,setIsOpen,title:"Welcome "+localStorage.getItem("username"),content:"Get Support, Raise and Track Tickets",closeText:"Sure"}}/>
        <div>
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>
                {user.roles.map(role => (
                  <span key={role.id}>{role.name} </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  )
}
export default Dashboard;