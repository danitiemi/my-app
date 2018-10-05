import React, { Component } from 'react'
import axios from 'axios'

class NewNote extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.idea.title,
      body: this.props.idea.body
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleBlur = () => {
    const idea = {
      title: this.state.title,
      body: this.state.body
    }

    axios.put(
      `http://localhost:3001/api/v1/ideas/${this.props.idea.id}`,
      {
        idea: idea
      })
    .then(response => {
      console.log(response)
      this.props.updateNote(response.data)
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className='tile'>
        <form onBlur={this.handleBlur}>
          <input className='input' type='text' 
            name='title' placeholder='New Note Title' 
            value={this.state.title} onChange={this.handleInput} />
          <textarea className='input' name='body'
            placeholder='Write Note'
            value={this.state.body} onChange={this.handleInput}>
          </textarea>
        </form>
      </div>
    )
  }
}

export default NewNote
