import React from 'react'

function Help() {
  return (
    <div className='w-2/3 m-auto my-2  bg-white p-4'>
      <p>Invoice Generator provides an invoice template that lets you make professional invoices in one-click. Generated invoices can be sent and paid online.</p>
      <h1 className='mt-6'>Why use Invoice Generator?</h1>
      <ol className='mt-4'>
        <li>Instant invoices</li>
        <p className='mt-2'>We have developed the fastest way to make an invoice using our invoice template. You can make and download an invoice without creating account. If you want to send your invoice it is only one button press away from delivering an e-invoice to your client.</p>
        <li className='mt-4'>Invoice from any device</li>
        <p className='mt-2'>Invoice on-the-go from any device, desktop, tablet, or smartphone.</p>
        <li className='mt-4'>Trusted by millions</li>
        <p className='mt-2'>Every month millions of invoices are generated on Invoice Generator.</p>
        <li className='mt-4'>100% FREE</li>
        <p className='mt-2'>There are no limits. Use it as much as you like.</p>
      </ol>
      <p className='mt-6'>Our objective at Invoice-Generator.com is to make invoicing as simple as possible. We built this invoice generator solely dedicated to this purpose. We want to give you the best possible invoicing experience, and hope it saves you from the many frustrations that come with invoicing.</p>
      <h1 className='mt-6'>How do I use Invoice Generator?</h1>
      <h2 className='mt-4'>Making Invoices</h2>
      <p className='mt-2'>Generating invoices is easy! Fill out the invoice template with all the details you want on your invoice. The invoice editor closely matches what the resulting invoice will look like. Once you have filled in the invoice template you are ready to download or send your invoice.
      </p>
        <h2 className='mt-4'>Sending Invoices</h2>
        <p className='mt-2'>Invoices can be sent to customers as an e-invoice through the Invoiced network. Your invoices are stored securely in the cloud, and you can accept a variety of payment methods that are convenient for your customer.

        </p>
        <h2 className='mt-4'>Payments</h2>
        <p className='mt-2'>If you are using the send invoice feature, you can accept bank account and credit/debit card payments from your buyer. You are also able to add payment instructions to your invoice if you want to accept alternative payment methods.</p>
      
    </div>
  )
}

export default Help