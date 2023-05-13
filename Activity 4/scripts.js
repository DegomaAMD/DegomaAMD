const pres1 = document.getElementById("pres1");
const pres1year = document.getElementById("pres1year");
const pres2 = document.getElementById("pres2");
const pres2year = document.getElementById("pres2year");
const pres3 = document.getElementById("pres3");
const pres3year = document.getElementById("pres3year");
const pres4 = document.getElementById("pres4");
const pres4year = document.getElementById("pres4year");
const pres5 = document.getElementById("pres5");
const pres5year = document.getElementById("pres5year");
const pres6 = document.getElementById("pres6");
const pres6year = document.getElementById("pres6year");
const pres7 = document.getElementById("pres7");
const pres7year = document.getElementById("pres7year");
const pres8 = document.getElementById("pres8");
const pres8year = document.getElementById("pres8year");
const pres9 = document.getElementById("pres9");
const pres9year = document.getElementById("pres9year");


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

pres1.innerHTML = presidents[0].name;
pres1year.innerHTML = presidents[0].details;
pres2.innerHTML = presidents[1].name;
pres2year.innerHTML = presidents[1].details;
pres3.innerHTML = presidents[2].name;
pres3year.innerHTML = presidents[2].details;
pres4.innerHTML = presidents[3].name;
pres4year.innerHTML = presidents[3].details;
pres5.innerHTML = presidents[4].name;
pres5year.innerHTML = presidents[4].details;
pres6.innerHTML = presidents[5].name;
pres6year.innerHTML = presidents[5].details;
pres7.innerHTML = presidents[6].name;
pres7year.innerHTML = presidents[6].details;
pres8.innerHTML = presidents[7].name;
pres8year.innerHTML = presidents[7].details;
pres9.innerHTML = presidents[8].name;
pres9year.innerHTML = presidents[8].details;


