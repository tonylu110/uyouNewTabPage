import { FC, useEffect, useState } from 'react'
import '../../scss/MainArea/SearchBar.scss'
import getSearchEngineImg from '../../data/SearchData/SearchImg'
import mobileCheck from "../../util/isMobile";
import getSearchEngine from "../../util/getSearchEngine";
import ISearchBarProp from '../../interface/Props/ISearchBarProp';

const SearchBar: FC<ISearchBarProp> = ({
  moreSearchShowProp,
  searchEngineProp,
  setMoreSearchIn
}) => {
  const [searchBarWidth, setSearchBarWidth] = useState(new mobileCheck().getSearchWidth())
  const [moreSearchShow, setMoreSearchShow] = useState(false)
  const [searchEngine, setSearchEngine] = useState(getSearchEngine())
  const [searchEngineImg, setSearchEngineImg] = useState(getSearchEngineImg(getSearchEngine()))
  const [keyword, setKeyword] = useState('')
  const [searchBtnShow, setSearchBtnShow] = useState({
    keywordsRight: 'none',
    searchBtn: ''
  })

  useEffect(() => {
    setMoreSearchShow(moreSearchShowProp)
    setSearchEngine(searchEngineProp)
    setSearchEngineImg(getSearchEngineImg(searchEngineProp))
  }, [moreSearchShowProp, searchEngineProp])

  const clickSearchImg = (moreSearchShow: boolean) => {
    setMoreSearchIn(!moreSearchShow)
    setMoreSearchShow(!moreSearchShow)
  }

  const searchKeyword = (e: any) => {
    if (searchBarWidth === '') {
      if (e.target.value.length > 0) {
        setSearchBtnShow({
          keywordsRight: '',
          searchBtn: '45px'
        })
      } else {
        setSearchBtnShow({
          keywordsRight: 'none',
          searchBtn: ''
        })
      }
    }
    setKeyword(e.target.value)
    if (e.key === 'Enter') {
      toSearch(searchEngine)
    }
  }

  const toSearch = (searchEngine: string | unknown) => {
    switch (searchEngine) {
      case 'google':
        return window.open('https://www.google.com/search?q=' + keyword, '_self')
      case 'bing':
        return window.open('https://cn.bing.com/search?q=' + keyword, '_self')
      case 'baidu':
        return window.open('https://www.baidu.com/s?wd=' + keyword, '_self')
      default:
        return null
    }
  }

  return (
    <div
      className='search_bar'
      style={{ width: searchBarWidth }}
    >
      <img alt='' src={searchEngineImg} onClick={() => clickSearchImg(moreSearchShow)} />
      <input type="text" onKeyUp={searchKeyword} />
      <div className="keywords_right" style={{ display: searchBtnShow.keywordsRight }}></div>
      <div className="search_btn" onClick={() => toSearch(searchEngine)} style={{ width: searchBtnShow.searchBtn }}>搜索</div>
    </div>
  )
}

export default SearchBar