import React, { Component, PropTypes } from 'react'
import './Component.less'

export default class ComponentExample extends Component {
  static displayName = "ComponentExample"

  static propTypes = {
    foo: PropTypes.string
  }

  static defaultProps = {

  }

  state = {}

  componentDidMount() {

  }

  render() {
    const { children, ...others } = this.props
    return (
      <div className="component-example" {...others} >
        {children}
      </div>
    )
  }
}