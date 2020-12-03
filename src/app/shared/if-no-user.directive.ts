import {Directive, HostBinding, OnInit} from '@angular/core';
import {User} from '../user/models/user';
import {UserService} from '../user/user.service';

@Directive({
  selector: '[appIfNoUser]'
})
export class IfNoUserDirective implements OnInit{

  @HostBinding('class') dNone = '';
  user: User | null = null;
  constructor(private userService: UserService) {
  }

  protected update(user: User | null): void{
    this.userService.user$.subscribe(userData => {
      if (!userData){
        this.dNone = 'd-none';
      }});
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.update(this.user);
  }

}
