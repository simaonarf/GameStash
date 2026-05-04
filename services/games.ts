import { CardGameProps } from "@/components/Main/card"

export const games: CardGameProps[] = [
    {
        id: 1,
        title: "Hollow Knight",
        description: "Silksong é a épica sequência de Hollow Knight, o premiado jogo de aventura e ação. ",
        status: "playing",
        uri: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2503/d975a2a2d80276d9891d8d3430fb8ec7ed2e4ad807707e76.png",
    },
    {
        id: 2,
        title: "Red Dead Redemption 2",
        description: "Estados Unidos, 1899. O fim da era do velho oeste se aproxima, e os xerifes caçam as últimas gangues fora da lei. Quem não se rende ou sucumbe, acaba morto.",
        status: "playing",
        uri: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
    }
]