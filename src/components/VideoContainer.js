import React, { useEffect, useState } from 'react';

import { Youtube_Videos_Api } from '../utils/constants';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom"

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_Videos_Api);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
  };

  return (
    <div className='flex flex-wrap'>
      {videos.map((video, index) => (
        <Link to={"/watch?v="+video.id}>
        <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
