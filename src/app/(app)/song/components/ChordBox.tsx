'use client'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';

export interface ChordBoxProps {
    id: string;
    chord: string;
    isSwitchOn: boolean;
    onChordChange: (id: string, newChord: string) => void;
}

export default function ChordBox({ id, chord, isSwitchOn, onChordChange }: ChordBoxProps) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
        id: id,
    });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    const text = chord === '*' ? '' : chord;

    const [editedText, setEditedText] = useState(text);

    const handleBlur = () => {
        onChordChange(id, editedText);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedText(e.target.value);
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            key={id}
            className="relative w-[25px] text-center cursor-grab"
        >
            {!isSwitchOn ? (
                <input
                    className="bg-transparent w-full border-none outline-none"
                    type="text"
                    value={editedText}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            ) : (
                <p>{editedText}</p>
            )}
        </div>
    );
}