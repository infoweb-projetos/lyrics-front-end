import Image from "next/image";
import Link from "next/link";
import { playlistProps } from "@/types/playlistProps";

export function PlaylistCard({cardImage, name, description, id}: playlistProps){
    return(
        <div className="max-w-[250px]">
            <Link href={`playlist/${id}`}>
                <div className="bg-gradient-to-b from-zinc-700/70 to-zinc-700/20 rounded-[10px] p-[20px] max-w-[250px]">
                    <Image src={cardImage} alt="card" width={250} height={250} className="rounded-[10px]"/>
                    <p className="font-medium text-xl max-w-[160px] truncate">{name}</p>
                </div>
            </Link>
        </div>
    )
}