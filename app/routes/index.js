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
      image: 'http://placehold.it/250x400',
      links: [
        {
          link: 'https://github.com/Eptick',
          class: 'github'
        },
        {
          link: 'http://leon-redzic.from.hr',
          class: 'desktop'
        }]
    },
    {
      id: '2',
      ime: 'Jura Šolja',
      fakultet: 'Fakultet Organizacije i Informatike',
      godina: 'Treća godina preddiplomskog studija',
      stanovanje: 'Čakovec',
      fokus: 'Backend',
      image: 'http://placehold.it/250x400',
      links: [
        {
          link: 'https://github.com/Eptick',
          class: 'github'
        },
        {
          link: 'http://leon-redzic.from.hr',
          class: 'desktop'
        }]
    },
    {
      id: '3',
      ime: 'Marko Škvorc',
      fakultet: 'Fakultet Organizacije i Informatike',
      godina: 'Treća godina preddiplomskog studija',
      stanovanje: 'Pripizdina neka',
      fokus: 'Baze podataka',
      image: 'http://placehold.it/250x400',
      links: [
        {
          link: 'https://github.com/Eptick',
          class: 'github'
        },
        {
          link: 'http://leon-redzic.from.hr',
          class: 'desktop'
        }]
    }];
  }
});
