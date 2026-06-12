import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    
    const copyTasks = [...tasks]
    copyTasks.push({
      title,
      details
    })
    setTasks(copyTasks)

    setTitle('')
    setDetails('')
  }
  
  const deletNote = (idx) => {
    const copyTasks = [...tasks]
    copyTasks.splice(idx, 1)
    setTasks(copyTasks)
  }

  return (
    <div className='h-screen lg:flex  bg-black text-white '>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className='flex flex-col lg:w-1/2 p-10 items-start gap-4'>
          <h1 className='text-4xl font-bold'>Add Notes</h1>
          
          <input type="text" 
          placeholder='Enter task here.' 
          className='px-5 py-2 w-full border-2 rounded outline-none font-medium' 
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          /> 

          <textarea type="text" 
          className='px-5 py-2 h-40 w-full border-2 outline-none rounded flex items-start flex-row font-medium' placeholder='Enter details here.' 
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
          /> 

          <button className='bg-white active:bg-gray-200 text-black px-5 py-2 outline-none w-full rounded font-medium'>Add Notes
          </button>
        </form>
        <div className='lg:w-1/2 lg:border-l-2  p-10 '>
          <h1 className='text-4xl font-bold'>My Notes</h1>
          <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
            {tasks.map(function(elem,idx){
              return <div key={idx} className='bg-white text-black h-52 w-40 rounded-2xl p-4 pb-4 pt-9 flex flex-col justify-between items-start'>
                <div>
                <h3 className='leading-tight text-lg font-bold mt-5'>{elem.title}</h3>
                <p className='mt-3 leading-tight text-sm font-medium text-gray-500'>{elem.details}</p>
                </div>
                <button onClick={() => deletNote(idx)} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delet</button>
              </div>
            })}
            
          </div>
        </div>
    </div>
  )
}

export default App
