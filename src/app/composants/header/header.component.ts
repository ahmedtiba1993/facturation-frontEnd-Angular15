import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {UserService} from "../../services/user/user.service";
import {User} from "../../api/models/user";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userConnected : User = this.userService.getUser()

  constructor(@Inject(DOCUMENT) private document: Document,
              private userService:UserService,
  ) {
  }

  ngOnInit(): void {
    this.userConnected = this.userService.getUser()
  }
  sidebarToggle()
  {
    //toggle sidebar function
    this.document.body.classList.toggle('toggle-sidebar');
  }


  logout() {
    localStorage.removeItem("accessToken")
  }
}
