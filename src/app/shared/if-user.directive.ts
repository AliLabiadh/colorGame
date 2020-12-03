import {Directive, HostBinding, OnDestroy, OnInit} from '@angular/core';
import {User} from '../user/models/user';
import {UserService} from '../user/user.service';
import {Subscription} from 'rxjs';

@Directive({
  selector: '[appIfUser]'
})
export class IfUserDirective implements OnInit, OnDestroy{

  userDetectSub: Subscription = new Subscription();
  @HostBinding('class') dNone = '';
  user: User | null = null;
  constructor(private userService: UserService) {
  }

  protected update(user: User | null): void{
    this.userDetectSub = this.userService.user$.subscribe(userData => {
      if (!userData){
        this.dNone = 'd-none';
      }});
  }

  ngOnInit(): void {
    this.user = this.userService.user;
    this.update(this.user);
  }

  ngOnDestroy(): void {
    this.userDetectSub.unsubscribe();
  }
}
