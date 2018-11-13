import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <footer>
        <nav class="center">
          <div class="footer">
            <div class="foot">
              <p>RSS</p>

              <p>FAQ</p>
            </div>

            <img
              src="Images/GitHub-Mark-64px.png"
              height="25"
              width="25"
              alt=""
            />

            <div>
              <p>© 2013 – 2018 GitHub, Inc. All rights reserved</p>
            </div>
          </div>
        </nav>
      </footer>
    )
  }
}

export default Footer
