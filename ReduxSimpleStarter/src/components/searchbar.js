import React, { Component } from 'react';

// const SearchBar = () => { // a functional component that needs refactoring into a class based component
  // return <input />;
// }
// use a class based method instead only when you need extra functionality
// if you just want to return the component, use the functional version above
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // object {} with properties i.e. term, on the state
    // only ever manually change state in constructor
  }

  render() { // a function
    // return <input onChange={this.onInputChange} />;
    // return <input onChange={event => console.log(event.target.value)} />;
    return (// setState makes it re-render
      <div>
        <input
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

  //onInputChange(event) {
  //  console.log(event.target.value);
  //}
}

export default SearchBar;