import { useState,useEffect } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Dashboard from "./Dashboard"
import Editor from "./Editor"
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const Home =()=>{
    const [currDate , setCurrDate] = useState(null)
    const {dispatch} = useAuthContext()
    const [idDate,setIdDate] =useState(null) 
    const [showCal,setShowCal] = useState(false)
    const logoutHandler =()=>{
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'})
    }
    useEffect(()=>{
        const date = currDate?.toString().substring(0,15).split(' ').join('')
        setIdDate(date)
        setShowCal(false)
    },[currDate])
    return (
        <div className="App w-8/12 mx-auto flex flex-col items-center">
            <div className='flex items-center my-3 content-between'>
            <button className='border border-white bg-black border-solid border-2 text-white p-4 rounded-lg hover:bg-yellow-50 hover:text-black hover:border-3 hover:border-black hover:border-solid hover:transition-all hover:duration-300' onClick={()=> console.log(setShowCal(!showCal))}>{showCal ? "Hide" : "Add New"}</button>
            <button className='border border-white bg-black border-solid border-2 text-white p-4 rounded-lg hover:bg-yellow-50 hover:text-black hover:border-3 hover:border-black hover:border-solid hover:transition-all hover:duration-300' onClick={logoutHandler}>Logout</button>
            </div>
            {showCal && <div className='absolute mt-8 rounded-md overflow-hidden border-2 border-black'><Calendar  value={currDate} onChange={setCurrDate}/></div>}
            {idDate==null? <Dashboard/> : <Editor date={idDate} setIdDate={setIdDate}/>}
        </div>
  )
}

export default Home;