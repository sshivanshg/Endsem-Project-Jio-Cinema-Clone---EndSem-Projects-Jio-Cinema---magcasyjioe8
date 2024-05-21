import React from 'react';

const VideoPlayer = ({ videoUrl, onClose }) => {
  return (
    <div className="video-player-container">
      <video controls autoPlay>
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='flex justify-center mt-2'>
      <button onClick={onClose} className="close-button font-bold text-white-700 cursor-pointer border rounded-full p-4 pt-2 pb-2 bg-red-500 hover:p-5 hover:pb-3 hover:pt-3">X</button>
      </div>
    </div>
  );
};

export default VideoPlayer;