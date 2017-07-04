import React, { Component }   from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.submitForm} className="input-group">
        <input
          placeholder="Search the weather"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Search</button>
        </span>
      </form>
    );
  }

  onInputChange(event) {
    console.log(event.target.value)
    this.setState({ term: event.target.value})
  }

  submitForm(event) {
    event.preventDefault();

  }
}
