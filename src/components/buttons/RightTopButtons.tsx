import React, {Component} from 'react';
import hideImg from '../../img/hide.png';
import '../../scss/buttons/RightTopButtons.scss'
import isHideAll from "../../util/isHideAll";

class RightTopButtons extends Component<any, any> {
  state = {
    hideAll: isHideAll()
  }
  render() {
    return (
      <div className='top_right_button'>
        <div className='tr_button' onClick={() => this.hideAll()}>
          <img src={hideImg} alt="" />
        </div>
      </div>
    );
  }
  hideAll = () => {
    if (!this.state.hideAll) {
      this.props.hideAll(true)
      this.setState({
        hideAll: true
      })
      localStorage.setItem('hideAll', 'true')
    } else {
      this.props.hideAll(false)
      this.setState({
        hideAll: false
      })
      localStorage.setItem('hideAll', 'false')
    }
  }
}

export default RightTopButtons;