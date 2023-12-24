import ChordBox from "./ChordBox";

interface chordLineProps {
    chordList: string
}

export default function ChordLine({ chordList }: chordLineProps) {
    const chordPosition = chordList.split("-")

    return (
        <div className="w-2/4 bg-[#424242] rounded px-1 text-cyan-400 font-semibold">
            <ul className="flex justify-between">
                {chordPosition.map((chord, position) => {
                    return (
                        <ChordBox key={position} chord={chord} />
                    )
                })}
            </ul>
        </div>
    );
}