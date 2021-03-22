import React, { Component, Fragment } from 'react'
import Button from '../../Button'

export default class PlayerSearch extends Component {
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
        <h1>Player Search</h1>
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
            Experience:
            <input type="number" value={this.state.exp} name="exp" onChange={this.handleChange} />
          </label><br/>
          <label>
            Level:
            <input type="number" value={this.state.lvl} name="lvl" onChange={this.handleChange} />
          </label><br/>
          <Button
            className="btns"
            type="submit"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Submit
          </Button>
        </form>
      </Fragment>
    )
  }
}
