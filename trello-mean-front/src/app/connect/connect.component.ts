import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  logForm = this.formBuilder.group({
    login: '',
    pass: ''
  });
  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngConnect() {
    //  console.log(this.logForm.value)
    this.userService.connection(this.logForm.value.login, this.logForm.value.pass)
    this.router.navigate(['/taches']);
  }
}
