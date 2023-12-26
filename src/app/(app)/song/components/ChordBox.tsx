import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

export interface chordBoxProps {
    id: string
    chord: string
}

export default function ChordBox({ id, chord }: chordBoxProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id })
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }
    let text = chord === "*" ? "" : chord

    return (

        < div
            ref={setNodeRef} style={style} {...attributes} {...listeners}
            key={id}
            className="relative w-[25px] text-center cursor-grab"
        >
            <p>{text}</p>
        </div >
    )
}