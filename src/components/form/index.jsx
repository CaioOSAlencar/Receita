'use client'

import { useState } from "react"

export default function Form(){

    const [name, setName] = useState("")

    return(
        <div>
            <h2>nome: ?</h2>
            <form className="m-8">
                <input 
                className="text-white"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)} />
            </form>
        </div>
    )
}