'use client'

import { useState } from "react";

interface TextLineProps {
    id: string
    line: string
    isSwitchOn: boolean
    onTextLineChange: (id: string, newText: string) => void
}

export default function TextLine({ id, line, isSwitchOn, onTextLineChange }: TextLineProps) {
    const [textLine, setTextLine] = useState(line);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newText = e.target.value;
        setTextLine(newText);
        onTextLineChange(id, newText);
    };

    return (
        <div className="w-fit mb-4">
            {!isSwitchOn ? (
                <input
                    className="bg-transparent w-full border-none outline-none"
                    type="text"
                    value={textLine}
                    onChange={handleChange}
                />
            ) : (
                <p>{textLine}</p>
            )}

        </div>
    );
};