import React from 'react'
import Sidebar from './Sidebar';
import AppForm from './AppForm';
import { useState } from 'react';


function InvoiceForm() {

  const [symbol, setSymbol] = useState("$")

  return (
    <div className=' flex flex-col mx-4   lg:max-3xl:flex-row justify-around  '>    

    <AppForm data={symbol}/>

    <Sidebar data={setSymbol}/>
      

    </div>
  )
}

export default InvoiceForm