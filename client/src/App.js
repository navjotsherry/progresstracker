import { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import Editor from './components/Editor';

function App() {
  const [currDate , setCurrDate] = useState(new Date())
  const [idDate,setIdDate] =useState(null) 
  const [showCal,setShowCal] = useState(false)
  function dateButton(e){
    setCurrDate(e)
    const date = e.toString().substring(0,15).split(' ').join('')
    setIdDate(date)
  }
  return (
    <div className="App w-6/12 mx-auto flex flex-col items-center">
      <button className='border border-white bg-black border-solid border-2 text-white p-4 rounded-lg' onClick={()=> console.log(setShowCal(!showCal))}>{showCal ? "Hide" : "Add New"}</button>
      {showCal && <Calendar onChange={dateButton} value={currDate}/>}
      {idDate !== null && <Editor date={idDate}/>}
    </div>
  );
}

export default App;
