import {songCardProps} from './songProps'
export interface playlistCardProps{ 
    id?: string
    cardImage?: any
    name?: string
    description?: string
}
export type playlistDataProps = {
    playlist: {
      id: string;
      name: string;
      description: string;
      cardImage: any
    },
    Songs: songCardProps[]
};
export type playlistIdProps = {
    id: string
}