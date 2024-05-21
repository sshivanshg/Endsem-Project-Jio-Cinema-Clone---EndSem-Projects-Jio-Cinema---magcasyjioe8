import React from 'react';

const VideoPlayer = ({title, keywords ,videoUrl,dis, onClose }) => {
  return (
    <div className="relative bg-black text-white">
        <video src={videoUrl} alt={title} className="w-full h-dvh object-cover" autoPlay loop muted></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-between p-8">
            <div className="flex justify-between items-start">
                <button className="bg-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5v-15m0 0L8.25 9.75m7.5-4.5L8.25 14.25" />
                    </svg>
                    <span>WATCH</span>
                </button>
                <div className="text-lg bg-opacity-75 bg-zinc-800 p-2 rounded">{title}(Hindi)</div>
            </div>
            <div>
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-sm opacity-75">{keywords}</p>
                <p className="mt-4">{dis}</p>
            </div>
        </div>
    </div>
  )
};

export default VideoPlayer;

