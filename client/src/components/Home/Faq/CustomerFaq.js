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
      <h1 className="mt-10 text-center text-2xl font-bold text-gray-900">
      Freqently Asked Questions (FAQ's)</h1>

      <div className="mx-auto my-5 w-full max-w-md rounded-2xl bg-white p-2">
        {faqData.map(faq => 
          <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg bg-indigo-100 px-6 py-4 my-5 text-left text-m font-medium text-indigo-900 hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75">
                <span>{faq.question}</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-indigo-900`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-900">
               {faq.answer}
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