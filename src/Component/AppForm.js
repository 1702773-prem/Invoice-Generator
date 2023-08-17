import React, { useEffect, useState } from 'react'


function AppForm(props) {


    const [logoSrc, setLogoSrc] = useState("")

    const [item, setItem] = useState({
        item: "",
        quantity: 0,
        rate: 0,
        amount: 0,

    })

    const [itemData, setItemData] = useState([])

    const [subtotal, setSubTotal] = useState(0)

    const [total, setTotal] = useState(subtotal)

    const [taxField, setTaxField] = useState(false)
    const [taxBtn, setTaxBtn] = useState(true)

    function imageChange(e) {

        let files = e.target.files

        if (FileReader && files && files.length) {
            var fr = new FileReader()
            fr.onload = function () {
                setLogoSrc(fr.result)
            }

            fr.readAsDataURL(files[0])

            console.log(fr)


        }
    }

    const [input, setInput] = useState({
        invoice: "INVOICE",
        billTo: "Bill To",
        shipTo: "Ship To",
        date: "Date",
        paymentTerms: "Payment terms",
        dueDate: "Due Date",
        poNumber: "PO Number",
        item: "Item",
        quantity: "Quantity",
        rate: "Rate",
        amount: "Amount",
        notes: "Notes",
        terms: "Terms",
        subtotal: "Subtotal",
        total: "Total",
        amountPaid: "Amount Paid",
        balanceDue: "Balance Due",
        invoiceNumber: 1,
        paid: 0,
        due: 0,
        tax:0


    })


    function changeInput(e) {

        e.preventDefault()
        const value = e.target.value
        setInput({ ...input, [e.target.name]: value })

    }


    function InputData(e) {

        setItem({ ...item, [e.target.name]: e.target.value })

    }

    function calculate() {

        let total = item.quantity * item.rate

        setItem({ ...item, amount: total })


    }



    console.log(input)



    function addItemRow(e) {
        e.preventDefault()

        setItemData([...itemData, item])

        const t = subtotal+item.amount

        setSubTotal(t)

        if(!input.tax)
        {
            const dueleft = t - input.paid

        setInput({ ...input, "due": dueleft })
        setTotal(t)
        }

        else
        {
            const tax = t+t*input.tax/100
        const dueleft = tax - input.paid
        setInput({ ...input, "due": dueleft })
    
        setTotal(tax)
        }

        setItem({
            item: "",
            quantity: 0,
            rate: 0,
            amount: 0
        })

    }

    function subTotal() {
        let sum = itemData.reduce(function myFunction(total, value) {
            return total + value.amount;
        }, 0);

        setSubTotal(sum)
       if(!input.tax)
       {
        setTotal(sum) 
        setInput({ ...input, "due": sum })
       }
       else{
   
        const tax = sum+sum*input.tax/100
        const dueleft = tax - input.paid
        setInput({ ...input, "due": dueleft })
    
        setTotal(tax)

       }


        
        
    }



    function changeInputData(e) {
        console.log(e)
        const id = parseInt(e.target.id)
        console.log(id)
        itemData[id] = { ...itemData[id], [e.target.name]: e.target.value }

        let total = itemData[id].quantity * itemData[id].rate

        console.log(total)
        itemData[id] = { ...itemData[id], "amount": total }

        subTotal()




        // setItemData([...itemData, itemData[id]= { ...itemData[id], [e.target.name] : e.target.value }] )

    }

    function dueLeft(e) {


        const dueleft = total - e.target.value
        setInput({ ...input, "due": dueleft, "paid": e.target.value })


    }

    function deleteItem(e) {

        // console.log(e.target.id)

        const i = e.target.id

        if (i === 'default') {
            const input = document.querySelector('#input')
            input.style.display = 'none'
        }

        else {
            const items = [...itemData]

            items.splice(i, 1)

            setItemData(items)
            const a = subtotal - itemData[i].amount
            setSubTotal(a)
            
           

            if(!input.tax)
            {
                const dueleft = subtotal - itemData[i].amount
                setInput({ ...input, "due": dueleft })
                setTotal(a)
            }
            else{
   
                const tax = a+a*input.tax/100
                const dueleft = tax - input.paid
                setInput({ ...input, "due": dueleft })
            
                setTotal(tax)
        
               }
        

        }


    }
    

    function addTaxField(e){
        e.preventDefault()
        setInput({ ...input, "tax": 0 })
        setTaxField(true)
        setTaxBtn(false)
        
    }

    
    function deleteTaxField(){
        setTotal(subtotal)
        const dueleft = subtotal - input.paid
        console.log(dueleft)
        setInput({ ...input, "due": dueleft })
        setTaxField(false)
        setTaxBtn(true)
        
    }

    function taxCalculate(e)
    {
        const value = e.target.value 

        const tax = subtotal+subtotal*value/100
        const dueleft = tax - input.paid
        setInput({ ...input, "due": dueleft, "tax": value })
    
        setTotal(tax)


    }

    console.log(itemData)



    return (
        <div className='bg-white w-3/5 border-2 border-gray-300 my-5 invoiceData'>
            <form action="" className='m-3'>

                <div className='flex justify-between items-center '>


                    <div className='border-2 border-dashed border-gray-300 p-2 rounded-md w-44 h-40 flex justify-center relative' >
                        {!logoSrc && <label htmlFor="fileInput" className="flex items-center space-x-2 cursor-pointer">

                            <div className='flex items-center icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M3 2a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V7.414a1 1 0 00-.293-.708l-4.647-4.646A2 2 0 0012.586 2H3zM14 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zm-3 3a1 1 0 112 0V7a1 1 0 11-2 0v4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-600">Choose a file</span>
                            </div>
                        </label>}
                        <input id="fileInput" type="file" className='sr-only' onChange={imageChange} />
                        {logoSrc && <div>
                            <img src={logoSrc} alt="" className='h-full w-full' />
                            <button className='cross absolute top-1 right-1 ' onClick={() => setLogoSrc("")}>❌</button>
                        </div>}
                    </div>

                    <div>

                        <div>
                            <input type="text" name='invoice' className='my-4 text-3xl py-2 text-right' onChange={changeInput} value={input.invoice} />
                        </div>
                        <div className='float-right'>
                            <input type="text" value="#" disabled className='w-12 border-2 border-gray-300 p-3 text-right' />
                            <input type="text" name='invoiceNumber' value={input.invoiceNumber} className='border-2 border-gray-300 p-3 text-right' onChange={changeInput} />
                        </div>

                    </div>


                </div>

                <div className='flex items-center justify-between w-full'>
                    <div>
                        <div className='my-2'>
                            <textarea name="" id="" className='border-2 border-gray-300 p-3' placeholder='Who is this invoice from? (required)' required></textarea>
                        </div>

                        <div className='flex gap-8'>
                            <div>
                                <div>
                                    <input type="text" name='billTo' value={input.billTo} className='p-2' onChange={changeInput} />
                                </div>
                                <div>
                                    <textarea name="" id="" className=' mt-4 border-2 border-gray-300 p-2' placeholder='Who is this invoice from? (required)' required></textarea>
                                </div>

                            </div>

                            <div>
                                <div>
                                    <input type="text" name='shipTo' value={input.shipTo} className='p-2' onChange={changeInput} />
                                </div>
                                <div>
                                    <textarea name="" id="" className=' mt-4 border-2 border-gray-300 p-2' placeholder='(optional)'></textarea>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>

                        <div className='mt-1'>
                            <input type="text" name='date' value={input.date} className='p-1 text-right mr-1' onChange={changeInput} />
                            <input type="date" className=' w-44 border-2 border-gray-300 p-1 text-right' />
                        </div>

                        <div className='mt-1'>
                            <input type="text" name='paymentTerms' value={input.paymentTerms} className='p-1 text-right mr-1' onChange={changeInput} />
                            <input type="text" className='w-44 border-2 border-gray-300 p-1 text-right' />
                        </div>
                        <div className='mt-1'>
                            <input type="text" name='dueDate' value={input.dueDate} className='p-1 text-right mr-1' onChange={changeInput} />
                            <input type="date" className='w-44 border-2 border-gray-300 p-1 text-right' />
                        </div>
                        <div className='mt-1'>
                            <input type="text" name='poNumber' value={input.poNumber} className='p-1 text-right mr-1' onChange={changeInput} />
                            <input type="text" className='w-44 border-2 border-gray-300 p-1 text-right' />
                        </div>
                    </div>

                </div>

                <div>

                    <table className='mt-2'>
                        <thead >
                            <tr>
                                <th className='w-3/5'><input type="text" name='item' value={input.item} className='bg-black text-white px-2 w-full' onChange={changeInput} /></th>
                                <th><input type="text" name='quantity' value={input.quantity} className='bg-black text-white px-2 w-24' onChange={changeInput} /></th>
                                <th><input type="text" name='rate' value={input.rate} className='bg-black text-white px-2  w-24' onChange={changeInput} /></th>
                                <th><input type="text" name='amount' value={input.amount} className='bg-black text-white px-2 w-24' onChange={changeInput} /></th>
                            </tr>
                        </thead>



                        {
                            itemData.map(function (item, i) {

                                return (

                                    <tbody className='border-2'>
                                        <tr key={i}>
                                            <td className='border-2 indeterminate:  p-2 w-3/5'><input type="text" id={i + "item"} name='item' placeholder="Description of service or product..." value={itemData[i].item} className='outline-none w-full ' onChange={changeInputData} /></td>
                                            <td className='border-2 '><input type="number" name='quantity' id={i + "quantity"} value={itemData[i].quantity} className=' outline-none  w-20  ' onChange={changeInputData} onKeyUp={calculate} /></td>
                                            <td className='border-2  '><span className='pr-2'>{props.data}</span><input type="number" name='rate' id={i + "rate"} value={itemData[i].rate} className=' outline-none  w-20 ' onChange={changeInputData} onKeyUp={calculate} /></td>
                                            <td className='border-2 '><span className='pr-2'>{props.data}</span><input type="number" name='amount' disabled value={itemData[i].amount} className=' outline-none  w-20 ' /></td>
                                            <td ><span id={i} className='ml-4 cursor-pointer' onClick={deleteItem} >❌</span></td>
                                        </tr>

                                    </tbody>
                                )
                            })
                        }


                        <tbody className='border-2' id='input'>
                            <tr >
                                <td className='border-2  p-2 w-3/5'><input type="text" name='item' placeholder="Description of service or product..." value={item.item} className='outline-none w-full ' onChange={InputData} /></td>
                                <td className='border-2 '><input type="number" name='quantity' value={item.quantity} className=' outline-none  w-20  ' onChange={InputData} onKeyUp={calculate} /></td>
                                <td className='border-2  '><span className='pr-2'>{props.data}</span><input type="number" name='rate' value={item.rate} className=' outline-none  w-20 ' onChange={InputData} onKeyUp={calculate} /></td>
                                <td className='border-2 '><span className='pr-2'>{props.data}</span><input type="number" disabled value={item.amount} className=' outline-none  w-20 ' /></td>
                                <td  ><span id='default' className='ml-4 cursor-pointer' onClick={deleteItem}>❌</span></td>
                            </tr>



                        </tbody>

                    </table>
                </div>

                <div>
                    <button className='bg-green-700 mt-2 p-1 rounded-md' onClick={e => addItemRow(e)} >Add Item</button>
                </div>

                <div className='mt-4 flex justify-between'>
                    <div className='w-2/4'>
                        <input type="text" name='notes' value={input.notes} className='p-2' onChange={changeInput} /> <br />
                        <textarea name="" id="" className=' mt-1 border-2 border-gray-300 p-2 w-full' placeholder='Notes- any relevant information not already covered'></textarea> <br />

                        <input type="text" name='terms' value={input.terms} className='mt-2 p-2' onChange={changeInput} />  <br />
                        <textarea name="" id="" className=' mt-1 border-2 border-gray-300 p-2 w-full' placeholder='Terms and condition - late fees , payment methods, delivery schedule'></textarea> <br />

                    </div>

                    <div >
                        <div className='mt-4'>
                            <input type="text" name="subtotal" id="" value={input.subtotal} onChange={changeInput} />
                            <input type="text" name="subTotalInput" id="" disabled value={props.data + " " + subtotal} className=' w-24 p-1' />
                        </div>
                        {
                            taxBtn && (
                                <div className='bg-green-400 rounded-md flex items-center w-14 mt-4'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16"> <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/> </svg>
                            <button className= ' px-1 text-lg ' onClick={e => addTaxField(e)} > Tax</button>
                        </div>
                            )
                        }
                        { taxField && (
                         <div className='mt-4 '>
                         <input type="text" value="Tax" />
                         <input type="number" name="tax" id=""  value={input.tax} className=' w-20 p-1' onChange={taxCalculate} /> <span>%</span><span id='default' className='ml-4 cursor-pointer' onClick={deleteTaxField}>❌</span>
                     </div>
                        )
                        }
                        <div className='mt-4'>
                            <input type="text" name="total" id="" value={input.total} onChange={changeInput} />
                            <input type="text" name="totalInput" id="" disabled value={props.data + " " + total} className=' w-24 p-1' />
                        </div>
                        <div className='mt-4'>
                            <input type="text" name="amountPaid" id="" value={input.amountPaid} onChange={changeInput} />
                            <span className='pr-2'>{props.data}</span><input type="number" name='paid' value={input.paid} className=' w-24 p-1' onChange={dueLeft} />
                        </div>
                        <div className='mt-4'>
                            <input type="text" name="balanceDue" id="" value={input.balanceDue} onChange={changeInput} />
                            <input type="text" name="due" id="" disabled value={props.data + " " + input.due} className=' w-24 p-1' />
                        </div>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default AppForm