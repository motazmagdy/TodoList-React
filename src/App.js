import React, { Component } from 'react'
import './App.css'
import ListGoals from './Components/ListGoals/ListGoals'
import ListForm from './Components/ListForm/ListForm'
export default class TodoApp extends Component {

  state = {
    items : [
      {id:1,name:'Ali',age:19,goal:'Learn Swimming'},
      {id:2,name:'Osama',age:32,goal:'Get Master Degree'},
      {id:3,name:'Yara',age:28,goal:'Travel to Paris'}
    ]
  }
  deleteGoal = (id) => {
    let goals = this.state.items;
    let newGoals = goals.filter(goal => goal.id !== id)
    this.setState({items:newGoals})
  }

  addItem = (goal) => {
    let newGoalId = +this.state.items.length + 1
    goal.id = newGoalId
    let currentGoals = this.state.items
    currentGoals.push(goal)
    this.setState(
      { items : currentGoals}
  )}

  render(){
    return (
      <div className='appContainer'>
        <h1 className='textCenter'>TodoList App</h1>
        <ListGoals itemsList={this.state.items}  deleteGoal={this.deleteGoal}/>
        <ListForm addGoal={this.addItem}/>
      </div>
    )
  }
}