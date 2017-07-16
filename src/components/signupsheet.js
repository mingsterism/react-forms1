import React, { Component } from 'react';
import Field from './field';

class SignupSheet extends Component {
  static displayName='signupsheets'

  constructor(props) {
    super(props)

    this.state = {
      fields: {
        name: '', 
        names: '',
        email: '', 
      },
      fieldErrors: {}, 
      people: [], 
    };
  }

  onFormSubmit = (evt) => {
    const people = [
      ...this.state.people, 
      this.state.fields,
    ];
    const person = this.state.field;
    const fieldErrors = this.validate(person);
    this.setState({ fieldErrors });
    evt.preventDefault()

    if (Object.keys(fieldErrors).length) return;

    this.setState({
      people: people.concat(person),
      fields: {
        name: '', 
        email: '',
      }
    });
  }

  isEmail = (email) => {
    return email.contains("hotmail")
  }

  onNameChange = (evt) => {
    this.setState({ name: evt.target.value });
  }

  onInputChange = (evt) => {
    const fields = this.state.fields;
    fields[evt.target.name] = evt.target.value;
    this.setState({ fields})
  }

  validate = () => {
    const person = this.state.fields;
    const fieldErrors = this.state.fieldErrors;
    const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k])

    if (!person.name) return true;
    if (!person.email) return true;
    if (errMessages.length) return true;

    return false
  }

  render() {
    return (
      <div>
        <h1> Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}> 
          {/* <input 
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />
          <span style={{ color: 'red' }}> { this.state.fieldErrors.name }</span>
          <br />
          <input 
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <span style={{ color: 'red' }}> { this.state.fieldErrors.email }</span>
          <br />
          
          <input type='submit' />
        </form> */}
        {/* <div> */}
          <Field 
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
            validate={(val) => (val ? false: 'Name Required')}
          />
          <br/>
          <input type='submit' disabled={this.validate()} />
        </form>
        <h3>Names</h3>
        <ul>
          { this.state.people.map(({ name, email }, i) => 
            <li key={i}>{name} ({email})</li>
          )}
        </ul>
      </div>
    )
  }
}

export default SignupSheet;