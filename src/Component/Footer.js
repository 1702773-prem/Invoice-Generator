import React from 'react'

function Footer() {
   return (
      <div className='p-6 bg-gray-200 flex flex-col gap-2 text-xs sm:max-3xl:flex-row justify-around sm:max-3xl:text-lg '>
         <div>
            <h3 className='font-semibold'>USE INVOICE GENERATOR</h3>
            <ul>
               <a href="../"><li>Invoice Template</li></a>
               <a href="../help"><li>How to Use</li></a>
            </ul>
         </div>

         <div>
            <h3 className='font-semibold'>EDUCATION</h3>
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