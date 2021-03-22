import React, { Component, Fragment } from 'react'
import './PlayerDisplay.css'

export default class PlayerDisplay extends Component {
  render() {
    const userData = JSON.parse(this.props.match.params.data)
    return (
      <Fragment>
        <h1>Player Display</h1>
        <table>
          <tbody key="tbody">
          <tr>
            <td>Username</td>
            <td>:</td>
            <td>{userData.username}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>:</td>
            <td>{userData.email}</td>
          </tr>
          <tr>
            <td>Password</td>
            <td>:</td>
            <td>{userData.password}</td>
          </tr>
          <tr>
            <td>Exp</td>
            <td>:</td>
            <td>{userData.exp}</td>
          </tr>
          <tr>
            <td>Lvl</td>
            <td>:</td>
            <td>{userData.lvl}</td>
          </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}
