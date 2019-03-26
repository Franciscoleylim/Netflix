import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-buscar-cliente',
  templateUrl: 'buscar-cliente.html',
})
export class BuscarClientePage {
  items:any[];
  items1:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.getDatos();
    this.recuperar();
  }
  
  getDatos(){
    this.service.getBuscarCliente().subscribe(
      data=> this.items=data,
      err=> console.log(err)
    );
    this.service.getBuscarCliente().subscribe(
      data=> this.items1=data,
      err=> console.log(err)
    );
  }

  recuperar(){
  this.items1= this.items;
  }


  getItems(ev) {
    this.recuperar();
    // Reset items back to all of the items
    
    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items1 = this.items1.filter((items1) => {
        return (items1.numero.indexOf(val.toLowerCase()) > -1);
      })
    }else{
    }
  }

 
  irDetalles(nombreR){
    this.navCtrl.push('DetallesPage',{nombreR});
    console.log('Envie: '+nombreR)
  }

}
