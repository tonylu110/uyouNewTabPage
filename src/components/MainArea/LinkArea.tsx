import { useEffect, useState } from 'react'
import '../../scss/MainArea/LinkArea.scss'
import link from '../../data/linkAreaData/links'
import linkImg from '../../data/linkAreaData/linkImg'
import styles from '../../data/linkAreaData/linkStyle'
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
    <div className="link_area" style={{ width: (isMobile ? '366px' : '') }}>
      {
        linkImg.map((item: any, index: number) => {
          return (
            isMobile && (index > 4 && index < 9) ? null : (
              <div onClick={() => openLink(links[index])} key={index}>
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

export default LinkArea