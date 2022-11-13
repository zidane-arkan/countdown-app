import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import video from "../assets/video.mp4";

import { CountdownCircleTimer } from "react-countdown-circle-timer";

const RenderTime = ({ remainingTime }) => {
  const [isStatus, setIsStatus] = useState("active");
  const changeStatus = (e) => {
    setIsStatus("disable");
  };
  const videoEl = useRef(null);
  // const attemptPlay = () => {
  //     videoEl &&
  //     videoEl.current &&
  //     videoEl.current.play().catch(error => {
  //         console.error("Error attempting to play", error);
  //     });
  // };

  if (remainingTime === 0) {
    // attemptPlay();

    return (
      <div class={`object-video ${isStatus}`}>
        <button onClick={changeStatus}> Close</button>
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
  const [status, setStatus] = useState({
    isStatus: false,
    isPlayingNow: false,
  });
  // const [isStatus, setIsStatus] = useState('disable');
  const changeStatus = (e) => {
    console.log(e.target.id);
    setStatus((status) => {
      const { isStatus, isPlayingNow } = status;
      return { isStatus: !isStatus, isPlayingNow: !isPlayingNow };
    });
  };

  return (
    <section>
      <div className="round__box">
        {!status.isStatus && (
          <button id="round__btn" onClick={changeStatus}>
            Watch Now!
          </button>
        )}
      </div>
      {status.isStatus && (
        <div className={`timer-wrapper`}>
          <CountdownCircleTimer
            size={500}
            isPlaying={status.isPlayingNow}
            duration={3}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: status.isRepeat, delay: 1 })}
          >
            {RenderTime}
          </CountdownCircleTimer>
        </div>
      )}
    </section>
  );
};

export default Countdown;
