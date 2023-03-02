import React from 'react';
import { useState } from 'react';
import List from './componets/List'
import Data from './componets/Data'
const App = () => {
  const [people,setPeople]=useState(Data);
  const [clr,setClr]=useState('Clear')
  let change=()=>{
    setPeople([])
    clr==='Clear'?setClr('Cleared'):clr=="Cleared"? setClr('Cleared'):setClr('Cleared')
  }
  return (
   <section className='w-full  rounded p-5 h-screen bg-violet-300 flex  flex-col items-center justify-center'>
   
<div className='flex px-5 py-2  bg-violet-400 shadow-xl flex-col justify-center '>
<h1  className='text-black font-semibold text-xl'>{people.length} Birthdays Today..!</h1>
<List people={people}/>
<button onClick={change}  className='px-3 mt-2 flex justify-center py-1 uppercase font-semibold bg-yellow-400 text-black text-xl rounded-lg shadow-xl'>{clr}</button>
</div>




   </section>
  )
}

export default App
