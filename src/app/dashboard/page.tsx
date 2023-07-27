import { Songcard } from "@/components/Songcard";

export default function dashboard(){
    return (
        <div>
            <h1 className="text-3xl font-semibold">Vistas recentemente</h1>
            <div className="my-8">
                //fazer o map de songs
                <Songcard/>
            </div>
            <h1 className="text-3xl font-semibold">Playlists</h1>
        </div>

    )
}

//https://stackoverflow.com/questions/42374873/limit-items-in-a-map-loop