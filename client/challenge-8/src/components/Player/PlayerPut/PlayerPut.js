import React, { Component, Fragment } from 'react'
import Form from '../Form/Form'

export default class PlayerPut extends Component {
  render() {
    return (
      <Fragment>
        <h1>Player Put</h1>
        <Form elements={["username","email", "password", "exp", "lvl"]}/>
      </Fragment>
    )
  }
}
