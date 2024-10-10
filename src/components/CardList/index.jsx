'use client'

import { useState } from "react";
import Card from "../Card";

export default function CardList(){
    
    const [cards, setCards] = useState([
        {id: 1, titulo: "ovo com Arroz e pepipo",   imagem: "Ovo-pepino.png", tempo: 25, server: 2},
        {id: 2, titulo: "ovo mexido",               imagem: "Ovo-pepino.png", tempo: 20, server: 2},
        {id: 3, titulo: "ovo com macarrão",         imagem: "Ovo-pepino.png", tempo: 25, server: 1},
        {id: 4, titulo: "Pão com ovo",              imagem: "Ovo-pepino.png", tempo: 25, server: 1}
    ])
    
    return(
        <div className="flex flex-wrap flex-col m-8">
            <div>Quantidade de receitas: {cards.length}</div>
            
            <div className="flex flex-wrap">
                    {cards.map(c => (
                        <Card 
                        key={c.id}
                        imagem={c.imagem}
                        titulo={c.titulo}
                        tempo={c.tempo}
                        serve={c.serve}
                        />
                    ))}
            </div>

        </div>
    )
}