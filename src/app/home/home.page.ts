import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  ngOnInit() {
    this.tryConnection();
  }
  tryConnection(): any {
    //TODO implementare chiamata al backend
  }

}

