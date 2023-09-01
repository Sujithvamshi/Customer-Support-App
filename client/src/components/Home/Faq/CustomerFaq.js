import React, { useEffect, useState } from 'react'
import { Accordion } from 'flowbite-react';
import { AuthApi } from '../../common/Apis';
import { toast } from '../../common/StylingConstants';
import { useNavigate } from 'react-router-dom';

function CustomerFaq() {
    const [faqData,setFaqData] = useState([]);
    const [searchText,setSearchText] = useState("")
    const navigate = useNavigate()
    useEffect(()=>{
        getFaqData()
    },[])
    const getFaqData = async () => {
      await AuthApi.get("/faqs").then((response)=>{
        if(response.status===200){
          setFaqData(response.data)
        }
        else{
          toast("Error Retriving FAQ's")
        }
      })
    .catch((e)=>{
      console.log(e)
    })
  }
  return (
    <div className="w-full h-screen text-center px-20 pt-20 bg-gradient-to-t from-maroon from-10% via-white via-400% to-white to-90% ">
      <form onSubmit={(e)=>{navigate("/tickets/"+searchText)}}>
      <label className="block font-normal mb-1">Track Complaint Ticket</label>
      <input
              type="text"
              className="border rounded p-1 w-1/2 mb-2"
              name='question'
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
        <button onClick={(e)=>{e.preventDefault();navigate("/tickets/"+searchText)}} className="inline-flex mt-5 ml-2 mb-20 items-center rounded-lg bg-maroon px-4 py-2 text-center text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">
        Search</button>
        </form>
      <h1 className="mb-10 text-center text-2xl font-bold text-gray-900">
      Freqently Asked Questions (FAQ's)</h1>
    {faqData.map((faq)=>
      <div className="flex justify-center text-left">
      <Accordion collapseAll className="w-3/4">
      <Accordion.Panel className="w-full">
      <Accordion.Title className="text-black">
          {faq.question}
      </Accordion.Title>
      <Accordion.Content className="text-gray-900">
          {faq.answer}
      </Accordion.Content>
      </Accordion.Panel>
      </Accordion>
      </div>
      )}
    </div>
  )
}

export default CustomerFaq