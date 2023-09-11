import { useEffect, useState } from 'react'
import DashboardCard from './DashboardCards.jsx'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext.js'
import { useNavigate } from 'react-router-dom'


const Dashboard = ()=>{
    const {user} = useAuthContext()
    const navigate = useNavigate('/login')
    const [allCards,setAllCards] = useState([])
    useEffect(()=>{
        if(!user) navigate('/login')
    },[user])
    useEffect(()=>{
        
        axios.get('http://localhost:5000/getAll')
        .then((e)=>setAllCards(e.data))
    },[])
    
    if(!allCards) return "Loading..."

    return (
        <div className='my-2 w-full'>
            {allCards.map((card)=>{
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