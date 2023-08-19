
import { createContext, useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';

export const myContext = createContext()

function App() {

  const [login, setLogin] = useState(false)
  const [width, setwidth] = useState(window.innerWidth)

//  console.log(login)

  return (

    <myContext.Provider value={{login, setLogin,width,setwidth }}>
      <div className='bg-slate-100'>

        <Navbar />
        <Footer />

      </div>
    </myContext.Provider>

  );
}

export default App;
