import React from 'react';
import Chroma from 'chroma-js';

export default function GradientPreview(props) {
  const {mode, color1, color2, dir, label, corrected} = props;
  let gradient = (dir === "circle") ? "radial-gradient("
    : "linear-gradient(to ";
  gradient += dir + ", " + color1 + ", ";
  if(mode !== "og") {
    const scale = Chroma.scale([color1, color2]).mode(mode);
    gradient += `${scale(0.25)}, ${scale(0.5)}, ${scale(0.75)}, `;
  }
  gradient += color2 + ")";
  const contrast = Chroma.contrast(color1, 'white');
  const textColor = (contrast > 2) ? 'white' : 'black';
  const textShadow = (contrast > 2) ? 'black' : 'white';

  return (
    <div className="GradientPreview" style={{
        backgroundImage: gradient,
        color: textColor,
        textShadow: `0 0 10px ${textShadow}`
      }}>
      <div className="GradientInfo">
        <div><h3>{label}</h3></div>
        <div className="CodeWrap">
          <code>background-image: {gradient};</code>
        </div>
      </div>
    </div>
  );
}
