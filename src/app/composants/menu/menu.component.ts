import { Component } from '@angular/core';
import {Menu} from "./Menu";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

/* Tableau de bord */
/* Menu */
public menuProperties : Array<Menu> =[
{
  id: '1',
  titre: 'Gestion des produits',
  icon: 'bi bi-boxes',
  url: '',
  sousMenu:[
    {
      id: "11",
      titre: "Catégories",
      icon: 'bi bi-boxes',
      url: '/categorie'
    },
    {
      id: "11",
      titre: "Liste des produits",
      icon: 'bi bi-boxes',
      url: '/produit'
    },
  ]
},
  {
    id: '2',
    titre: 'Gestion des clients',
    icon: 'bi bi-person',
    url: '',
    sousMenu:[
      {
        id: "21",
        titre: "Liste des clients",
        icon: 'bi bi-person',
        url: '/client'
      }
    ],
  },
  {
    id: '3',
    titre: 'Gestion des salles',
    icon: 'bi bi-house-door',
    url: '',
    sousMenu:[
      {
        id: "31",
        titre: "Liste des salles",
        icon: 'bi bi-pie-chart',
        url: 'admin/salle'
      }
    ],
  },
  {
    id: '4',
    titre: 'Gestion des personne',
    icon: 'bi bi-person-square',
    url: '',
    sousMenu:[
      {
        id: "41",
        titre: "Liste des parents",
        icon: 'bi bi-pie-chart',
        url: 'admin/personne/parent'
      },
      {
        id: "42",
        titre: "Liste des eleves",
        icon: 'bi bi-pie-chart',
        url: 'admin/personne/eleve'
      },
      {
        id: "43",
        titre: "Liste des profs",
        icon: 'bi bi-pie-chart',
        url: 'admin/personne/prof'
      }
    ],
  },
  {
    id: '5',
    titre: 'Gestion des absences',
    icon: 'bi bi-check-square',
    url: '',
    sousMenu:[
      {
        id: "51",
        titre: "Liste des absences",
        icon: '',
        url: 'admin/absence'
      }
    ]
  },
  {
    id: '6',
    titre: 'Gestion de paiement',
    icon: 'bi bi-cash-coin',
    url: '',
    sousMenu:[
      {
        id: "61",
        titre: "Paiement",
        icon: '',
        url: 'admin/paiement'
      }
    ]
  },
  {
    id: '7',
    titre: "Gestion d'emploi",
    icon: 'bi bi-calendar-week',
    url: '',
    sousMenu:[
      {
        id: "71",
        titre: "emploie de temps",
        icon: '',
        url: 'admin/emploi'
      }
    ]
  }
]

  constructor(
    private router : Router,
  ) { }
  navigate(menu : Menu){
    this.router.navigate([menu.url]);
  }
}
