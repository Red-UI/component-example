import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ComponentExample from '../src'

class DemoSimple extends Component {

  render() {
    return (
      <ComponentExample>Demo Simple</ComponentExample>
    )
  }
}

ReactDOM.render(
  <DemoSimple />,
  document.getElementById('red-ui-entry')
)