import {songProps} from './songProps'

export interface playlistProps { 
    id: string
    name: string
    description: string
    Songs?: songProps[]
    cardImage?: any
}