import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.css']
})
export class UserModComponent implements OnInit {

  modifUserForm = this.formBuilder.group({
    login: '',
    pass: '',
    confirm: '',
    email: ''
  });

  constructor(private formBuilder: FormBuilder, public userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.userService.getCon()) {
      this.router.navigate(['/404']);
    }
    else {
      this.modifUserForm.patchValue({
        login: this.userService.login,
        email: this.userService.email
      })
    }
  }
  ngEnreg() {
    if (this.modifUserForm.value.pass === this.modifUserForm.value.confirm) {
      this.userService.modif(this.modifUserForm.value.login, this.modifUserForm.value.pass, this.modifUserForm.value.email)

    }
    else {

    }
  }

}
