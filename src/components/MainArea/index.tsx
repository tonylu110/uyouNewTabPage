import React, { FC, useState } from 'react'
import '../../scss/MainArea/MainArea.scss'
import LinkArea from './LinkArea'
import MoreSearch from './MoreSearch'
import SearchBar from './SearchBar'
import mobileCheck from "../../util/isMobile";
import getSearchEngine from "../../util/getSearchEngine";
import IMainAreaProps from '../../interface/Props/IMainAreaProps'

const MainArea: FC<IMainAreaProps> = ({
  hideAll
}) => {
  const [moreSearchShow, setMoreSearchShow] = useState(false)
  const [searchEngine, setSearchEngine] = useState(getSearchEngine())
  const [mainAreaTopHeight, setMainAreaTopHeight] = useState(new mobileCheck().getMainAreaTopHeight())

  return (
    <div className='main_area' style={{ marginTop: mainAreaTopHeight }}>
      <SearchBar
        moreSearchShow={moreSearchShow}
        searchEngine={searchEngine}
        event={(e: boolean) => {
          setMoreSearchShow(e)
        }}
      />
      <MoreSearch
        moreSearchShow={moreSearchShow}
        event={(e: any) => {
          setMoreSearchShow(e.moreSearchShow)
          setSearchEngine(e.searchEngine)
        }}
      />
      {hideAll ? null : <LinkArea />}
    </div>
  )
}

export default MainArea