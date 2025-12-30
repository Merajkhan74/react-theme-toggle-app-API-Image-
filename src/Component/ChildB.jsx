
import { useContext } from 'react'
import {  TheamContext} from '../Context/UseContext'
const ChildB = () => {
   
    const {theam, setTheam}= useContext(TheamContext)
    // const { theam, setTheam } = useContext(TheamContext)


        function clickHancle(){
            if(theam === 'light')
                setTheam('dark')
            else
                setTheam('light')
            }
            
  return (
    <div className='flex justify-end items-center mb-6'>
      {/* <h1>Child B</h1> */}
      <button type='button' onClick={clickHancle}
      className= ' justify-end bg-gray-600  p-3 rounded-2xl text-white hover:bg-blue-500 '
      >Toggle Theme</button>{" "}
       {/* {theam} */}



      
    </div>
  )
}

export default ChildB