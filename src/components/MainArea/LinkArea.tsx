import React, { Component } from 'react'
import '../../scss/MainArea/LinkArea.scss'
import link from '../../data/linkAreaData/links'
import linkImg from '../../data/linkAreaData/linkImg'
import styles from '../../data/linkAreaData/linkStyle'

export default class LinkArea extends Component<any, any> {
  constructor(props: any) {
    super(props)    
    let screenWidth: number = window.innerWidth
    let isMobile: boolean = false
    if (screenWidth < 768) {
      isMobile = true
    }
    this.state = {
      isMobile: isMobile,
      links: link,
    }
  }
  render() {
    return (
      <div className="link_area" style={{ width: (this.state.isMobile ? '366px' : '') }}>
        {
          linkImg.map((item: any, index: number) => {
            return (
              this.state.isMobile && (index > 4 && index < 9) ? null : (
                <div onClick={() => this.openLink(this.state.links[index])} key={index}>
                  <div style={styles(index)}>
                    <img src={item} alt="" />
                  </div>
                </div>
              ) 
            )
          })
        }
      </div>
    )
  }
  openLink = (link: string) => {
    window.open(link, '_self')
  }
}
