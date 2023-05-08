import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css'],
})
export class ModifierClientComponent {
  idClient: number = 0;
  errorMessage: Array<String> = [];

  constructor(private avtiveRoute: ActivatedRoute, private route: Router) {}

  ngOnInit() {
    this.idClient = parseInt(
      <string>this.avtiveRoute.snapshot.paramMap.get('id')
    );
  }
}
