'use client'

import React, { useState } from 'react'

 
const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submit = (e) =>{
    e.preventDefault()
    setmainTask([...mainTask, {task, desc}])
    console.log(mainTask)
    setdesc("")
    settask("")
  }
  let rendertask = <h2> No Task Available</h2>

  const deleteHandle=(i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

if(mainTask.length>0){
  rendertask= mainTask.map((t,i)=>{
    return(
      <li key={i} className='flex items-center justify-between mb-5'>
        <div className='flex items-center justify-between  w-2/3'>
        <h5 className='text-2xl font-semibold'> {t.task} </h5>
        <h6 className='text-xl font-semibold' > {t.desc} </h6>
      </div>
      <button 
      onClick={()=>{
        deleteHandle(i)
      }}
      className='bg-red-400 text-white px-4 py-2 rounded font-bold' > Delete</button>
      </li>
    )
   })
}

  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-bold text-center ' >To-Do-List</h1>
    <form onSubmit={submit}>
    <input 
    type='text'
    placeholder='Enter Your Task'
    className='text-2xl border-zinc-700 border-4 m-8 px-4 py-2 '
    value={task}
    onChange={(e)=>{
      settask(e.target.value)
    }}
    />
    <input 
    type='text'
    placeholder='Enter Description here'
    className='text-2xl border-zinc-700 border-4 m-8 px-4 py-2 '
    value={desc}
    onChange={(e)=>{
      setdesc(e.target.value)
    }}
    />
    <button
    className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5 '
    >Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-400'>
      <ul>
        {rendertask}
      </ul>
    </div>
 
    </>
  )
}

export default page
