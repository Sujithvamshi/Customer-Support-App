import React,{useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Slideshow from './Slideshow'
import { Accordion } from 'flowbite-react'
import { AuthApi } from '../common/Apis'
import { toast } from '../common/StylingConstants'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import FooterWithSocialMediaIcons from '../common/DefaultFooter'
function Home() {
    const navigate = useNavigate()
    const [faqData,setFaqData] = useState([]);
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
      <div>
        <div className="w-screen h-screen">
          <div className="fixed  z-10 w-screen bg-maroon py-2 flex justify-between">
            <a href='/'><img
                alt="Axis Bank"
                className="mx-5 my-2 h-6 sm:h-9 bg-mar"
                // src="https://brandpalettes.com/wp-content/uploads/2021/12/Axis-Bank-Logo-768x209.png"
                src="https://www.axisbank.com/assets/images/logo-white.png"
              /></a>
              <div>
              <button onClick={(e) => {navigate("/register/customer")}} className="rounded-lg bg-white m-2 px-4 py-1 mr-10 text-center font-medium text-maroon hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                          Register</button>
              <button onClick={(e) => {navigate("/login")}} className="rounded-lg bg-white m-2 px-4 py-1 mr-10 text-center font-medium text-maroon hover:bg-gray-300 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                          Login</button>
            </div>
          </div>
          <div className="sm:flex sm:justify-around" >
            <div className="w-2/3 h-screen">
              <Slideshow />
            </div>
          </div>
          <a href="#faq"className="absolute w-10 h-10 p-1 bg-gray-300 rounded-full bottom-10 left-1/2">
            <ChevronDownIcon/>
          </a>
        </div>
        <h1 id='faq' className="mb-10 text-center text-2xl font-bold text-gray-900">
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
        <div className="mt-20">
          <FooterWithSocialMediaIcons />
        </div>
      </div>
  )
}

export default Home