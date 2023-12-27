interface textLineProps {
    line: string
}

export default function TextLine({line}: textLineProps) {
    return (
        <div className="w-fit mb-4">
            <p>{line}</p>
        </div>
    )
}