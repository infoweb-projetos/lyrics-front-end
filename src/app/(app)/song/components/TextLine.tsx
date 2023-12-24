interface textLineProps {
    line: string
}

export default function TextLine({line}: textLineProps) {
    return (
        <div className="w-2/4 mb-4">
            <p>{line}</p>
        </div>
    )
}