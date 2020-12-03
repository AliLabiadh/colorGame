import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  loading = false;

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logout().subscribe(
      data => {setTimeout(() => this.router.navigate(['/']), 1000),
        this.loading = true;
      }
    );
  }
}
