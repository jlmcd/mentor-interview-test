import React from 'react'
import Incrementer from '../Incrementer/Incrementer'

export default class Counter {
  constructor() {
    super()
    this.state = {
      number = 0
    }
  }

  add() {
    this.setStat({number: this.state.number++})
  }

  render() {
    return (
      <div className='Counter'>
        <h2>{this.state.number}</h2>
        <Incrementer add={this.add} />
      </div>
    )
  }
}
