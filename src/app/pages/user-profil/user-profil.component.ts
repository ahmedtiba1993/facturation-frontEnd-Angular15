import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css'],
})
export class UserProfilComponent {
  newPassword: string | undefined;
  confirmNewPassword: string | undefined;
  success: boolean = false;
  erreur: boolean = false;
  constructor(private userService: UserService) {}

  editPassword() {
    if (this.newPassword !== this.confirmNewPassword) {
      this.erreur = true;
      this.success = false;
      return;
    }
    const userString = localStorage.getItem('user');
    if (userString) {
      const user = JSON.parse(userString);
      const id = user.id;
      this.userService.editPassword(id, this.newPassword!).subscribe((data) => {
        this.success = true;
        this.erreur = false;
      });
    }
  }
}
