import { useEffect, useState } from 'react'
import link from '../../data/linkAreaData/links'
import linkImg from '../../data/linkAreaData/linkImg'
import mobileCheck from "../../util/isMobile";
import getNowMobileState from '../../util/getNowMobileState'

const LinkArea = () => {
  const links = link
  const [isMobile, setIsMobile] = useState(new mobileCheck().isMobile())

  const openLink = (link: string) => {
    window.open(link, '_self')
  }

  useEffect(() => {
    getNowMobileState((isMobile: boolean) => {
      setIsMobile(isMobile)
    })
  }, [])

  return (
    <div className="flex flex-row md:w-[610px] w-[366px] flex-wrap z-[2]">
      {
        linkImg.map((item: any, index: number) => {
          return (
            isMobile && (index > 4 && index < 9) ? null : (
              <div onClick={() => openLink(links[index])} key={index}>
                <div className='hover:bg-white/50 border-white/40 cursor-pointer w-[102px] h-[102px] bg-white/60 backdrop-blur shadow-2xl m-[10px] rounded-[10px] border-t-[2px] border-r-[2px] border-solid flex items-center justify-center p-[25px]'>
                  <img className='w-[50px] h-[50px]' src={item} alt="" />
                </div>
              </div>
            )
          )
        })
      }
    </div>
  )
}

export default LinkArea