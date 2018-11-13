import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <header>
        <div class="space">
          <a href="#">
            <img
              src="Images/1-GitHub-Octodex-logo.png"
              height="22"
              class="logo"
            />
          </a>

          <nav class="list">
            <ul class="menu">
              <li>RSS</li>
              <li>FAQ</li>
              <li>Back to GitHub</li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
