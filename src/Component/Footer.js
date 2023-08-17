import React from 'react'

function Footer() {
  return (
    <div className='p-10 bg-gray-200 flex justify-around leading-loose'>
        <div>
           <h3 className='text-lg'>USE INVOICE GENERATOR</h3> 
           <ul>
           <a href="../"><li>Invoice Template</li></a> 
            <a href="../help"><li>How to Use</li></a>
           </ul>
        </div>

        <div>
            <h3 className='text-lg'>EDUCATION</h3>
           <a href="../invoiceGuide"><span>Invoiceing Guide</span></a> 
        </div>

        <div>
           <span> $copy 2023 Invoice-Geneartor</span>
           <a href="../term"><h4>Terms Of Use</h4></a>
        </div>
    </div>
  )
}

export default Footer