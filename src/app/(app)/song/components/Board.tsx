'use client'

import ChordLine from "./ChordLine";
import TextLine from "./TextLine";
import { useEffect, useState } from "react";
import ControlledSwitches from "./Switch";
import { editLyric } from "@/operations/editLyric";

interface boardProps {
    songId: string
    songName: string
    lyrics: string
}

export default function Board({ songId, songName, lyrics }: boardProps) {
    const [linesArray, setLinesArray] = useState(
        lyrics
            ? lyrics.split("||").map((content) => ({
                id: Math.random().toString(36).substring(2),
                content: content,
            }))
            : [
                {
                    id: Math.random().toString(36).substring(2),
                    content: "Comece por aqui",
                },
            ]
    );

    useEffect(() => {
        const newLyricsString = linesArray.map(line => line.content).join('||');
        editLyric(songId, newLyricsString)
    }, [linesArray])

    const [isSwitchOn, setSwitchOn] = useState(false);

    const handleSwitchChange = () => {
        setSwitchOn(!isSwitchOn);
    };

    const handleChordStringChange = (id: string, newChordString: string) => {
        setLinesArray((prevChordString) =>
            prevChordString.map((chordString) =>
                chordString.id === id ? { ...chordString, content: newChordString } : chordString
            )
        )
    }

    const handleTextLineChange = (id: string, newTextLine: string) => {
        setLinesArray((prevTextLine) =>
            prevTextLine.map((textLine) =>
                textLine.id === id ? { ...textLine, content: newTextLine } : textLine
            )
        )
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-semibold">{songName}</h1>
                <div className="flex justify-between items-center">
                    <p className="font-bold">Modo de Edição</p>
                    <ControlledSwitches onSwitchChange={handleSwitchChange} />
                </div>
            </div>
            <div>
                {linesArray.map((line, index) => {
                    return (
                        <>
                            {index % 2 === 0 ? (
                                <TextLine
                                    key={line.id}
                                    id={line.id}
                                    line={line.content}
                                    isSwitchOn={isSwitchOn}
                                    onTextLineChange={handleTextLineChange}
                                />
                            ) : (
                                <ChordLine
                                    key={line.id}
                                    id={line.id}
                                    chordString={line.content}
                                    isSwitchOn={isSwitchOn}
                                    onChordStringChange={handleChordStringChange}
                                />
                            )}
                        </>
                    )
                })}
            </div>
        </div>
    )
}