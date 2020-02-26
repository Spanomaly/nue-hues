import React from 'react';
import { ChromePicker } from 'react-color';
import Chroma from 'chroma-js';
import namer from 'color-namer';

class ColorPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  openPicker = () => {
    this.setState({open: true});

  }
  closePicker = (e) => {
    this.setState({open: false});
  }
  render(){
    const {open} = this.state;
    const {handleChangeComplete, color} = this.props;
    const contrast = Chroma.contrast(color, '#ffffff');
    //4.5 contrast is recommended
    const textColor = (contrast > 2.5) ? 'white' : 'black';
    //TODO: pick best from all lists
    const name = namer(color).x11[0].name;

    return (
      <div className="ColorPreview">
        <div
          className="InnerColorPreview"
          onClick={this.openPicker}
          style={{color:textColor, backgroundColor: color}}
          title={name}
        >
          <div><code>{color}</code></div>
        </div>
        {open &&
          <div>
            <div className="Cover" onClick={this.closePicker}>
            </div>
            <ChromePicker
              color={color}
              onChangeComplete = {handleChangeComplete}
              disableAlpha = {true}
            />
          </div>
        }
      </div>
    );
  }
}

export default ColorPreview;
