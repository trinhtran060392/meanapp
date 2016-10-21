import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { User } from './user';
@Component({
  selector: 'my-user',
  templateUrl: 'app/user/user.html',
  styleUrls: ['app/user/user.css'],
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
    if (this.user.name && this.user.password){
      this.userService.create(this.user).subscribe(res => {
        this.users.push(this.user);
        this.user = {name: '', password: ''};
      });
    }
  }

  delete(user : any) {
    this.userService.delete(user._id).subscribe(res=> {
      if (res.status === 200) {
        let index = this.users.indexOf(user);
        this.users.splice(index, 1);
      }
    });
  }
}