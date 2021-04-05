import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TachesService {
  tabTache: Tache[]
  constructor() {
    this.tabTache = []
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