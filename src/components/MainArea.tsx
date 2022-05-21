import React, { Component } from 'react'
import '../scss/MainArea.scss'
import SearchBar from './SearchBar'

export default class MainArea extends Component<any, any> {
  render() {
    return (
      <div className='main_area'>
        <SearchBar
          event={(e: boolean) => {
            console.log(e);
          }}
        />
      </div>
    )
  }
}
