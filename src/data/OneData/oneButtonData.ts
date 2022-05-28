import IOneButtonStyle from "../../interface/IOneButtonStyle";

const oneButtonStyle = (oneButtonShow: boolean) => {
  const screenWidth = window.innerWidth;
  let oneButtonData: IOneButtonStyle = {
    marginBottom: '',
    maxWidth: ''
  }
  if (screenWidth < 768) {
    if (oneButtonShow) {
      oneButtonData.marginBottom = '20vh'
    }
    oneButtonData.maxWidth = '280px'
  } else {
    if (oneButtonShow) {
      oneButtonData.marginBottom = '20px'
    }
  }
  return oneButtonData
}

export default oneButtonStyle