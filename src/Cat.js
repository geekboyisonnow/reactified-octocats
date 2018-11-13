import React, { Component } from 'react'

class Cat extends Component {
  render() {
    return (
      <ul class="display">
        <section class="padding">
          <li class="border">
            <img src={this.props.images} height="425" width="425" />
          </li>
          <section class="title">
            <p>#{this.props.number}</p>
            <span>
              the <b>{this.props.titles}</b> by <img src={this.props.logo} />{' '}
            </span>
          </section>
        </section>
      </ul>
    )
  }
}

export default Cat
