export interface songCardProps {
    id: string
    name: string
    playlist_id?: string
}
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