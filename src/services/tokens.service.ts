import axios from 'axios'

export const getAllTokens = () =>
  axios.get('https://datapi.jup.ag/v1/assets/search?query=')

export const searchTokens = (query: string) =>
  axios.get(
    `https://datapi.jup.ag/v1/assets/search?query=${encodeURIComponent(
      query
    )}`
  )
