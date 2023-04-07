import { Component } from '@angular/core';
import {UserService} from "../../services/user/user.service";
import {AuthenticationRequest} from "../../api/models/authentication-request";
import {ProduitDto} from "../../api/models/produit-dto";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {AuthenticationResponse} from "../../api/models/authentication-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private userService:UserService,
    private router:Router
  ){
  }

  ngOInit(){
    if(localStorage.getItem("accessToken")){
      this.router.navigate(['']);
    }
  }
  pro: Array<ProduitDto> = [];
  authenticationRequest:AuthenticationRequest={};
  errorMessage ="";

  login(){
    this.userService.login(this.authenticationRequest).subscribe((data)=>{
      if (data) { // vérifier si data est défini
        this.userService.setAccessToken(data.token as AuthenticationResponse); // caster data en AuthenticationResponse
      }
      this.router.navigate(['']);
    },  error =>{
      this.errorMessage=error.error.message;
    });;
  }
}
