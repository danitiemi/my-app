import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

export default (props => {
  return (
    <Router>
      <Route path=“/“ component={Header}/>
    </Router>
  )
})