import React from 'react'
import Sidebar from './Sidebar';
import AppForm from './AppForm';
import { useState } from 'react';


function InvoiceForm() {

  const [symbol, setSymbol] = useState("$")

  return (
    <div className='flex justify-around '>


    <AppForm data={symbol}/>

  <Sidebar data={setSymbol}/>
      

    </div>
  )
}

export default InvoiceForm