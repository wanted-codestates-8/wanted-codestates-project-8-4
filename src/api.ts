import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: {
    'TEST-AUTH': 'wantedpreonboarding',
  },
})

export const get = async () =>
  await api.get('/info/contents').then(({ data }) => data)
