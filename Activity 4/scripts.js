const act4Body = document.querySelector('#root');


var presidents = [
  {
    name: 'Bongbong Marcos',
    details: '2022-Present',
  },
  {
    name: 'Rodrigo Duterte',
    details: '2016-2012',
  },
  {
    name: 'Benigno Aquino III',
    details: '2010-2016',
  },
  {
    name: 'Gloria Macapagal Arroyo',
    details: '2001-2010',
  },
  {
    name: 'Joseph Ejercito Estrada',
    details: '1998-2001',
  },
  {
    name: 'Fidel V. Ramos',
    details: '1992-1998',
  },
  {
    name: 'Corazon Aquino',
    details: '1986-1992',
  },
  {
    name: 'Ferdinand Marcos',
    details: '1965-1986',
  },
  {
    name: 'Diosdado Macapagal',
    details: '1961-1965',
  },
];

const act4Image =  document.createElement('img');
act4Body.appendChild(act4Image);

act4Image.setAttribute('src', './logo.png');
act4Image.setAttribute('alt', 'logo picture');

const act4Div =  document.createElement('div');
act4Body.appendChild(act4Div);
act4Div.setAttribute('class', 'container');


const Act4Cards = () => {
  for (i = 0 ; i < presidents.length ; i++){ 
    const act4Card =  document.createElement('div');
    act4Div.appendChild(act4Card);
    act4Card.setAttribute('class', 'card');

    const act4CardPres = document.createElement('h1');
    act4Card.appendChild(act4CardPres);
    act4CardPres.setAttribute('class','card-title');
    act4CardPres.innerHTML = presidents[i].name;

    const act4CardYear = document.createElement('div');
    act4Card.appendChild(act4CardYear);
    act4CardYear.setAttribute('class','card-body');

    const act4CardYearvalue = document.createElement('p');
    act4CardYear.appendChild(act4CardYearvalue);
    act4CardYearvalue.setAttribute('class','card-text');
    act4CardYearvalue.innerHTML = presidents[i].details;
  }
}
Act4Cards();