
import { useState } from 'react'
import './App.css'
import ChildA from './Component/ChildA'
import {  TheamContext } from './Context/UseContext'


function App() {
 const [theam , setTheam]= useState('light')
 
  return (
   
      <TheamContext.Provider value={{theam , setTheam}} >
     <div id='Container'
     
      style={{
           backgroundColor: theam === 'light' ? '#ffffff' : '#121212',
          color: theam === 'light' ? '#000000' : '#ffffff',
          minHeight: '100vh',
          padding: '20px'
        }}
      >

     <ChildA/>

     </div>
       </TheamContext.Provider>
  
  )
}

export default App
