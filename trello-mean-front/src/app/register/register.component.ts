import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = this.formBuilder.group({
    login: '',
    pass: '',
    confirm: '',
    email: ''
  });

  constructor(private formBuilder: FormBuilder, private userService: UserService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngEnreg() {
    if (this.registerForm.value.pass === this.registerForm.value.confirm) {
      this.userService.register(this.registerForm.value.login, this.registerForm.value.pass, this.registerForm.value.email)
      this.router.navigate(['/taches']);
    }
    else {

    }
  }

}
