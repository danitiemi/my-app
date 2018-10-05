import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import Note from './Note'
import NewNote from './NewNote'
import Notification from './Notification'

class NotesBoard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingNoteId: null,
      notification: '',
      transitionIn: false
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/ideas.json')
    .then(response => {
      console.log(response)
      this.setState({ideas: response.data})
    })
    .catch(error => console.log(error))
  }

  addNote = () => {
    axios.post(
      'http://localhost:3001/api/v1/ideas',
      {
        idea: {
          title: '',
          body: ''
        }
      }
    )
    .then(response => {
      console.log(response)
      // immutability-helper "update": make a new copy of this.state.ideas 
      // and use the $splice command to insert the new idea (in response.data) at the 0th index of this array
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({
        ideas: ideas,
        editingNoteId: response.data.id
      })
    })
    .catch(error => console.log(error))
  }

  // find the index of the edited idea in the array, 
  // and then use the $set command to replace the old value with the new one
  updateNote = (idea) => {
    const ideaIndex = this.state.ideas.findIndex(x => x.id === idea.id)
    const ideas = update(this.state.ideas, {
      [ideaIndex]: {$set: idea}
    })
    this.setState({
      ideas: ideas,
      notification: 'Changes saved!',
      transitionIn: true
    })
  }

  resetNotification = () => {
    this.setState({
      notification: '',
      transitionIn: false
    })
  }

  enableEditing = (id) => {
    this.setState({ editingNoteId: id },
      () => { this.title.focus() })
  }
  
  deleteNote = (id) => {
    axios.delete(`http://localhost:3001/api/v1/ideas/${id}`)
    .then(response => {
      const ideaIndex = this.state.ideas.findIndex(x => x.id === id)
      const ideas = update(this.state.ideas, { $splice: [[ideaIndex, 1]]})
      this.setState({ideas: ideas})
    })
    .catch(error => console.log(error))
  }


  render() {
    return (
      <section>
        <div>
          <button className="addButton" onClick={this.addNote}>
            <i className="fas fa-plus"></i> <i className="fas fa-plus"></i>
          </button>
          <Notification in={this.state.transitionIn} notification={this.state.notification} />
          {/* <span className="notification">
            {this.state.notification}
          </span> */}
        </div>
        <div className="container" >
          {this.state.ideas.map((idea) => {
            if(this.state.editingNoteId === idea.id) {
              return (<NewNote idea={idea} key={idea.id} 
                updateNote={this.updateNote}
                titleRef= {input => this.title = input} 
                resetNotification={this.resetNotification}/>)
            } else {
              return (<Note idea={idea} key={idea.id} 
                onClick={this.enableEditing}
                onDelete={this.deleteNote}/>)
            }
          })}
        
        </div>
      </section>
    )
  }
}

export default NotesBoard