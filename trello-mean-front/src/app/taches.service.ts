import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  tabTache: Tache[]
  constructor() {
    this.tabTache = []
  }
  reinit(tab) {
    this.tabTache = []
    for (let ligne of tab) {
      this.tabTache.push({ title: ligne.title, content: ligne.content, state: ligne.state, modif: false })
    }
  }
  ajout() {
    this.tabTache.push({ title: "", content: "", state: 0, modif: true })
  }
  modif(num) {

  }
  supp(num) {
    this.tabTache.splice(num, 1)
  }
}

interface Tache {
  title: String;
  content: String;
  state: Number;
  modif: boolean;
}