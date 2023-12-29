'use client'

import { useState } from "react";

interface TextLineProps {
    id: string
    line: string
    isSwitchOn: boolean
    onTextLineChange: (id: string, newText: string) => void
    onPressEnter: () => void
}

export default function TextLine({ id, line, isSwitchOn, onTextLineChange, onPressEnter }: TextLineProps) {
    const [textLine, setTextLine] = useState(line);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setTextLine(newText);
        onTextLineChange(id, newText);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onPressEnter()
    }

    return (
        <div className="w-2/4 mb-4">
            {!isSwitchOn ? (
                <input
                    className="bg-stone-900 px-1 rounded w-full border-none outline-none dark:bg-black dark:text-white"
                    type="text"
                    value={textLine}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            ) : (
                <p className="bg-stone-900 px-1 rounded w-full border-none outline-none dark:bg-black dark:text-white">{textLine}</p>
            )}

        </div>
    );
};