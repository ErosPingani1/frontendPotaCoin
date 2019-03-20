import { Component, OnInit } from '@angular/core';
import { ModalController} from '@ionic/angular';

@Component({
  selector: 'app-inserisciscontrino',
  templateUrl: './inserisciscontrino.page.html',
  styleUrls: ['./inserisciscontrino.page.scss'],
})
export class InserisciscontrinoPage implements OnInit {

  constructor(private modalController : ModalController ) { }

  inviaScontrino(){
    
  }

  dismissModal(){
    this.modalController.dismiss();
    return false;
  }

  ngOnInit() {
  }
}
