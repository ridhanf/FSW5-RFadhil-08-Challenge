import React, { Component, Fragment } from 'react'
import './PlayerPost.css'
import Button from '../../Button'

export default class PlayerPost extends Component {
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
    this.setState({
      lvl: this.state.exp/100
    })
  }

  handleSubmit(event) {
    alert('username: ' + this.state.username + '\nemail: ' + this.state.email + '\npassword: ' + this.state.password + '\nexp: ' + this.state.exp + '\nlvl: ' + this.state.lvl);
    event.preventDefault();
  }
  
  render() {
    return (
      <Fragment>
        <h1>Player Post</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input type="text" value={this.state.username} name="username" onChange={this.handleChange} />
          </label><br/>
          <label>
            Email:
            <input type="text" value={this.state.email} name="email" onChange={this.handleChange} />
          </label><br/>
          <label>
            Password:
            <input type="password" value={this.state.password} name="password" onChange={this.handleChange} />
          </label><br/>
          <label>
            Experience:
            <input type="number" value={this.state.exp} name="exp" onChange={this.handleChange} />
          </label><br/>
            {/* {console.log(this.state)} */}
          <Button
            className="btns"
            type="submit"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            data={this.state}
          >
            Submit
          </Button>
        </form>
      </Fragment>
    )
  }
}
