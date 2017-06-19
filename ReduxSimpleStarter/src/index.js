import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchbar';

const API_KEY = 'AIzaSyBCVV-Fr5Jj4_p8I0cDMui6OYFXYYHSgpk';

// Create a new component. This component should produce
// some HTML
// This is all ES6 code
// const App = function() { // this is a class, not an instance
const App = () => { // fat arrow identical to function keyword
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
// ReactDOM.render(App);
// you need to make an instance before passing
// so you wrap App in JSX tags to make an instance of the component

ReactDOM.render(<App />, document.querySelector('.container'));
