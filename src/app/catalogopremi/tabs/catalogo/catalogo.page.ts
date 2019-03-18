import { Component, OnInit } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.page.html',
  styleUrls: ['./catalogo.page.scss'],
})
export class CatalogoPage implements OnInit {

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getAllBuoni();
  }
  getAllBuoni() {
    this.http.get('http://localhost:9090/potacoin/potacoinbackend/buoni/all', {
      headers:
        new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'X-Requested-With': 'HttpRequest',
              'MyClientCert': '',        // This is empty
              'MyToken': ''              // This is empty
          }
    )}).subscribe((response) => {
            console.log(response);
          });
  }

}
