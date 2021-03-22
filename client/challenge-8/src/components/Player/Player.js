import React, { Component, Fragment } from 'react'
import PlayerPost from './PlayerPost/PlayerPost'
import PlayerPut from './PlayerPut/PlayerPut'

export default class Player extends Component {
  render() {
    return (
      <Fragment>
        <h1>Player.js</h1>
        <table>
          <tbody key="tbody">
            <tr>
              <td>
                <PlayerPost/>
              </td>
              <td>
                <PlayerPut/>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}
