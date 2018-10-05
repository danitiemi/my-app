import React from 'react'

const Note = ({idea}) =>
  <div className="tile" key={idea.id} >
    <h4> {idea.title} </h4>
    <p> {idea.body} </p>
  </div>

export default Note