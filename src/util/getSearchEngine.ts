const getSearchEngine = (): string => {
  let searchEngine: unknown = localStorage.getItem('searchEngine')
  if (searchEngine === null) {
    searchEngine = 'google'
  }
  return searchEngine as string
}

export default getSearchEngine