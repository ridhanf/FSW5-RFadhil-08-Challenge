import React, { Component, Fragment } from 'react'
import PlayerPost from './PlayerPost/PlayerPost'
import './Player.css'

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      exp: 0,
      lvl: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value
  });
  }

  handleSubmit(event) {
    alert('username: ' + this.state.username + '\nemail: ' + this.state.email + '\npassword: ' + this.state.password + '\nexp: ' + this.state.exp);
    event.preventDefault();
  }

  render() {
    return (
      <Fragment>
        <PlayerPost data={this.state}/>
      </Fragment>
    )
  }
}
