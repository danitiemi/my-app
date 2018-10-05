import React, { Component } from 'react'

class Footer extends Component {

  render() {
    return (
      <footer>
        <ul>
          <li><a href="https://github.com/danitiemi" alt="Github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a></li>
          <li><a href="https://dribbble.com/danitiemi" alt="Dribbble" target="_blank" rel="noopener noreferrer"><i className="fab fa-dribbble-square"></i></a></li>
          <li><a href="https://www.linkedin.com/in/danitiemi" alt="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a></li>
          <li><a href="https://instagram.com/whereisit.dani" alt="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <p className="copyright">&copy;2018 Dani Tiemi</p>
      </footer>
    )
  }

}

export default Footer