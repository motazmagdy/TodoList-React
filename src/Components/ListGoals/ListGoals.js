import React from "react"
import './ListGoals.css'

const ListGoals = (props) =>{
    const {itemsList , deleteGoal} = props 
    const listData = itemsList.map(item =>{
        return (
            <div key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span>{item.goal}</span>
                <span onClick={()=>deleteGoal(item.id)}>&times;</span>
            </div>
        )
    })
    return (
        <div>
            Goals List
            <div>
                <span>Name</span>
                <span>Age</span>
                <span>Goal</span>
                <span>Actions</span>
            </div>
            <div>{listData}</div>
            
            </div>
        
    )
}
export default ListGoals