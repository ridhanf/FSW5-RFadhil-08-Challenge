import React, { Component, Fragment } from 'react'
import Form from '../Form/Form'

export default class PlayerPost extends Component {
  render() {
    return (
      <Fragment>
        <h1>Player Post</h1>
        <Form elements={["username","email", "password", "exp"]}/>
      </Fragment>
    )
  }
}
