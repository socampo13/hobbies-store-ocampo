export const myPromise = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => resolve (
            [
                {
                    id: 1,
                    title: 'Figura Naruto',
                    description: 'Figura Naruto Modo Sabio',
                    price: 20,
                    picture:{
                        pictureUrl: 'https://i.pinimg.com/564x/03/67/ac/0367acbd5287704daff34eaea608b1f9.jpg', alt: "Figura Naruto"
                    },
                    stock: 5,
                    category: "figura",
                    freeShipping: true,
                    material: 'plastico'
                },
                {
                    id: 2,
                    title: 'Booster Box Magic The Gathering',
                    description: 'Booster Box Ikoria',
                    price: 100,
                    picture:{
                        pictureUrl: 'https://crystal-cdn3.crystalcommerce.com/photos/6548195/81fFNKA3A0L._AC_SL1500_.jpg', alt: "Booster Box"
                    },
                    stock: 3,
                    category: "juego de mesa",
                    freeShipping: true,
                    material: 'carton'
                },
                {
                    id: 3,
                    title: 'Katana Tanjiro',
                    description: 'Katana de colección Kimetsu no Jaiba de Tanjiro',
                    price: 300,
                    picture:{
                        pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_602974-MLM43775445419_102020-O.jpg', alt:"Katana colección"
                    },
                    stock: 2,
                    category: "decoracion",
                    freeShipping: true,
                    material: 'acero'
                },
                {
                    id: 4,
                    title: 'Booster Box Pokemon Sun & Moon',
                    description: 'Booster Box Pokemon Sun & Moon TCG 24 sobres',
                    price: 240,
                    picture:{
                        pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/A1cnNs5NUwL._AC_SX425_.jpg', alt:"Booster Box Pokemon"
                    },
                    stock: 3,
                    category: "juego de mesa",
                    freeShipping: true,
                    material: 'carton'
                },
                {
                    id: 5,
                    title: 'Set Lego Star Wars Millenium Falcon',
                    description: 'Set para armar Lego Star Wars Millenium Falcon con 7541 piezas',
                    price: 1000,
                    picture:{
                        pictureUrl: 'https://www.lego.com/cdn/cs/set/assets/blte22f1f8d1cacfb3c/75192_alt1.jpg', alt:"Set Lego Star Wars"
                    },
                    stock: 1,
                    category: "decoracion",
                    freeShipping: true,
                    material: 'plastico'
                },
                {
                    id: 6,
                    title: 'Figura Dragon Slayer Ornstein',
                    description: 'Figura Dragon Slayer Ornstein de la saga Dark Souls edición definitiva',
                    price: 750,
                    picture:{
                        pictureUrl: 'https://media.redadn.es/imagenes/dark-souls-remastered-pc-ps4-xbox-one-nintendo-switch_316322.jpg', alt:"Dragon Slayer Ornstein Definitive Edition"
                    },
                    stock: 2,
                    category: "figura",
                    freeShipping: true,
                    material: 'plastico'
                }
            ]
        ), 1000)
    })
}