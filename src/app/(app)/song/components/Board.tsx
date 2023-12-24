import ChordLine from "./ChordLine";
import TextLine from "./TextLine";
import lyricsExample from "../api"

const { lyrics } = lyricsExample()
const lyricsArray = lyrics.split("\n");

export default function Board() {
    return (
        <div>
            {lyricsArray.map((line, index) => {
                return (
                    <>
                        {index % 2 === 0 ? (
                            <TextLine key={index} line={line} />
                        ) : (
                            <ChordLine key={index} chordList={line} />
                        )}
                    </>
                )
            })}
        </div>
    )
}