import React from 'react';

import ColorPreview from './ColorPreview';
import DirectionBtn from './DirectionBtn';
const logo = require('../../public/nuehue.svg');

export default function Settings(props) {
  const {color1, color2, setColor1, setColor2, setDir, currentDir} = props;
  const dirNames = [
    "top left",
    "top",
    "top right",
    "left",
    "circle",
    "right",
    "bottom left",
    "bottom",
    "bottom right",
  ];
  const dirBtns = dirNames.map((dir, idx)=>(
    <DirectionBtn
      key={idx}
      dir={dir}
      setDir={setDir}
      selected={currentDir==dir}
    />
  ));

  return (
    <div className="Settings">
      <div className="StandardWidth">
        <div className="SiteTitle">
          <img src={logo} />
        </div>
        <div id="DirectionSelectors">
          {dirBtns}
        </div>
        <div id="ColorPickers">
          <div className="ColorWrap">
            <ColorPreview
              color={color1}
              handleChangeComplete={setColor1}
            />
          </div>
          <div className="ColorWrap" id="EndColor">
            <ColorPreview
              color={color2}
              handleChangeComplete={setColor2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
