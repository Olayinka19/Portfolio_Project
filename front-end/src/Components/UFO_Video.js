import React from 'react';
import UFO from '../assets/UFO.MP4';
const UFO_Video = () => {
  return (
    <div>
      <video width="100%" hover="aspect-square" className="w-full aspect-video ..." justify-content="center" autoPlay controls >
        <source src={UFO} type="video/mp4"  />
      </video>
      {/* <iframe class="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe> */}
    </div>
  );
};

export default UFO_Video;