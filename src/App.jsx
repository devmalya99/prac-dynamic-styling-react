import { useState } from 'react'

function App() {
  const [task, setTask] = useState('');
  const [inputError,setInputError]=useState(false)

    const handleChange = (e) =>
    {
        console.log(e.target.value)
        setTask(e.target.value)
        setInputError(false)
    }



    const handleClicked=()=>
    {
         console.log(task)
         if(!task.trim())
         {
             setInputError(true)
             
         }
         else
         {
             setInputError(false)
         }
    }


  return (
    <>
    
    <div className="flex .border-solid bg-slate-400 p-2  m-8 " >
            <input 
            onChange={handleChange}
            className={`p-2 m-2 .border-solid border-4 ${inputError? 'border-red-300 bg-red-600' : ""}`}
            type="text" 
            placeholder="Enter Your Task"
            />
            <button 
            disabled={inputError}
            className={`p-2 m-2  rounded-2xl border-2 border-solid border-black-300  px-6 py-3 font-semibold uppercase text-black 
            
            ${ inputError?  "":" bg-red-300 active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none transition-all duration-300  hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black]"}`}
            onClick={handleClicked}
            >
            Add Task
            </button>
        </div>
       
    </>
  )
}

export default App
