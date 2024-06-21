export interface Gift {
  id: number;
  title: string;
  price: string;
  imageUrl: string;
}

const giftData: Gift[] = [
  {
    id: 1,
    title: 'Patrocine a Lua de Mel',
    price: 'R$ 200,00',
    imageUrl: '/assets/images/gifts/pipa.webp'
  },
  {
    id: 2,
    title: 'Três meses de ração para a Jade',
    price: 'R$ 300,00',
    imageUrl: '/assets/images/gifts/jade.jpg'
  },
  {
    id: 3,
    title: 'Patrocine a despedida da noiva',
    price: 'R$ 200,00',
    imageUrl: '/assets/images/gifts/despedida-noiva.jpg'
  },
  {
    id: 4,
    title: 'Patrocine a despedida do noivo',
    price: 'R$ 200,00',
    imageUrl: '/assets/images/gifts/despedida-noivo.jpg'
  },
  {
    id: 5,
    title: 'Cafeteira para os noivos',
    price: 'R$ 619,90',
    imageUrl: '/assets/images/gifts/cafeteira.jpg'
  },
  {
    id: 6,
    title: 'Sessão de cinema para os noivos relaxarem',
    price: 'R$ 100,00',
    imageUrl: '/assets/images/gifts/cinema.jpg'
  },
  {
    id: 7,
    title: '6 meses de Netflix para os noivos',
    price: 'R$ 240,00',
    imageUrl: '/assets/images/gifts/netflix.jpg'
  },
  {
    id: 8,
    title: '2 meses de conta de luz paga para os noivos',
    price: 'R$ 240,00',
    imageUrl: '/assets/images/gifts/conta-luz.webp'
  },
  {
    id: 9,
    title: '1 ano de Spotify pago para os noivos',
    price: 'R$ 260,00',
    imageUrl: '/assets/images/gifts/spotify.jpg'
  },
  {
    id: 10,
    title: 'Sanduicheira e Grill',
    price: 'R$ 148,70',
    imageUrl: '/assets/images/gifts/sanduicheira.webp'
  },
  {
    id: 11,
    title: 'Conjunto de roupa de cama',
    price: 'R$ 359,99',
    imageUrl: '/assets/images/gifts/roupa-cama.jpeg'
  },
  {
    id: 12,
    title: 'Edredom queen 100% algodão',
    price: 'R$ 284,00',
    imageUrl: '/assets/images/gifts/edredom.webp'
  },
  {
    id: 13,
    title: 'Liquidificador',
    price: 'R$ 339,90',
    imageUrl: '/assets/images/gifts/liquidificador.webp'
  },
  {
    id: 14,
    title: 'Forno Elétrico',
    price: 'R$ 739,20',
    imageUrl: '/assets/images/gifts/forno-eletrico.webp'
  },
  {
    id: 15,
    title: 'Aparelho de jantar',
    price: 'R$ 345,68',
    imageUrl: '/assets/images/gifts/aparelho-jantar.webp'
  },
  {
    id: 16,
    title: 'Faqueiro',
    price: 'R$ 239,90',
    imageUrl: '/assets/images/gifts/faqueiro.webp'
  },
  {
    id: 17,
    title: 'Microondas',
    price: 'R$ 538,84',
    imageUrl: '/assets/images/gifts/microondas.webp'
  },
  {
    id: 18,
    title: 'Parte 1 Sofá',
    price: 'R$ 500,00',
    imageUrl: '/assets/images/gifts/sofa.png'
  },
  {
    id: 19,
    title: 'Parte 2 Sofa',
    price: 'R$ 500,00',
    imageUrl: '/assets/images/gifts/sofa.png'
  },
  {
    id: 20,
    title: 'Parte 3 sofa',
    price: 'R$ 500,00',
    imageUrl: '/assets/images/gifts/sofa.png'
  },
  {
    id: 21,
    title: 'Parte 4 sofa',
    price: 'R$ 500,00',
    imageUrl: '/assets/images/gifts/sofa.png'
  },
  {
    id: 22,
    title: '1 mês de compras',
    price: 'R$ 500,00',
    imageUrl: '/assets/images/gifts/compras.jpg'
  },
  {
    id: 23,
    title: 'Batedeira',
    price: 'R$ 369,90',
    imageUrl: '/assets/images/gifts/batedeira.jpg'
  },
  {
    id: 24,
    title: 'Liquidificador',
    price: 'R$ 360,00',
    imageUrl: '/assets/images/gifts/liquidificador.webp'
  },
  {
    id: 25,
    title: 'Mixer',
    price: 'R$ 250,59',
    imageUrl: '/assets/images/gifts/mixer.webp'
  },
  {
    id: 26,
    title: 'Aspirador de pó',
    price: 'R$ 249,90',
    imageUrl: '/assets/images/gifts/aspirador.webp'
  },
  {
    id: 27,
    title: '2 Toalhas de banho',
    price: 'R$ 100,00',
    imageUrl: '/assets/images/gifts/toalha-banho.webp'
  },
  {
    id: 28,
    title: 'Filtro de água - Parte 1',
    price: 'R$ 323,00',
    imageUrl: '/assets/images/gifts/filtro-agua.webp'
  },
  {
    id: 29,
    title: 'Filtro de água - Parte 2',
    price: 'R$ 323,00',
    imageUrl: '/assets/images/gifts/filtro-agua.webp'
  },
  {
    id: 30,
    title: 'Filtro de água - Parte 3',
    price: 'R$ 323,00',
    imageUrl: '/assets/images/gifts/filtro-agua.webp'
  },
  {
    id: 31,
    title: 'Filtro de água - Parte 4',
    price: 'R$ 323,00',
    imageUrl: '/assets/images/gifts/filtro-agua.webp'
  },
  {
    id: 32,
    title: 'Ferro de passar roupa',
    price: 'R$ 150,00',
    imageUrl: '/assets/images/gifts/ferro.jpg'
  },
  {
    id: 33,
    title: 'Mala para viagem',
    price: 'R$ 250,00',
    imageUrl: '/assets/images/gifts/mala.webp'
  },
  {
    id: 34,
    title: 'Vale-presente para SPA',
    price: 'N/A',
    imageUrl: '/assets/images/gifts/spa.webp'
  },
  {
    id: 35,
    title: 'Caixa de ferramentas',
    price: 'R$ 138,22',
    imageUrl: '/assets/images/gifts/caixa-ferramenta.webp'
  },
  {
    id: 36,
    title: 'Jogo de tabuleiro',
    price: 'R$ 150,00',
    imageUrl: '/assets/images/gifts/tabuleiro.webp'
  }
];

export default giftData;
