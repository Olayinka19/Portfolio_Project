import React from 'react';
import DeepRacer from '../assets/DeepRacer.mp4';
const Video = () => {
  return (
    <div>
      <video width="100%" hover="aspect-square" className="w-full aspect-video ..." justify-content="center" autoPlay controls >
        <source src={DeepRacer} type="video/mp4"  />
      </video>
      {/* <iframe class="w-full aspect-video ..." src="https://www.youtube.com/..."></iframe> */}
    </div>
  );
};

export default Video;