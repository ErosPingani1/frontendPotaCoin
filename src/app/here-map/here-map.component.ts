import { Platform } from '@ionic/angular';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

//H non è una variabile di Typescript, ma in questo modo stiamo dichiarando a Typescript di ignorare eventuali errori e usare H come globale
declare var H: any;

@Component({
  selector: 'here-map',
  templateUrl: './here-map.component.html',
  styleUrls: ['./here-map.component.scss'],
})
export class HereMapComponent implements OnInit {

  //Collegamento dell'elemento con ID map in modo che questo sia collegato ad un mapElement
  @ViewChild("map")
  public mapElement: ElementRef

  //Input che permette di riceve l'appId proprio per la API di HERE maps come proprietà del tag
  @Input()
  public appId: any;

  //Input che permette di riceve l'appCode proprio per la API di HERE maps come proprietà del tag
  @Input()
  public appCode: any;

  //Input che permettono di definire le variabili nelle quali inserire lat e lng per la creazione della mappa
  @Input()
  public lat: any;
  @Input()
  public lng: any;

  private platform: any;
  private map: any;
  private router: any;

  constructor() {}

  /*ngOnInit() {}

  ngAfterViewInit() {
    let platform = new H.service.Platform({
      "add_id": this.appId,
      "app_code": this.appCode
    });
    let defaultLayers = platform.createDefaultLayers();
    let map = new H.Map(
      this.mapElement.nativeElement,
      defaultLayers.normal.map,
      {
        zoom: 10,
        center: { lat: this.lat, lng: this.lng }
      }
    );
    let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
  }*/

  public ngOnInit() {
    this.platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode
    });
    this.router = this.platform.getRoutingService();
  }

  public ngAfterViewInit() {
    setTimeout(() => {
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
          zoom: 10,
          center: { lat: this.lat, lng: this.lng },
        }
      );
      let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))
    }, 100);
  }

  public isoline() { }

}
