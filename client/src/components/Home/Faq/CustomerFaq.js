import React, { useEffect, useRef, useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'
import { AuthApi } from '../../common/Apis';
import { toast } from '../../common/StylingConstants';
import Toast from '../../common/Toast';

function CustomerFaq() {
    const [faqData,setFaqData] = useState([]);
    const Fetching = useRef(false)
    useEffect(()=>{
      if(!Fetching.current){
        Fetching.current=true
        getFaqData()
      }
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
    <div className="w-full px-4 pt-16">
      <Toast />
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
        {faqData.map(faq=>
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span>What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-indigo-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                If you're unhappy with your purchase for any reason, email us
                within 90 days and we'll refund you in full, no questions asked.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        )}
      </div>
    </div>
  )
}

export default CustomerFaq