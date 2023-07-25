import { Button } from "@/components/Button";

export default function Music(){
    return(
        <>
            <div className="flex justify-between mt-20">
                <span className="text-4xl font-semibold">Músicas</span>
                <Button text='Adicionar música'/>
            </div>
            
        </>
    )
}