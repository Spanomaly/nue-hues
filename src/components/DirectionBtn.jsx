import React from 'react';
import {
  FiArrowUpLeft,
  FiArrowUp,
  FiArrowUpRight,
  FiArrowLeft,
  FiArrowRight,
  FiArrowDownLeft,
  FiArrowDown,
  FiArrowDownRight,
  FiCircle
} from "react-icons/fi";

export default function DirectionBtn({dir, setDir, selected}){
  let dirIcon;
  let cssClasses = "DirectionBtn";
  cssClasses += (selected) ? " selected":"";
  switch(dir){
    case 'top left':     dirIcon = <FiArrowUpLeft />; break;
    case 'top':          dirIcon = <FiArrowUp />; break;
    case 'top right':    dirIcon = <FiArrowUpRight />; break;
    case 'left':         dirIcon = <FiArrowLeft />; break;
    case 'right':        dirIcon = <FiArrowRight />; break;
    case 'bottom left':  dirIcon = <FiArrowDownLeft />; break;
    case 'bottom':       dirIcon = <FiArrowDown />; break;
    case 'bottom right': dirIcon = <FiArrowDownRight />; break;
    case 'circle':       dirIcon = <FiCircle />; break;
  }
  return(
    <button className={cssClasses} onClick={()=>setDir(dir)}>
      {dirIcon}
    </button>
  );
}
