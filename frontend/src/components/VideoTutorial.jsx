/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import vid1 from "../assets/vid1.mp4";
import { GrClose } from "react-icons/gr";

const VideoTutorial = ({ onClose }) => {
  const dropdownRef = useRef();
  const triggerRef = useRef();
  //outside click
  const outsideClickHandler = (event) => {
    if (!dropdownRef.current || !triggerRef.current) return;
    if (
      dropdownRef.current.contains(event.target) ||
      triggerRef.current.contains(event.target)
    )
      return;

    // setVideoStarted((prev) => !prev);
  };

  // close on click outside
  useEffect(() => {
    document.addEventListener("mousedown", outsideClickHandler);
    return () => document.removeEventListener("mousedown", outsideClickHandler);
  }, []);
  return (
    <div className="relative">
      <div
        className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[51]"
        ref={dropdownRef}
      >
        <video src={vid1} className="w-[100rem] h-[40rem]" autoPlay></video>
      </div>
      <GrClose
        className="absolute -top-96 right-80 z-[52] text-3xl cursor-pointer"
        onClick={onClose}
      />
    </div>
  );
};

export default VideoTutorial;
