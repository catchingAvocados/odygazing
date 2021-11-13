import { Nullable } from '@shared/data/types/Nullable'

export enum ApodMediaType {
  image = 'image',
  video = 'video',
}

export default interface Apod {
  date: string
  mediaType: ApodMediaType,
  title: string
  explanation: string
  serviceVersion: string
  url: Nullable<string>
  hdUrl: Nullable<string>
  copyright: Nullable<string>
}