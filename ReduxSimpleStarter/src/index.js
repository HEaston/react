import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyBCVV-Fr5Jj4_p8I0cDMui6OYFXYYHSgpk';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    // sample search
    YTSearch({key: API_KEY, term:  'surfboards'}, (videos) => {
      // console.log(data);
      this.setState({ // setting state causes component to re-render
        videos: videos,
        selectedVideo: videos[0]
      });
      // this.setState({ videos: videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

//passing prop videos to VideoList

// Take this component's generated HTML and put it
// on the page (in the DOM)
// ReactDOM.render(App);
// you need to make an instance before passing
// so you wrap App in JSX tags to make an instance of the component

ReactDOM.render(<App />, document.querySelector('.container'));
