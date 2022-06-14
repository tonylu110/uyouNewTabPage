import { FC, useState, useEffect } from 'react'
import '../../scss/MainArea/MainArea.scss'
import LinkArea from './LinkArea'
import MoreSearch from './MoreSearch'
import SearchBar from './SearchBar'
import mobileCheck from "../../util/isMobile";
import getSearchEngine from "../../util/getSearchEngine";
import IMainAreaProps from '../../interface/Props/IMainAreaProps'
import IMoreSearchShow from '../../interface/IMoreSearchShow'
import getNowMobileState from '../../util/getNowMobileState'

const MainArea: FC<IMainAreaProps> = ({
  hideAll
}) => {
  const [moreSearchShow, setMoreSearchShow] = useState(false)
  const [searchEngine, setSearchEngine] = useState(getSearchEngine())
  const [mainAreaTopHeight, setMainAreaTopHeight] = useState(new mobileCheck().getMainAreaTopHeight())

  const setMoreSearchIn = (show: boolean, engin: string | null) => {
    setMoreSearchShow(show)
    if (engin !== null) {
      setSearchEngine(engin)
    }
  }

  useEffect(() => {
    getNowMobileState((isMobile: boolean) => {
      var marginTop
      if (isMobile) {
        marginTop = '-200px'
      } else {
        marginTop = ''
      }
      setMainAreaTopHeight(marginTop)
    })
  }, [])

  return (
    <div className='main_area' style={{ marginTop: mainAreaTopHeight }}>
      <SearchBar
        moreSearchShowProp={moreSearchShow}
        searchEngineProp={searchEngine}
        setMoreSearchIn={(e: boolean) => setMoreSearchIn(e, null)}
      />
      <MoreSearch
        moreSearchShowProp={moreSearchShow}
        setMoreSearchIn={(e: IMoreSearchShow) => setMoreSearchIn(e.moreSearchShow, e.searchEngine)}
      />
      {hideAll ? null : <LinkArea />}
    </div>
  )
}

export default MainArea