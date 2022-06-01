import React, { Component } from 'react'
import '../../scss/MainArea/MainArea.scss'
import LinkArea from './LinkArea'
import MoreSearch from './MoreSearch'
import SearchBar from './SearchBar'
import mobileCheck from "../../util/isMobile";
import getSearchEngine from "../../util/getSearchEngine";

export default class MainArea extends Component<any, any> {
  state = {
    moreSearchShow: false,
    searchEngine: getSearchEngine(),
    mainAreaTopHeight: new mobileCheck().getMainAreaTopHeight(),
    hideAll: false
  }
  render() {
    return (
      <div className='main_area' style={{marginTop: this.state.mainAreaTopHeight}}>
        <SearchBar 
          moreSearchShow={this.state.moreSearchShow}
          searchEngine={this.state.searchEngine} 
          event={(e: boolean) => {
            this.setState({
              moreSearchShow: e
            })
          }}
        />
        <MoreSearch 
          moreSearchShow={this.state.moreSearchShow} 
          event = {(e: any) => {
            this.setState({
              moreSearchShow: e.moreSearchShow,
              searchEngine: e.searchEngine,
            })
          }} 
        />
        {this.state.hideAll ? null : <LinkArea />}
      </div>
    )
  }
  static getDerivedStateFromProps(props: any) {
    return {
      hideAll: props.hideAll
    }
  }
}
