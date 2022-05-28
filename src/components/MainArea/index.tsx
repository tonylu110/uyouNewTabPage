import React, { Component } from 'react'
import '../../scss/MainArea/MainArea.scss'
import LinkArea from './LinkArea'
import MoreSearch from './MoreSearch'
import SearchBar from './SearchBar'

export default class MainArea extends Component<any, any> {
  constructor(props: any) {
    super(props)
    let screenWidth: number = window.innerWidth
    let searchEngine: unknown = localStorage.getItem('searchEngine')
    let mainAreaTopHeight: string = ''
    if (searchEngine === null) {
      searchEngine = 'google'
    }
    if (screenWidth < 768) {
      mainAreaTopHeight = '-200px'
    }
    this.state = {
      moreSearchShow: false,
      searchEngine: searchEngine,
    }
  }
  render() {
    return (
      <div className='main_area'>
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
        <LinkArea />
      </div>
    )
  }
}
