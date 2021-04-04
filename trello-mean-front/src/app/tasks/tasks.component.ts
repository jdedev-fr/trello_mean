import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.userService.getCon()) {
      this.router.navigate(['/connection']);
    }
  }

}
