import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users: any[];
  public myDate;
  ano = new Date().getFullYear();
  dia = new Date().getDate();
  mes = new Date().getMonth();
  mes1= this.mes+1;
  Fecha:string= this.ano + "-"+ this.mes1+"-"+this.dia;
  pet:any;
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: this.Fecha
  }

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    if(this.mes1==13){
      this.mes1=1;
      this.Fecha= this.ano + "-"+ this.mes1+"-"+this.dia;
    }
    this.pet="Hoy";
    this.esHoy();
    this.esHoy();
  }

  esHoy(){
    this.service.getHoy(this.event.timeEnds).subscribe(
      data=> this.users=data,
      err=> console.log(err)
    );
  }

  esAyer(){
   var fecha=this.event.timeEnds.split("-");
  var dia:any= fecha[2];
  dia= dia-1;
  var mes= fecha[1];
  var año= fecha[0];
  var myDate1= año+"-"+mes+"-"+dia

  console.log(dia);
    this.service.getHoy(myDate1).subscribe(
      data=> this.users=data,
      err=> console.log(err)
    );
  }
  esMan(){
    var fecha=this.event.timeEnds.split("-");
   var dia:any= fecha[2];
   dia++;
   var mes= fecha[1];
   var año= fecha[0];
   var myDate1= año+"-"+mes+"-"+dia
   console.log(dia);
     this.service.getHoy(myDate1).subscribe(
       data=> this.users=data,
       err=> console.log(err)
     );
   }


   
  irDetalles(nombreR){
    this.navCtrl.push('DetallesPage',{nombreR});
    console.log('Envie: '+nombreR)
  }








}

