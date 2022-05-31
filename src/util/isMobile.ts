const isMobile = (): boolean => {
  let screenWidth: number = window.innerWidth
  return screenWidth < 768;
}

export default isMobile