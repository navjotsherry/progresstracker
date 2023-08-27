import { useState } from "react"

const Editor = () =>{
    const [taskValue, setTaskValue] = useState({
        "Lesson" : "",
        "Github": false,
        "DSA":false,
        "JobApplication":false
    })
    return (
        <div>
            <form action="">
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>Lesson: </h6>
                    <input className="mx-4 outline-none border-b-2 border-gray-400 " onChange={(e)=>setTaskValue({...taskValue,"Lesson" : e.target.value})} type="text" />
                </div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>Github: </h6>
                    <input className="mx-4" type="checkbox" />
                </div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>DSA: </h6>
                    <input className="mx-4" type="checkbox" />
                </div>
                <div className="flex m-6 p-4 border rounded-xl border-solid border-gray-600 w-80 items-center">
                    <h6>3 Job Applications: </h6>
                    <input className="mx-4" type="checkbox" />
                </div>
            </form>
        </div>
    )
}

export default Editor