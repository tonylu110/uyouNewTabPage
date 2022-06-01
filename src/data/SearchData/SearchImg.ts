import googleImg from '../../img/google.png'
import bingImg from '../../img/bing-logo.png'
import baiduImg from '../../img/baidu.png'

const getSearchEngineImg = (searchEngine: string) => {
  if (searchEngine === 'google') {
    return googleImg
  } else if (searchEngine === 'bing') {
    return bingImg
  } else if (searchEngine === 'baidu') {
    return baiduImg
  }
}

export default getSearchEngineImg