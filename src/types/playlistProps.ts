import {songProps} from './songProps'

export interface playlistProps { 
    id?: string
    name?: string
    description?: string
    songs?: songProps[]
    cardImage?: any
}