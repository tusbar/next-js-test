import React from 'react'
import Link from 'next/link'

import {globalState, generateNumber} from '../lib/state'

export default class extends React.Component {
  state = {}

  generateNumber = () => {
    generateNumber()

    this.setState({
      number: globalState.number
    })
  }

  render() {
    const {number} = this.state

    return (
      <div>
        <button onClick={this.generateNumber}>
          generate a number
        </button>

        <div>Number: {number || globalState.number}</div>

        <Link href='/about'>
          <a>about</a>
        </Link>
      </div>
    )
  }
}
