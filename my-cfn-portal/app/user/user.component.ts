import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

import { User } from './user';
@Component({
  selector: 'my-user',
  templateUrl: 'app/user/user.html',
  providers: [UserService]
})

export class UserComponent {

  user: User = {name: '', password: ''};
  users : User[] = [];
  constructor(private userService : UserService) {
    userService.list().subscribe(res => {
      this.users = res;
    });
  }

  create() {
    this.userService.create(this.user).subscribe(res => {
      this.users.push(this.user);
      this.user = {name: '', password: ''};
    });;
  }
}