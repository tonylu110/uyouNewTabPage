import { FC, useEffect, useState } from 'react'
import '../../scss/MainArea/MoreSearch.scss'
import getSearchEngine from '../../data/SearchData/SearchImg'
import engine from '../../data/SearchData/SearchEngin'
import mobileCheck from "../../util/isMobile";
import isHideAll from "../../util/isHideAll";
import IMoreSearchProps from '../../interface/Props/IMoreSearchProps';
import getNowMobileState from '../../util/getNowMobileState';

const MoreSearch: FC<IMoreSearchProps> = ({
  moreSearchShowProp,
  setMoreSearchIn
}) => {
  const [moreSearchWidth, setMoreSearchWidth] = useState(new mobileCheck().getMoreSearchWidth())
  const [moreSearchShow, setMoreSearchShow] = useState(false)
  const [mOpacity, setMOpacity] = useState('0')
  const [mZIndex, setMZIndex] = useState('3')
  const [moreSearch, setMoreSearch] = useState('')
  const [moreSearchTop, setMoreSearchTop] = useState(isHideAll() ? '0px' : '')

  const clickSearchImg = (moreSearchShow: boolean, searchEngine: string) => {
    setMoreSearchIn({
      moreSearchShow: moreSearchShow,
      searchEngine: searchEngine
    })
    localStorage.setItem('searchEngine', searchEngine)
    setMOpacity('0')
    setMZIndex('3')
    setMoreSearch('')
    setMoreSearchShow(moreSearchShow)
  }

  useEffect(() => {
    if (!moreSearchShowProp) {
      setMOpacity('0')
      setMZIndex('3')
      setMoreSearch('')
    } else {
      setMOpacity('')
      setMZIndex('')
      setMoreSearch(' more_search_show')
    }
  }, [moreSearchShowProp])

  useEffect(() => {
    getNowMobileState((isMobile: boolean) => {
      if (isMobile) {
        setMoreSearchWidth('324px')
      } else {
        setMoreSearchWidth('')
      }
    })
  }, [])

  return (
    <div
      className={'more_search' + moreSearch}
      style={{
        opacity: mOpacity,
        zIndex: mZIndex,
        maxWidth: moreSearchWidth,
        marginTop: moreSearchTop
      }}
    >
      <div className="search_engines">
        {
          engine.map((item: any, index: number) => {
            return (
              <div onClick={() => clickSearchImg(moreSearchShow, item.name)} style={item.style} key={index}>
                <img src={getSearchEngine(item.name)} alt='' style={item.img} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MoreSearch