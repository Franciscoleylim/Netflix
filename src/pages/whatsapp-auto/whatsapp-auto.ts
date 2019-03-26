import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the WhatsappAutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-whatsapp-auto',
  templateUrl: 'whatsapp-auto.html',
})
export class WhatsappAutoPage {
  users:any[];
  ano = new Date().getFullYear();
  dia = new Date().getDate();
  mes = new Date().getMonth();
  mes1= this.mes+1;
  Fecha:string= this.ano + "-"+ this.mes1+"-"+this.dia;
  public event = {
    timeEnds: this.Fecha
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.esHoy();
    
  }

  esHoy(){
    this.service.getHoy(this.event.timeEnds).subscribe(
      data=> 
      this.aver(data)
      ,

      err=> console.log(err)
    );
  }

  irDetalles(nombreR){
    this.navCtrl.push('DetallesPage',{nombreR});
  }

  aver(dato:any){
    this.users=dato;
   this.users.reverse();
  }


  siguiente(){
    this.users.reverse();
    this.users.pop();

  }
}
