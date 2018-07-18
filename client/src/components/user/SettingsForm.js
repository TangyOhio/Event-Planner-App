import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setFlash } from '../../reducers/flash'
import { setHeaders } from '../../reducers/headers'
import { Checkbox } from 'semantic-ui-react'

// This code pertaines to the Account Information settings tab
class SettingsForm extends Component {
  state = { email: '', name: '', nickname: '', image: "", is_admin: ""}
  
  componentDidMount() {
    const { account } = this.props
    this.setState({ 
      email: account.email === null ? "" : account.email,
      name: account.name === null ? "" : account.name, 
      nickname: account.nickname === null ? "" : account.nickname, 
      is_admin: account.is_admin === null ? false : account.is_admin, 
      image: account.image === null ? "" : account.image 
    })
  }

  submit = (user) => {
    const { dispatch } = this.props
    axios.put(`/api/users/${this.props.account.id}`, { user })
      .then(res => {
        dispatch(setHeaders( res.headers ))
        dispatch(setFlash('You Successfully Updated Your Info', 'green'))
        window.location.reload()
      })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let user = { ...this.state }
    this.submit(user)
  }

  handleChange = (e) => {
    let { target: { id, value } } = e
    this.setState({ [id]: value })
  }

  showForm = () => {
    let { email, name, nickname, image, is_admin } = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="email"
          placeholder={email}
          value={email}
        onChange={this.handleChange}
        required
      />
        <br />
        <input
          id="name"
          placeholder='Name'
          value={name}
          onChange={this.handleChange}
        />
        <br />
        <input
          id="nickname"
          placeholder='Username'
          value={nickname}
          onChange={this.handleChange}
        />
        <input
          id="image"
          placeholder={image}
          value={image}
          onChange={this.handleChange}
          required
        />
        <br />
        <p> Are you an admin? </p>
        <Checkbox
          id="is_admin"
          placeholder='Name'
          checked={is_admin}
          onChange={() => this.setState({ is_admin: !this.state.is_admin })}
        />
        <br />
        <button>Submit</button>
      </form>
    )
  }

  render() {
    return (
      <div>
        {this.state.email && this.showForm()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(SettingsForm)
