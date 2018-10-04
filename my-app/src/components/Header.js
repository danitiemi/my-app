import React, { Component } from 'react'
import me from '../images/me.jpg'


class Header extends Component {

  render() {
    return (
        <header>
          <div className="welcome">
            <img src={me} alt="My anime version" className="profile-image"/> 
            <h1 className="tag-name">Hi, I’m Dani!</h1>
            <h2 className="text">I’m a Full-stack Web Developer who loves design, food, good music and travelling.</h2>
            <h2 className="superpower">My superpower is my determination to make things happen.</h2>
          </div>         
        </header>
    )
  }
}

export default Header