
import { createContext, useState } from 'react';
import './App.css';
import Footer from './Component/Footer';

import Navbar from './Component/Navbar';

export const myContext = createContext()

function App() {

  const [login, setLogin] = useState(false)
  const [symbol, setSymbol] = useState("$")


  console.log(login)

  return (

    <myContext.Provider value={{login:login, setLogin:setLogin , symbol:symbol, setSymbol:setSymbol}}>
      <div className='bg-slate-100'>

        <Navbar />
        <Footer />


      </div>
    </myContext.Provider>

  );
}

export default App;
