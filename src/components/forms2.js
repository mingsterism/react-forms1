import React, { Component } from 'react'

class Forms2 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fields: {
        fname: '', 
        lname: '',
      },
      names: [],
      errors: '',
    }
  }

  onInputChange = (event) => {
    const fields = this.state.fields
    fields[event.target.name] = event.target.value
    this.setState({fields: fields})
  }

  handleFormSubmit = (event) => {
    const fields = this.state.fields
    const stringName = fields['fname'] + fields['lname']
    if (this.validateStringOnly(stringName)) {
      const listNames = [...this.state.names, this.state.fields]
      this.setState({ 
        fields: { fname: '', lname: '' }, 
        names: listNames 
      })
    } else {
      console.log("Form error. Contains numbers")
    }
    event.preventDefault()
  }

  validateStringOnly = (string) => {
    const hasNum = /\d/;
    if (hasNum.test(string)) {
      this.setState({ errors: 'errors' })
      return false
    } else {
      this.setState({errors: ''})
      return true
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} >
          <label>
            Name:
            <input 
              type="text" 
              name="fname"
              placeholder="Enter your first name"
              value={this.state.fields.fname}
              onChange={this.onInputChange}
            />
            <input 
              type="text"
              name="lname"
              placeholder="Enter your last name"
              value={this.state.fields.lname}
              onChange={this.onInputChange}
            />
            <input type='submit' />
            <p>{this.state.errors}</p>
          </label>
        </form>

        <h1> List of Names </h1>
        <ul>
          {this.state.names.map(({fname, lname}, i ) => 
             <li key={i}> {fname} {lname} </li>
          )}
        </ul>
      </div>
    )
  }
}

export default Forms2;