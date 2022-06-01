import IOneWindowStyle from "../../interface/IOneWindowStyle"
import mobileCheck from "../../util/isMobile";

const screenHeight =  document.documentElement.clientHeight

const oneWindowStyle = (oneWindowShow: boolean): IOneWindowStyle => {
    let oneWindowOpenData: IOneWindowStyle = {
        bottom: '-170px',
        transform: 'scale(0, 0)',
        width: '',
        height: '',
        padding: ''
    }
    if (new mobileCheck().isMobile()) {
        oneWindowOpenData.width = '270px'
        oneWindowOpenData.height = '400px'
        oneWindowOpenData.padding = '40px'
        oneWindowOpenData.bottom = '-50vh'
    }
    if (oneWindowShow) {
        oneWindowOpenData.transform = 'scale(1, 1)'
        oneWindowOpenData.bottom = (screenHeight - 402) / 2 + 'px'
    }
    return oneWindowOpenData
}

export default oneWindowStyle