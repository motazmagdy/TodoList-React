import React from "react"
import './ListGoals.css'

const ListGoals = (props) =>{
    const {itemsList , deleteGoal} = props 
    const listLength = itemsList.length
    const theData = listLength ? (
    itemsList.map(item =>{
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="goal">{item.goal}</span>
                <span className="action icon" onClick={()=>deleteGoal(item.id)}><b>&times;</b></span>
            </div>
        )
    })) : (<p>There is no Items to show</p>)
    return (
        <div className="listItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="goal title">Goal</span>
                <span className="action title">Action</span>
            </div>
            <div>{theData}</div>
            
            </div>
        
    )
}
export default ListGoals