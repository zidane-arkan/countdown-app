import React,{useRef,useState,useEffect} from 'react';
import ReactDOM from "react-dom";
import video from '../assets/video.mp4';

import { CountdownCircleTimer } from "react-countdown-circle-timer";



const RenderTime = ({ remainingTime }) => {
    // const [IsStatus, setIsStatus] = useState(false);
    // useEffect(() => {
    //     attemptPlay();
    // }, []);
    const videoEl = useRef(null);
    const attemptPlay = () => {
        videoEl &&
        videoEl.current &&
        videoEl.current.play().catch(error => {
            console.error("Error attempting to play", error);
        });
    };
    
    if (remainingTime === 0) {
        // attemptPlay();
        return (
            <div class="objectVideo">
                <video
                    style={{ maxWidth: "1000px", width: "1000px", margin: "0 auto" }}
                    playsInline
                    loop
                    controls
                    alt="All the devices"
                    src={video}
                    ref={videoEl}
                />
            </div>
        );
    }
    //Video Animation
    return (
        <div className="timer">
        {/* <div className="text">Remaining</div> */}
        <div className="value">{remainingTime}</div>
        {/* <div className="text">seconds</div> */}
        </div>
    );
};

const Countdown = () => {
  return (
     <div className="timer-wrapper">
        <CountdownCircleTimer
            size={500}
            isPlaying
            duration={5}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: false, delay: 1 })}
        >
          {RenderTime}
        </CountdownCircleTimer>
      </div>
  )
}

export default Countdown;