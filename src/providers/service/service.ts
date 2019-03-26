import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProvider {

  api:string = 'http://minetflix.x10host.com/phps/';
  
  
  constructor(public http1: HttpClient, public http: Http) {
    console.log('Entre a los servicios perro, que pesado estoy');
  }

//   getDatos(){
//  return this.http.get(this.api+'listado.php').map(res=>res.json())
//   }

getHoy(myDate:any){
  console.log("Entre aqui:" +myDate)
  return this.http.get(this.api+'listado-dia.php?dia=%27'+myDate+"%27").map(res=>res.json())
   }

getBuscarCliente(){
  return this.http.get(this.api+'listado.php').map(res=>res.json())
  }

  insert(numero:any,nombre:any,correo:any,contra:any,mes:any,disp:any,entre:any,vence:any){
    return this.http.get(this.api+'insert.php?numero='+numero+'&nombre='+nombre+'&correo='+correo+'&contra='+contra+'&mes='+mes+'&disp='+disp+'&entre='+entre+'&vence='+vence).map(res=>res.json())
    }

    buscarNum(numero:any){
      return this.http.get(this.api+'listado-numero.php?numero='+numero).map(res=>res.json())
    }

getDatosDetalle(numero:any){
  return this.http.get(this.api+'detalles.php?numero='+numero).map(res=>res.json())
}

upDatosDetalle(numero:any, nombre:any, correo:any, contra:any, mes:any, disp:any, entre:any, vence:any){
  return this.http.get(this.api+'update.php?numero='+numero+'&nombre='+nombre+'&correo='+correo+'&contra='+contra+'&mes='+mes+'&disp='+disp+'&entre='+entre+'&vence='+vence).map(res=>res.json())
}

delDatosDetalle(numero:any){
  return this.http.get(this.api+'delete.php?numero='+numero).map(res=>res.json())
}

}
