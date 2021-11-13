import { Nullable } from '@shared/data/types/Nullable'
import { PagedData } from '@shared/data/types/PagedData'
import Apod from './Apod'

export default interface ApodRepository {
  latest(): Promise<Apod>
  page(page: number, size: number): Promise<{ apods: Apod[], pageData: PagedData }>
  get(date: string): Promise<Nullable<Apod>>
}