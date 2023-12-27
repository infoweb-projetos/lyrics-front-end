'use client'

import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, horizontalListSortingStrategy } from "@dnd-kit/sortable"
import ChordBox from "./ChordBox";

interface chordLineProps {
    chordList: string
}

export default function ChordLine({ chordList }: chordLineProps) {
    const chordsArray = chordList.split("-")

    const newArray = chordsArray.map((chord, index) => ({
        id: `${index}-${chord}`,
        chord: chord,
    }));

    const [chords, setChords] = useState(newArray)

    useEffect(() => {
        const chordString = chords.map((chord) => chord.chord).join("-");
        console.log(chordString)
    }, [chords]);

    const onDragend = (event: any) => {
        const { active, over } = event
        if (over === null) {
            return;
        }
        if (active.id === over.id) {
            return;
        }
        setChords((chords) => {
            const oldIndex = chords.findIndex((chord) => chord.id === active.id)
            const newIndex = chords.findIndex((chord) => chord.id === over.id)
            return arrayMove(chords, oldIndex, newIndex)
        })
    }

    return (
        <div className="w-2/4 bg-[#424242] rounded px-1 text-cyan-400 font-semibold flex justify-between">
            <DndContext collisionDetection={closestCenter} onDragEnd={onDragend}>
                <SortableContext items={chords} strategy={horizontalListSortingStrategy}>
                    {chords.map((obj) => {
                        return (
                            <ChordBox key={obj.id} id={obj.id} chord={obj.chord} />
                        )
                    })}
                </SortableContext>
            </DndContext>
        </div>
    );
}