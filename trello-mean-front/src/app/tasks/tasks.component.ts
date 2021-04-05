import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { TachesService } from '../taches.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(public userService: UserService, private route: ActivatedRoute,
    private router: Router, public tachesService: TachesService) { }

  ngOnInit(): void {
    if (!this.userService.getCon()) {
      this.router.navigate(['/404']);
    }
  }
  ajoutTache(e) {
    this.tachesService.ajout()
    console.log(this.tachesService.tabTache)
    e.preventDefault();
  }
  mvTache(num, etat) {
    this.tachesService.tabTache[num].state = etat
    this.tachesService.modif(num)
  }
  modif(num) {
    this.tachesService.tabTache[num].modif = true
  }
  valid(num) {
    this.tachesService.tabTache[num].modif = false
    this.tachesService.modif(num)
  }
  del(num) {
    this.tachesService.supp(num)
  }
}
