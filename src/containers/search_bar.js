import React, { Component }   from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: '' }
    this.onInputChange = this.onInputChange.bind(this)
    this.submitForm = this.submitForm.bind(this);
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
    this.setState({ term: event.target.value})
  }

  submitForm(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }
}

// this funciton is the one that bdins our action to this Component
// by doing this we actually have access to: 'this.props.fetchWeather()'
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather: fetchWeather }, dispatch);
}

// first argument of connect takes in 'mapStateToProps'
// Since this component does not care about state but just about the action
// we give connect 'null' as the first argument
export default connect(null, mapDispatchToProps)(SearchBar);
