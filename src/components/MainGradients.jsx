import React from 'react';
import Settings from './Settings';
import GradientPreview from './GradientPreview';
import {useParams, useHistory} from "react-router-dom";

class MainGradients extends React.Component {
  constructor(props) {
    super(props);
    let { color1="a21be7", color2="e3f31f", dir="bottom right" } = props.match.params;
    this.state = {
      color1: "#"+color1,
      color2: "#"+color2,
      dir: dir.replace( "-", " ")
    };
    this.setColor1 = this.setColor1.bind(this);
    this.setColor2 = this.setColor2.bind(this);
    this.setDir = this.setDir.bind(this);
  }
  updateHistory = () => {
    let {color1, color2, dir} = this.state;
    color1 = color1.replace("#","");
    color2 = color2.replace("#","");
    dir = dir.replace(" ", "-")
    this.props.history.push(`/gradient/${dir}/${color1}/${color2}`);
  }
  setColor1 = (color, e) => {
    this.setState({ color1: color.hex }, () => {this.updateHistory()});
  }
  setColor2 = (color, e) => {
    this.setState({ color2: color.hex }, () => {this.updateHistory()});
  }
  setDir = (dir) => {
    this.setState({ dir }, () => {this.updateHistory()});
  }
  render() {
    const { color1, color2, dir } = this.state;

    return(
      <div>
        <Settings
          color1={color1}
          color2={color2}
          setColor1={this.setColor1}
          setColor2={this.setColor2}
          setDir={this.setDir}
          currentDir={dir}
        />
        <div>
          <div className="OriginalGradient">
            <GradientPreview
              color1={color1}
              color2={color2}
              mode="og"
              dir={dir}
              label="Original Gradient"
            />
          </div>
          <div className="MainGradient">
            <GradientPreview
              color1={color1}
              color2={color2}
              mode="lch"
              dir={dir}
              label="LCH Gradient"
            />
          </div>
          <div className="GradAlternatives">
            <h2>Alternatives</h2>
            <div className="GradCard">
              <GradientPreview
                color1={color1}
                color2={color2}
                mode="lrgb"
                dir={dir}
                label="Linear RGB Gradient"
              />
            </div>
            <div className="GradCard">
              <GradientPreview
                color1={color1}
                color2={color2}
                mode="lab"
                dir={dir}
                label="LAB Gradient"
              />
            </div>
            <div className="GradCard">
              <GradientPreview
                color1={color1}
                color2={color2}
                mode="hsl"
                dir={dir}
                label="HSL Gradient"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainGradients;
