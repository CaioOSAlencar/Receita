'use client'

import {useState} from "react"

export default function Contador(){
    const [Contador, setContador] = useState(0)
    return(
        <div className="m-8">
            <h2>Contador: {Contador}</h2>
            <input 
            className="border p-2 bg-red-500"
            type="button"
            value="conta"
            onClick={() => setContador(Contador + 1)}/>
        </div>
    )
}