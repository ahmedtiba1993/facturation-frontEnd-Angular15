import { Component } from '@angular/core';
import { Menu } from './Menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  /* Tableau de bord */
  /* Menu */
  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Gestion des produits',
      icon: 'bi bi-boxes',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Catégories',
          icon: 'bi bi-boxes',
          url: '/categorie',
        },
        {
          id: '11',
          titre: 'Liste des produits',
          icon: 'bi bi-boxes',
          url: '/produit',
        },
      ],
    },
    {
      id: '2',
      titre: 'Gestion des clients',
      icon: 'bi bi-person',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Liste des clients',
          icon: 'bi bi-person',
          url: '/client',
        },
      ],
    },
    {
      id: '6',
      titre: 'Gestion des facture',
      icon: 'bi bi-cash-coin',
      url: '',
      sousMenu: [
        {
          id: '61',
          titre: 'Liste des facures',
          icon: '',
          url: 'facture',
        },
        {
          id: '62',
          titre: 'Recap dacture client',
          icon: '',
          url: 'recapClient',
        },
      ],
    },
    {
      id: '7',
      titre: 'Gestion des devis',
      icon: 'bi bi-file-earmark-text',
      url: '',
      sousMenu: [
        {
          id: '61',
          titre: 'Liste des desvis',
          icon: '',
          url: 'devis',
        },
        {
          id: '62',
          titre: 'Recap devis client',
          icon: '',
          url: 'recapDevis',
        },
      ],
    },
  ];

  constructor(private router: Router) {}
  navigate(menu: Menu) {
    this.router.navigate([menu.url]);
  }
}
