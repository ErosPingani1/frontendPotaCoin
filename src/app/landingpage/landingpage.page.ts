import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PARAMETERS } from '@angular/core/src/util/decorators';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.page.html',
  styleUrls: ['./landingpage.page.scss'],
})
export class LandingpagePage implements OnInit {

  constructor(public router : Router) {
  }

  tologin(vtipo: any) {
    this.router.navigate(['/login'],{ queryParams: {tipo: vtipo}});
  }


  ngOnInit() {
  }

}
