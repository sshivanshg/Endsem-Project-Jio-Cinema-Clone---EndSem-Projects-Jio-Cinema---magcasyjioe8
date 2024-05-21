import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react';

const MoviePoster = (props) => {
    const [showPopup, setShowPopup] = useState(false);

    const navigate = useNavigate();


    const MoviePopup = ({ title, keyWords, trailerUrl, dis, onClick}) => (
        <div className="popup mb-2">
          <div className="popup-content">
            <p className="font-normal text-lg">{keyWords}</p>
            <a onClick={()=> onClick(trailerUrl,title,keyWords,dis)} className="font-normal text-lg border border-solid p-2 pr-3 pl-3 border-black rounded-md cursor-pointer">Watch Now</a>
          </div>
        </div>
      );

    const openPopup = () => {
       showPopup ? setShowPopup(false) : setShowPopup(true);
    };

  
  


    const handlePosterClick = ()=>{
        openPopup()

    }
    
    return (
        <>
        <div className="flex-shrink-0 mr-4" onClick={handlePosterClick} style={{ maxWidth: '200px' }}>
            <img src={props.imageUrl} alt={props.title} style={{ maxWidth: '200px', height: '200px' }} className="w-full h-auto rounded-lg shadow-lg" />
            {showPopup && (
            <MoviePopup
            title={props.title}
            keyWords={props.keyWords}
            trailerUrl={props.videoUrl}
            dis={props.discption}
            onClick = {props.onClick}
        />
      )}
        </div>


        </>
    );
};

export default MoviePoster;


