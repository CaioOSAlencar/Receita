'use client'

import { useState } from "react";
import Card from "../Card";

export default function CardList(){
    
    const [cards, setCards] = useState([
        {id: 1, titulo: "ovo com Arroz e pepipo", tempo: 25, server: 2}
        {id: 2, titulo: "ovo mexido", tempo: 20, server: 2}
        {id: 3, titulo: "ovo com macarrão", tempo: 25, server: 1}
        {id: 4, titulo: "Pão com ovo", tempo: 25, server: 1}
    ])
    
    return(
        <div className="flex flex-wrap flex-col m-8">
            <div>Quantidade de receitas: {cards.length}</div>
            <ul className="list-disc">
                {cards.map(c => (
                    <li key={c.id}>{c.titulo} - serve {c.server} pessoa(s) </li>
                ))}

            </ul>
        </div>
    )
}