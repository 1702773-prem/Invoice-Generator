import React from 'react'
import currencyArray from '../CurrencyData.js'
import  html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf'


function Sidebar(props) {

    console.log(props)

    function generatePdf(){

        const invoiceData = document.querySelector('.invoiceData');
        html2canvas(invoiceData).then(function(data){
           const imageData= data.toDataURL("img/png");
         const document  = new jsPDF("p","mm","a4");
  
         const width= document.internal.pageSize.getWidth();
         const height= document.internal.pageSize.getHeight();

         document.addImage(imageData,"PNG",0,0,width,height);
         document.save("invoice.pdf");


        })
        .catch(function(error){
           alert(error);
        })

      }

      function currencySelected(e)
      {
       // console.log(e.target.selectedIndex)
        const index = e.target.selectedIndex
        const symbol = currencyArray[index][1].symbol
       // console.log(symbol)
       props.data(symbol)


      }

    return (
         
      

        <div className='flex flex-col w-60 gap-5 my-10'>

            <button className='bg-blue-700 px-3 py-2 rounded-sm disabled:bg-blue-300' onClick={generatePdf}>Download Invoice</button>

            <div>
                <label htmlFor="currency" className='text-xl '>Currency</label><br/>

                <select name="" className='border border-slate-300 p-1 my-2 w-60 hover:border-slate-500 ' onChange={currencySelected}>

                    {
                        currencyArray.map(function (cur,i) {

                            return (
                                <option key={i} id={i} value={cur[0] + " " + cur[1].symbol}>{cur[0] + " " + cur[1].symbol}</option>
                            )
                        })
                    }


                </select>
            </div>

            <div>  <label htmlFor="currency" className='text-xl m-1 '>Type</label><br/>

                <select name="" className='border border-slate-300 p-1 my-2 w-60 hover:border-slate-500'>
                    <option value="Invoice">Invoice</option>
                    <option value="Invoice">Reciept</option>


                </select>
            </div>

            <div className='py-2 rounded-sm text-xl hover:bg-green-600'><button>HISTORY</button></div>


        </div>
       
    )
}

export default Sidebar