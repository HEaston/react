import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const videoItems = props.video.map((video) => {
    return <VideoListItem video={video} />
  });

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

// use curly braces when referencing a JS variable
// className instead of class
// if refactoring a function based component to a class based component, props turns into this.props

export default VideoList;