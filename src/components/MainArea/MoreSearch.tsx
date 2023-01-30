import { FC, useEffect, useState } from 'react'
import getSearchEngine from '../../data/SearchData/SearchImg'
import engine from '../../data/SearchData/SearchEngin'
import isHideAll from "../../util/isHideAll";
import IMoreSearchProps from '../../interface/Props/IMoreSearchProps';

const MoreSearch: FC<IMoreSearchProps> = ({
  moreSearchShowProp,
  setMoreSearchIn
}) => {
  const [moreSearchShow, setMoreSearchShow] = useState(false)
  const [moreSearch, setMoreSearch] = useState(false)

  const clickSearchImg = (moreSearchShow: boolean, searchEngine: string) => {
    setMoreSearchIn({
      moreSearchShow: moreSearchShow,
      searchEngine: searchEngine
    })
    localStorage.setItem('searchEngine', searchEngine)
    setMoreSearch(false)
    setMoreSearchShow(moreSearchShow)
  }

  useEffect(() => {
    if (!moreSearchShowProp) {
      setMoreSearch(false)
    } else {
      setMoreSearch(true)
    }
  }, [moreSearchShowProp])

  return (
    <div className={`${moreSearch ? 'translate-y-[70px] opacity-100 z-[3]' : 'translate-y-0 opacity-0 -z-1'} ${isHideAll() ? 'mt-0' : '-mt-[200px]'} md:max-w-[500px] max-w-[302px] fixed bg-white-90 backdrop-blur rounded-[20px] shadow-2xl border-t-[2px] border-r-[2px] border-solid border-white-70 z-[4] transition-all duration-300`}>
      <div className="max-w-[500px] flex flex-row flex-wrap">
        {
          engine.map((item: any, index: number) => {
            return (
              <div
                className={`rounded-[20px] hover:bg-[#00000010] min-w-[100px] min-h-[100px] max-w-[100px] max-h-[100px] ${index === 1 ? 'p-[15px]' : 'p-[25px]'} ${index === 2 ? 'p-[20px]' : null}`}
                onClick={() => clickSearchImg(moreSearchShow, item)}
                key={index}
              >
                <img
                  className={`w-[50px] h-[50px] ${index === 1 ? 'w-[70px] h-[70px]' : null} ${index === 2 ? 'w-[60px] h-[60px]' : null}` }
                  src={getSearchEngine(item)}
                  alt={item}
                />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default MoreSearch