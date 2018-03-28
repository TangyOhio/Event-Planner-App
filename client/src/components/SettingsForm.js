import React, { Component } from 'react';
import { Form, Grid } from 'semantic-ui-react';

// This code pertaines to the Account Information settings tab

class SettingsForm extends Component {
  state = { email: '', firstname:'', LastName:''}
  
  render() {
    return(
      <Grid centered>
        <Grid.Column width={8}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input
            autoFocus
            required
            name='email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input
            autoFocus
            required
            name='firstname'
            value={this.state.firstname}
            placeholder='First Name'
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            autoFocus
            required
            name='lastname'
            value={this.state.lastname}
            placeholder='Last Name'
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
      </Grid.Column>
      </Grid>
    )
  }
}

export default SettingsForm;
