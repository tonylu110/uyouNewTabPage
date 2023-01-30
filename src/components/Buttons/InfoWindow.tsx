import { FC } from 'react'
import IInfoWindowProps from '../../interface/Props/IInfoWindowProps'
import closeImg from '../../img/close.png'
import logoImg from '../../logo.svg'
import coolapkImg from '../../img/coolapk.png'
import qqImg from '../../img/qq.jpg'

const InfoWindow: FC<IInfoWindowProps> = ({
  infoWindowShow,
  clickCloseButton
}) => {
  return (
    <div className={`${infoWindowShow ? 'scale-100 :right-[calc(50%-400px)] md:bottom-[calc(50%-300px)] top-[calc(50%-300px)]' : 'scale-0 md:-right-[360px] md:-bottom-[260px] -top-[800px]'} fixed z-[200] w-[350px] h-[480px] md:w-[800px] md:h-[600px] bg-white-90 shadow-2xl backdrop-blur rounded-[20px] p-[25px] md:p-[50px] flex flex-col border-t-[2px] border-r-[2px] border-solid border-white-70 transition-all duration-500 text-black`}>
      <div
        className='close-btn'
        onClick={() => clickCloseButton(false)}
      >
        <img className='w-[100%] h-[100%]' src={closeImg} alt='' />
      </div>
      <div className='overflow-y-scroll rounded-[15px]'>
        <div className='flex flex-col'>
          <span className='text-[23px] font-bold mb-[20px] ml-[5px]'>关于 uyou 新标签页</span>
          <img className='w-[80px] h-[80px] mb-[20px] ml-[5px] rounded-[40px]' src={logoImg} alt="" />
        </div>
        <div className='flex flex-col'>
          <div className="bg-white-90 p-[15px] text-[15px] rounded-[15px] mb-[15px] font-bold">
            这是基于 uyou 新标签页 chrome 扩展的网页版，她会让你感觉到和 chrome 扩展版几乎一样的体验，也可以让暂未支持的浏览器作为主页使用
          </div>
          <div className="bg-white-90 p-[15px] text-[15px] rounded-[15px] mb-[15px] font-bold">
            <div>这个新标签页的开源地址为：</div>
            <a
              className='block w-[120px] p-[10px] rounded-[10px] bg-[#0078d4] text-[white] text-center mt-[10px] no-underline'
              href="https://github.com/tonylu110/uyouNewTabPage" target="view_window"
            >点击前往</a>
            <div style={{ marginTop: '15px' }}>如果你感兴趣也可以去这个项目的扩展版上给我一个 star，此标签页扩展的开源地址为：</div>
            <a
              className='block w-[120px] p-[10px] rounded-[10px] bg-[#0078d4] text-[white] text-center mt-[10px] no-underline'
              href="https://github.com/tonylu110/uyouNewTab" target="view_window"
            >点击前往</a>
          </div>
          <div className="bg-white-90 p-[15px] text-[15px] rounded-[15px] mb-[15px] font-bold">
            <div>我的 GitHub 地址：</div>
            <a
              className='block w-[120px] p-[10px] rounded-[10px] bg-[#0078d4] text-[white] text-center mt-[10px] no-underline'
              href="https://github.com/tonylu110" target="view_window"
            >点击前往</a>
            <div className='flex md:flex-row flex-col mt-[10px]'>
              <div className='mr-[20px]'>
                <div className='mr-[10px]'>我的 酷安 账号：</div>
                <img className='mt-[5px] rounded-[10px] md:h-[300px] w-[100%]' src={coolapkImg} alt='' />
                <a className='block w-[120px] p-[10px] rounded-[10px] bg-[#0078d4] text-[white] text-center mt-[10px] no-underline' href="http://www.coolapk.com/u/1126752" target="view_window">点击前往</a>
              </div>
              <div>
                <div>欢迎加群讨论：</div>
                <img className='mt-[5px] rounded-[10px] md:h-[300px] w-[100%]' src={qqImg} alt='' />
                <a className='block w-[120px] p-[10px] rounded-[10px] bg-[#0078d4] text-[white] text-center mt-[10px] no-underline' href="https://jq.qq.com/?_wv=1027&amp;k=B8k42CI9" target="view_window">点击前往</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoWindow