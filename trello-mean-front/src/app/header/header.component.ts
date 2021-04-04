import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  constructor(public userService: UserService, private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    //  console.log(this.userService.getCon())
  }
  deco(e) {
    console.log(e)
    this.userService.deconnection();
    this.router.navigate(['/connection']);
    e.preventDefault();
  }
}
