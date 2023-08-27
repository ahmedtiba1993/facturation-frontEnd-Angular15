import { Component } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';
import { UserDto } from '../../api/models/user-dto';

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

  userDto: UserDto = {};
  successMessage = false;
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUserInfo();
  }
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

  getUserInfo() {
    this.userService.getUserIfo().subscribe((data) => {
      this.userDto = data;
    });
  }

  modifier() {
    if (
      this.userDto.firstname != null &&
      this.userDto.lastname != null &&
      this.userDto.email != null &&
      this.userDto.tel != null &&
      this.userDto.fax != null &&
      this.userDto.mobile != null
    ) {
      this.userService
        .modifierUserInfo(
          this.userDto.firstname,
          this.userDto.lastname,
          this.userDto.email,
          this.userDto.tel,
          this.userDto.fax,
          this.userDto.mobile
        )
        .subscribe((data) => {
          this.successMessage = true;
          setTimeout(() => {
            this.successMessage = false;
          }, 5000); // 5000 ms = 5 secondes
        });
    }
  }
}
