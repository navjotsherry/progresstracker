import { useEffect, useState } from 'react'
import DashboardCard from './DashboardCards.jsx'
import axios from 'axios'

const Dashboard = ()=>{
    const [allCards,setAllCards] = useState([])
    const [user, SetUser] = useState(localStorage.getItem("user"))
    useEffect(()=>{
        axios.get('http://localhost:5000/getAll')
        .then((e)=>setAllCards(e.data))
    },[])

    if(!user)
    
    if(!allCards) return "Loading..."

    return (
        <div className='my-2 w-full'>
            {allCards.map((card)=>{
               console.log(card)
               return (
               <div className='py-2' key={card.date}>
                <DashboardCard date={card.date} points={card.points}/>
               </div>
               )
            })}
            
        </div>
    )
}

export default Dashboard