import { FC, useEffect, useState } from 'react'
import getSearchEngineImg from '../../data/SearchData/SearchImg'
import mobileCheck from "../../util/isMobile";
import getSearchEngine from "../../util/getSearchEngine";
import ISearchBarProp from '../../interface/Props/ISearchBarProp';

const SearchBar: FC<ISearchBarProp> = ({
  moreSearchShowProp,
  searchEngineProp,
  setMoreSearchIn
}) => {
  const [moreSearchShow, setMoreSearchShow] = useState(false)
  const [searchEngine, setSearchEngine] = useState(getSearchEngine())
  const [searchEngineImg, setSearchEngineImg] = useState(getSearchEngineImg(getSearchEngine()))
  const [keyword, setKeyword] = useState('')
  const [searchBtnShow, setSearchBtnShow] = useState(false)

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
    if (!new mobileCheck().isMobile()) {
      if (e.target.value.length > 0) {
        setSearchBtnShow(true)
      } else {
        setSearchBtnShow(false)
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
    <div className='hover:bg-white-70 hover:border-white-50 w-[346px] md:w-[590px] h-[52px] bg-white-90 shadow-2xl backdrop-blur rounded-[10px] p-[10px] flex flex-row mb-[20px] border-t-[2px] border-r-[2px] border-solid border-white-70 duration-200 z-[5]'>
      <img
        className='p-[5px] h-[30px] w-[30px] mr-[10px] rounded-[50%] bg-[white]'
        alt='search engine image'
        src={searchEngineImg}
        onClick={() => clickSearchImg(moreSearchShow)}
      />
      <input
        className='border-0 bg-transparent rounded-[6px] h-[30px] flex-1 text-[20px] font-bold outline-0'
        type="text"
        onKeyUp={searchKeyword}
      />
      <div className={`w-[2px] h-[30px] mx-[10px] bg-[#44444450] ${searchBtnShow ? '' : 'hidden'}`}></div>
      <div
        className={`${searchBtnShow ? 'w-[45px]' : 'w-[0px]'} text-center text-black font-bold text-[17px] leading-[30px] cursor-pointer select-none overflow-hidden whitespace-nowrap transition duration-300`}
        onClick={() => toSearch(searchEngine)}
      >搜索</div>
    </div>
  )
}

export default SearchBar