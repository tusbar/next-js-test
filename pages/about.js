import React from 'react'
import Link from 'next/link'

import {globalState} from '../lib/state'

export default class extends React.Component {
  render() {
    return (
      <div>
        <div>Number: {globalState.number}</div>

        <Link href='/'>
          <a>home</a>
        </Link>
      </div>
    )
  }
}
