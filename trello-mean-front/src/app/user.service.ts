import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  conect: boolean
  constructor() {
    this.conect = false
  }

  getCon() {
    return this.conect
  }
  connection(user: string, pass: string) {
    this.conect = true
  }
  deconnection() {
    this.conect = false
  }
}
