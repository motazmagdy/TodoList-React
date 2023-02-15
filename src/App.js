import React, { Component } from 'react'
import './App.css'
import ListGoals from './Components/ListGoals/ListGoals'
import ListForm from './Components/ListForm/ListForm'
export default class TodoApp extends Component {

  state = {
    items : [
      {id:1,name:'Ali',age:19,goal:'Learn Swimming'},
      {id:2,name:'Osama',age:32,goal:'Get MasterDegree'},
      {id:3,name:'Yara',age:28,goal:'Travel to Paris'}
    ]
  }
  deleteGoal = (id) => {
    let goals = this.state.items;
    let newGoals = goals.filter(goal => goal.id !== id)
    this.setState({items:newGoals})
  }

  render(){
    return (
      <div>
        <h1>TodoList App</h1>
        <ListGoals itemsList={this.state.items}  deleteGoal={this.deleteGoal}/>
        <ListForm />
      </div>
    )
  }
}