'use client'

import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core"
import { SortableContext, arrayMove, horizontalListSortingStrategy } from "@dnd-kit/sortable"
import ChordBox from "./ChordBox";

interface chordLineProps {
    id: string
    chordString: string
    isSwitchOn: boolean
    onChordStringChange: (id: string, newChordString: string) => void;
}

export default function ChordLine({ id, chordString, isSwitchOn, onChordStringChange }: chordLineProps) {
    const [chords, setChords] = useState(chordString.split("-").map((chord) => ({
        id: Math.random().toString(36).substring(2),
        chord: chord,
    })))

    useEffect(() => {
        const newChordString = chords.map((chord) => chord.chord).join("-");
        onChordStringChange(id, newChordString)
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

    const handleChordChange = (id: string, newChord: string) => {
        setChords((prevChords) =>
            prevChords.map((chord) =>
                chord.id === id ? { ...chord, chord: newChord } : chord
            )
        );
    };

    return (
        <>
            {isSwitchOn ? (
                <div className="w-2/4 mb-1 bg-[#424242] rounded px-1 text-cyan-400 font-semibold flex justify-between">
                    <DndContext collisionDetection={closestCenter} onDragEnd={onDragend}>
                        <SortableContext items={chords} strategy={horizontalListSortingStrategy}>
                            {chords.map((obj) => (
                                <ChordBox
                                    key={obj.id}
                                    id={obj.id}
                                    chord={obj.chord}
                                    isSwitchOn={isSwitchOn}
                                    onChordChange={handleChordChange}
                                />
                            ))}
                        </SortableContext>
                    </DndContext>
                </div>
            ) : (
                <div className="w-2/4 mb-1 bg-[#424242] rounded px-1 text-cyan-400 font-semibold flex justify-between">
                    {chords.map((obj) => (
                        <ChordBox
                            key={obj.id}
                            id={obj.id}
                            chord={obj.chord}
                            isSwitchOn={isSwitchOn}
                            onChordChange={handleChordChange}
                        />
                    ))}
                </div>
            )}
        </>
    );
}