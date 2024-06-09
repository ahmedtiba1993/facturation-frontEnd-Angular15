import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClientDto} from "../../../api/models/client-dto";
import {ClientService} from "../../../services/client/client.service";

@Component({
  selector: 'app-modifier-client',
  templateUrl: './modifier-client.component.html',
  styleUrls: ['./modifier-client.component.css']
})
export class ModifierClientComponent {

  idClient : number = 0
  client : ClientDto = {}
  errorMessage : Array<string> = []
  success : boolean = false
  isLoading = false;
  isButtonLoading:  boolean = false;

  constructor(
    private avtiveRoute : ActivatedRoute,
    private route : Router,
    private clientService :ClientService,
  ) {
  }

  ngOnInit(){
    this.idClient = parseInt(<string>this.avtiveRoute.snapshot.paramMap.get('id'));
    this.findClientById()
  }

  findClientById(){
    this.isLoading = true
    this.clientService.findById(this.idClient).subscribe(data=>{
      this.client = data
      this.isLoading = false
    })
  }


  modifierClient() {
    this.isLoading = true
    if(this.checkEmail(this.client.email!) == false && this.client.email != null){
      this.errorMessage = ["Adresse e-mail invalide"]
      this.isLoading = false
      return;
    }
    this.clientService.add(this.client).subscribe(data=>{
      this.findClientById()
      this.success = true
      this.isLoading = false
      this.errorMessage = []
    },error=>{
      this.success = false
      this.isButtonLoading = false
      this.errorMessage = error.error.errors
      this.isLoading = false
    })
  }

  checkEmail( email : string) : boolean{
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
}
