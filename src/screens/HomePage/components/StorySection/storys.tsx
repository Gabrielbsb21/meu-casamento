import comeco from '/public/assets/images/couple/comeco.jpg';
import noivado from '/public/assets/images/couple/noivado.jpg';
import familia from '/public/assets/images/couple/familia.jpg';

import flowerShape from '/public/assets/images/story/flower.svg';
import flowerShape2 from '/public/assets/images/story/flower-2.svg';

const Storys = [
  {
    sImg: comeco,
    flower: flowerShape,
    title: 'Como nos conhecemos',
    date: 'Fevereiro 2016',
    description:
      'Conheci Gabriela em 2016, no CILT em Taguatinga. Depois, nossos caminhos continuaram a se cruzar ocasionalmente na UnB. Começamos a conversar e, após muita insistência da minha parte, finalmente saímos para assistir a um filme. A partir desse encontro, nossas conversas se tornaram cada vez mais frequentes, até que tivemos nosso primeiro beijo perto do RU na UnB. Assim, uma linda história de amor começou a se desenrolar.'
  },
  {
    sImg: noivado,
    flower: flowerShape2,
    title: 'Ele propôs, eu disse sim',
    date: '4 Dez 2021',
    description:
      'Em uma viagem inesquecível a Pirenópolis, Gabriel se ajoelhou e fez a pergunta que mudaria nossas vidas. Com o coração acelerado e lágrimas de alegria, eu disse sim. Foi um momento mágico, cheio de amor e emoção, que marcou o início de uma nova jornada juntos.',
    order1: 'order-lg-2 order-1',
    order2: 'order-lg-1 order-2'
  },
  {
    sImg: familia,
    flower: flowerShape,
    title: ' Adoção da Jade',
    date: '17 Set 2023',
    description:
      'A família cresceu com a chegada da nossa amada cachorrinha Jade. Decidimos adotar a Jade e desde então, ela trouxe ainda mais alegria e amor para nossas vidas. Com seu carinho e energia contagiante, Jade se tornou parte essencial da nossa família.'
  }
];

export default Storys;
