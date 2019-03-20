import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifiche',
  templateUrl: './notifiche.page.html',
  styleUrls: ['./notifiche.page.scss'],
})
export class NotifichePage implements OnInit {

  news: any = [];

  constructor() { }

  creaDaJson() {

    //ForEach che salva il valore del json nella lista
    fetch('assets/json/NewsMockate.json')
    .then(r => r.json())
    .then(j => { 
      for (let i of j) {
        this.news.push(i);
      }
    });

    console.log(this.news);

  }

  ngOnInit() {
    this.creaDaJson();
  }

}
