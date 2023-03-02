import React from 'react'

const List = ({people}) => {
  return (
    people.map((person)=>{
return(
<section className='flex mt-4  gap-4 px-3 py-2 bg-slate-300 w-64 shadow-xl rounded-xl'>
<div>
    <img className='w-14 rounded-[100%] h-14'  src={person.image} />
</div>
<div>
<h1 className='text-black font-semibold text-xl'>{person.name}</h1>
<p  className='text-slate-600 font-semibold text-lg'>{person.age} years</p>
</div>

</section>



)


    })



  )
}

export default List
