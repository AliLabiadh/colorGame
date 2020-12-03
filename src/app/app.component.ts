import {Component, OnInit} from '@angular/core';
import {UserService} from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'colorGame';
  isLogged = false;
  userName = '';

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      if (user){
      this.isLogged = true;
      this.userName = user.nickname;
    }else{
        this.isLogged = false;
      }});
  }

}
