'use client'

import { DotsThreeVertical } from "phosphor-react"

export interface SongcardProps{ 
    id?: string
    name?: string
    tom?: string
}

export function Songcard({name, tom}: SongcardProps){
    return(
        <>
            <div className="border border-black rounded-lg p-6 max-w-[450px] flex justify-between items-center">
                <p className="font-medium text-xl">Boate Azul</p>
                <div>
                    <p className="p-2">Tom: cm7</p>
                    <DotsThreeVertical size={32} />
                </div>
            </div>
        </>
        
    )
}