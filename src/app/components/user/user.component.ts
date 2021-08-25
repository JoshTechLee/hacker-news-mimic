import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostDate } from 'src/app/common/story-helper';
import { User, initUser } from 'src/app/models/User';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user:User = initUser

  constructor(private userService:UserService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
    this.getUser()
  }

  getUser(): void {
    const routeParams = this.route.snapshot.paramMap
    const userId = String(routeParams.get('userId'))
    this.userService.getUser(userId).subscribe(user => {
      const currentTimeEpox = Date.now()
      user.datePosted = getPostDate(user.created, currentTimeEpox)
      this.user = user
    })
  }
}
