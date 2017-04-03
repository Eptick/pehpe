import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [{
      id: '1',
      ime: 'Leon Redžić',
      fakultet: 'Fakultet Organizacije i Informatike',
      godina: 'Treća godina preddiplomskog studija',
      stanovanje: 'Varaždin/Sisak',
      fokus: 'FullStack',
      image: 'img/redzic.jpg',
      links: [
        {
          link: 'https://github.com/Eptick',
          class: 'github'
        },
        {
          link: 'http://leon-redzic.from.hr',
          class: 'desktop'
        }],
        projekti : [
          {
            ime: "Tray Music App",
            img: "img/projekti/redzic/musicapp.png",
            opis: "Aplikacija koja omogućava preuzimanje youtube sadržaja u mp3 formatu te ujedino služi kao i music player"
          },
          {
            ime: "SQL Query helper",
            img: "img/projekti/redzic/baze.png",
            opis: "Aplikacija se spaja na MySQL bazu podataka te pomaže u pisajnu jednostavnih SQL upita preko query buildera"
          },
          {
            ime: "Green website",
            img: "img/projekti/redzic/Green.png",
            opis: "Web shop rađen u prestashop razvojnom okviru"
          }
        ]
    },
    {
      id: '2',
      ime: 'Jura Šolja',
      fakultet: 'Fakultet Organizacije i Informatike',
      godina: 'Treća godina preddiplomskog studija',
      stanovanje: 'Čakovec',
      fokus: 'Baze podataka',
      image: 'img/solja.png',
      links: [
        {
          link: 'https://github.com/jursolja',
          class: 'github'
        }],
        projekti : [
          {
            ime: "MQtt Chat Aplikacija",
            img: "img/projekti/solja/mqtt.png",
            opis: "Ovo je chat aplikacija rađena u Window form tehnologiji. Aplikacija koristi MQtt okvir. Rađena je kao projekt za kolegij Mreže Računala 2"
          },
          {
            ime: "Rezervacija hotela",
            img: "img/projekti/solja/baze.png",
            opis: "Rađen je Era model te pripadajuća baza podataka i web aplikacija. Aplikacija služi za rezerviranje soba u hotelu. Projekt je rađen u sklopu kolegija Baze podataka 2 te u duhu kolegija korištene su sve mogućnosti baze i alata za razvoj."
          }
        ]
    },
    {
      id: '3',
      ime: 'Marko Škvorc',
      fakultet: 'Fakultet Organizacije i Informatike',
      godina: 'Treća godina preddiplomskog studija',
      stanovanje: 'Podturen',
      fokus: 'BackEnd',
      image: 'img/skvorc2.jpg',
      links: [
        {
          link: 'https://github.com/marskvorc',
          class: 'github'
        }],
        projekti : [
          {
            ime: "Složi PC",
            img: "img/projekti/skvorc/slozi.png",
            opis: "Aplikacija ima bazu podataka koja sadrži različite komponente računala te po zadanim kriterijima predlaže knfiguraciju za vaše uvijete."
          },
          {
            ime: "MQtt Chat Aplikacija",
            img: "img/projekti/solja/mqtt.png",
            opis: "Ovo je chat aplikacija rađena u Window form tehnologiji. Aplikacija koristi MQtt okvir. Rađena je kao projekt za kolegij Mreže Računala 2"
          }
        ]
    }];
  }
});

