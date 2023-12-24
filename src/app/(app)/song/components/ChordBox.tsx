interface chordBoxProps {
    chord: string
}

export default function ChordBox({ chord }: chordBoxProps) {
    return (
        <div className="w-[25px] text-center">
            <p>{chord === "*" ? "" : chord}</p>
        </div>
    )
}