import IBackground from "../interface/IBackground";

class mobileCheck {
  private backgroundImage: string
  private backgroundHeight: string
  private readonly mainAreaTopHeight: string
  private readonly moreSearchWidth: string
  private readonly searchBarWidth: string
  constructor() {
    this.backgroundImage = 'url(https://dev.iw233.cn/api.php?sort=pc)'
    this.backgroundHeight = ''
    this.mainAreaTopHeight = ''
    this.moreSearchWidth = ''
    this.searchBarWidth = ''
  }

  isMobile = (): boolean => {
    let screenWidth: number = window.innerWidth
    return screenWidth < 768;
  }

  getBackground = (): IBackground => {
    let screenHeight: number = document.documentElement.clientHeight
    if (this.isMobile()) {
      this.backgroundImage = 'url(https://dev.iw233.cn/api.php?sort=mp)'
      this.backgroundHeight = screenHeight + 'px'
    }
    return {
      backgroundImage: this.backgroundImage,
      backgroundHeight: this.backgroundHeight
    }
  }

  getMainAreaTopHeight = (): string => {
    return this.isMobile() ? '-200px' : this.mainAreaTopHeight
  }

  getMoreSearchWidth = (): string => {
    return this.isMobile() ? '324px' : this.moreSearchWidth
  }

  getSearchWidth = (): string => {
    return this.isMobile() ? '324px' : this.searchBarWidth
  }
}

export default mobileCheck