import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { setFlash } from '../../reducers/flash'
import { setHeaders } from '../../reducers/headers'
import { Form, Header, Button, Checkbox, Input} from 'semantic-ui-react'
import styled from 'styled-components'

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// This code pertains to the Account Information settings tab
class SettingsForm extends Component {
  state = { email: '', name: '', nickname: '', image: '', is_admin: ''}
  
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
      <StyledForm onSubmit={this.handleSubmit}>
        <Form.Field inline >
          <Header as='label'>Email</Header>
          <Input
            id='email'
            placeholder={email}
            value={email}
            onChange={this.handleChange}
            type='email'
            required
            autoFocus
            />
        </Form.Field>
        <Form.Field inline >
          <Header as='label'>Name</Header>
          <Input
            id='name'
            placeholder='Name'
            value={name}
            onChange={this.handleChange}
            />
        </Form.Field>
        <Form.Field inline >
          <Header as='label'>Username</Header>
          <Input
            id='nickname'
            placeholder='Username'
            value={nickname}
            onChange={this.handleChange}
            />
        </Form.Field>
        <Form.Field inline >
          <Header as='label'>Profile Picture</Header>
          <Input
            id='image'
            placeholder='Profile Picture'
            value={image}
            onChange={this.handleChange}
            />
        </Form.Field>
        <Form.Field>
          <Checkbox
            id="is_admin"
            placeholder='Name'
            checked={is_admin}
            onChange={() => this.setState({ is_admin: !this.state.is_admin })}
            label='I am an admin'
            />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </StyledForm>
    )
  }

  render() {
    return (
      <Fragment>
        {this.state.email && this.showForm()}
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.user
  }
}

export default connect(mapStateToProps)(SettingsForm)
