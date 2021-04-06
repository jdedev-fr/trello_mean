import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TachesService {
  tabTache: Tache[]
  private tacheUrl: string
  private idUser: String

  constructor(private http: HttpClient) {
    this.tabTache = []
    this.tacheUrl = 'http://localhost:3000/api/user/0/tache'
  }
  setIdUser(id) {
    this.idUser = id
    this.tacheUrl = 'http://localhost:3000/api/user/' + this.idUser + '/tache'
  }
  reinit(tab) {
    this.tabTache = []
    for (let ligne of tab) {
      this.tabTache.push({ title: ligne.title, content: ligne.content, state: ligne.state, modif: false })
    }
  }
  ajout() {
    this.http.post<any>(this.tacheUrl, { titre: "", contenu: "", etat: 0 }).subscribe((data) => {
      this.tabTache.push({ title: "", content: "", state: 0, modif: true })
    }, error => alert(error))
  }
  modif(num) {
    this.http.put<any>(this.tacheUrl + "/" + num, { titre: this.tabTache[num].title, contenu: this.tabTache[num].content, etat: this.tabTache[num].state }).subscribe((data) => {
    }, error => alert(error))
  }
  supp(num) {
    this.http.delete<any>(this.tacheUrl + "/" + num).subscribe((data) => {
      this.tabTache.splice(num, 1)
    }, error => alert(error))
  }
}

interface Tache {
  title: String;
  content: String;
  state: Number;
  modif: boolean;
}