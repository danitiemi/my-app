import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import Note from './Note'

class NotesBoard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      ideas: [],
      editingIdeaId: null
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
      const ideas = update(this.state.ideas, {
        $splice: [[0, 0, response.data]]
      })
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
        </div>
        <div className="container" >
          {this.state.ideas.map((idea) => {
            return (
              <Note idea={idea} key={idea.id} />
            )
          })}
        
        </div>
      </section>
    )
  }
}

export default NotesBoard