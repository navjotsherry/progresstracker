import { useState,useEffect } from "react"
import axios from "axios";

const Editor = ({date}) =>{
    const [taskValue, setTaskValue] = useState({
        "Lesson" : "",
        "Github": false,
        "DSA":false,
        "JobApplication":false,
        "date":date
    })
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const submitData =async()=>{
        console.log(taskValue)
        const responseData = await axios.post(`http://localhost:5000/${date}`,taskValue)
        console.log(responseData)
    }

    useEffect(() => {
        setTaskValue({...taskValue, "date":date})
        axios.get(`http://localhost:5000/${date}`)
        .then(response => {
            const {Lesson,githubPush,applicationtoJob, DSA} = response.data
            setTaskValue({
                "Lesson" : Lesson,
                "Github": githubPush,
                "DSA":DSA,
                "JobApplication":applicationtoJob,
                "date":date
            });
            setLoading(false);
        })
        .catch(err => {
            setError(err);
            setLoading(false);
        });
    }, [date]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }
    
    return (
        <div>
            {date}
            <div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>Lesson: </h6>
                    <input className="mx-4 outline-none border-b-2 border-gray-400 " value={taskValue.Lesson} onChange={(e)=>setTaskValue({...taskValue,"Lesson" : e.target.value})} type="text" />
                </div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>Github: </h6>
                    <input className="mx-4" checked={taskValue.Github} onChange={()=>{
                        setTaskValue({...taskValue, "Github":!taskValue.Github})
                    }} type="checkbox" />
                </div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>DSA: </h6>
                    <input className="mx-4" checked={taskValue.DSA} onChange={()=>{
                        setTaskValue({...taskValue, "DSA":!taskValue.DSA})
                    }} type="checkbox" />
                </div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>3 Job Applications: </h6>
                    <input className="mx-4" checked={taskValue.JobApplication} onChange={()=>{
                        setTaskValue({...taskValue, "JobApplication":!taskValue.JobApplication})
                    }} type="checkbox" />
                </div>
                <div className="flex m-6 rounded-xl w-80 items-center">
                    <button onClick={submitData} className="text-white bg-black rounded-lg p-4 mx-auto">Done</button>
                </div>
                
            </div>
        </div>
    )
}

export default Editor