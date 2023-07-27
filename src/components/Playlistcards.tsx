import Image from "next/image";

export interface PlaylistcardProps{ 
    id?: string
    cardImage?: any
    name: string
    description: string
}

export function Playlistcard({cardImage, name, description}: PlaylistcardProps){ 
    return(
        <>
        <div className="max-w-[250px] max-h-[350px] mt-10">
            <Image src={cardImage} alt="card" width={250} height={250} className="rounded-xl"/>
            <p className="font-medium text-2xl">{name}</p>
            <span>{description}</span>
        </div>
        </>
    )
}