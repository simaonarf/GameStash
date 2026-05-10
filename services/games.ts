import { CardGameProps } from "@/components/Main/card"

export const games: CardGameProps[] = [
    {
        id: 1,
        title: "Hollow Knight",
        description: "Silksong é a épica sequência de Hollow Knight, o premiado jogo de aventura e ação.",
        status: "playing",
        uri: "https://image.api.playstation.com/vulcan/ap/rnd/202508/2503/d975a2a2d80276d9891d8d3430fb8ec7ed2e4ad807707e76.png",
    },
    {
        id: 2,
        title: "Forza Horizon 6",
        description: "Descubra as paisagens deslumbrantes do Japão com mais de 550 carros do mundo real e torne-se uma lenda das corridas na maior aventura de direção em mundo aberto de Forza Horizon de todos os tempos.",
        status: "wishlist",
        uri: "https://content.presspage.com/uploads/1523/cca058d2-d82a-4d74-94a5-4bdc6f4da17f/1920_fh6_evergreen_keyart_branded-square_2160x2160_rgb.png?10000",
    },
    {
        id: 3,
        title: "F1 25",
        description: "Deixe sua marca no mundo das corridas no EA SPORTS F1® 25, com o renovado modo Minha Equipe, o terceiro capítulo emocionante de Ponto de Frenagem e muito mais.",
        status: "playing",
        uri: "https://cdn1.epicgames.com/spt-assets/4c57275be6f1469b9ae10006f7429a81/f1-25-jc5mm.jpg"
    },
    {
        id: 4,
        title: "Resident Evil 2 Remake",
        description: "Reviva o clássico do survival horror com gráficos modernos, acompanhando Leon S. Kennedy e Claire Redfield em Raccoon City infestada por zumbis.",
        status: "completed",
        uri: "https://m.media-amazon.com/images/M/MV5BNDFhYjRjMzQtNDQxMC00ODMyLWJjZmItOTM1MWVhYjRmZTA5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },

    {
        id: 5,
        title: "God of War",
        description: "Kratos embarca em uma nova jornada na mitologia nórdica ao lado de seu filho Atreus, enfrentando deuses e monstros.",
        status: "completed",
        uri: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7 "
    },
    {
        id: 6,
        title: "Cyberpunk 2077",
        description: "Explore Night City, uma metrópole futurista obcecada por poder, glamour e modificações corporais.",
        status: "playing",
        uri: "https://m.media-amazon.com/images/I/81zvwQQU7WL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 7,
        title: "Red Dead Redemption 2",
        description: "Estados Unidos, 1899. O fim da era do velho oeste se aproxima, e os xerifes caçam as últimas gangues fora da lei. Quem não se rende ou sucumbe, acaba morto.",
        status: "completed",
        uri: "https://image.api.playstation.com/cdn/UP1004/CUSA03041_00/Hpl5MtwQgOVF9vJqlfui6SDB5Jl4oBSq.png"
    }
]