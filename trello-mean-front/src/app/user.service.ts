import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { TachesService } from './taches.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  conect: boolean
  private userUrl = 'http://localhost:3000/api/user'

  constructor(private http: HttpClient, private router: Router, private tachesService: TachesService) {
    this.conect = false
  }

  getCon() {
    return this.conect
  }
  connection(user: string, pass: string) {
    this.http.post<any>(this.userUrl + '/connect', { nom: user, mdp: pass }).subscribe((data) => {
      if (data.name === user) {
        this.conect = true
        this.tachesService.reinit(data.tasks)
        this.router.navigate(['/taches']);
      }
      else this.conect = false
    })
    //  this.conect = true
  }
  deconnection() {
    this.conect = false
  }
  register(user: string, pass: string, mail: string) {

    this.http.post<any>(this.userUrl, { nom: user, mdp: pass, email: mail }).subscribe((data) => {
      this.conect = true
      this.tachesService.reinit(data.tasks)
      this.router.navigate(['/taches']);
    })

  }
}
