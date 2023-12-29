import FilterSongs from "./components/FilterSongs";
import SongCreate from "./components/SongCreate";

export default function Songs() {  

    return (
        <div>

            <div className="flex justify-between pb-3
            dark:border-b-2 dark:border-gray-500 ">
                <span className="text-3xl font-semibold">Músicas</span>
                <SongCreate />
            </div>
            <FilterSongs/>
        </div>
    )
}