const isHideAll = (): boolean => {
  let hideAll: unknown = localStorage.getItem('hideAll')
  if (hideAll === null) {
    hideAll = false
  } else hideAll = hideAll === 'true';
  return hideAll as boolean
}

export default isHideAll