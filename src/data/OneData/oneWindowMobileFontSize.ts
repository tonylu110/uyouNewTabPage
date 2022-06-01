const oneWindowMobileFontSize = (isMobile: boolean): string => {
  let fontSize: string = ''
  if (isMobile) {
    fontSize = '30px'
  }
  return fontSize
}

export default oneWindowMobileFontSize