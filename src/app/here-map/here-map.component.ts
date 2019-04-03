import { Platform } from '@ionic/angular';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

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

  public ngOnInit() {
    this.platform = new H.service.Platform({
      "app_id": this.appId,
      "app_code": this.appCode
    });
    this.router = this.platform.getRoutingService();
  }

  // La mappa deve essere generata nel metodo di AfterViewInit() in quanto visualizzata solo dopo la creazione della view stessa
  public ngAfterViewInit() {
    setTimeout(() => {
      let defaultLayers = this.platform.createDefaultLayers();
      this.map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
          zoom: 15,
          center: { lat: this.lat, lng: this.lng },
        }
      );
      let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(this.map))
      let marker = new H.map.Marker({lat: this.lat, lng: this.lng});
      this.map.addObject(marker);
    }, 100);
  }

}
