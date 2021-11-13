import Apod from '@apods/data/types/Apod'
import ApodRepository from '@apods/data/types/ApodRepository'
import fs from 'fs/promises'

const fetchApods = async (): Promise<Apod[]> => {
  const json = await fs.readFile('apods/data/repository/inMemoryApodRepository/mockApods.json', { encoding: 'utf8' })
  return JSON.parse(json)
}

const inMemoryApodRepository: ApodRepository = {
  latest: async () => fetchApods().then((apods) => apods[0]),
  get: async (date: string) => fetchApods().then((apods) => apods.find((apod) => apod.date === date) || null),
  page: async (page: number, size: number) => {
    const apods = await fetchApods()
    const start = page * size
    const end = start + size

    return {
      apods: apods.slice(start, end),
      pageData: {
        page,
        size,
        total: apods.length,
      }
    }
  }
}

export default inMemoryApodRepository