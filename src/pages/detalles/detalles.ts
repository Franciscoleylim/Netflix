import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { Clipboard } from '@ionic-native/clipboard';
import { AlertController } from 'ionic-angular';
import { stringify } from '@angular/core/src/util';


@IonicPage()
@Component({
  selector: 'page-detalles',
  templateUrl: 'detalles.html',
})
export class DetallesPage {
  nombre:any;
  items: any[];
  sera:boolean;
  private todo : FormGroup;
  api:string="";
  testRadioOpen: boolean;
  testRadioResult;
  steperro="";
  steperro1="";
  cont=0;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private clipboard: Clipboard, public toastCtrl: ToastController, public navParams: NavParams, public service: ServiceProvider,private formBuilder: FormBuilder) {
    this.nombre=this.navParams.get('nombreR');
    this.sera= this.getNombres();
    this.api="https://api.whatsapp.com/send?phone=52"+this.nombre;
    console.log(this.items)
    this.todo = this.formBuilder.group({
      numero: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      meses: ['', Validators.required],
      disp: ['', Validators.required],
      entre: ['', Validators.required],
      vence: ['', Validators.required],
      listo: ['', Validators.required],
    });
    

  }
  

  //Aqui recibo todos los datos usando el id
 getNombres(){
  this.service.getDatosDetalle(this.nombre).subscribe(
    data=> this.items=data,
    err=> console.log(err)
  );
  this.service.getDatosDetalle(this.nombre).subscribe(
    data=> this.items=data,
    err=> console.log(err)
  );
  return true;
}


ActForm(){
  this.service.upDatosDetalle(this.todo.value.numero,this.todo.value.nombre,this.todo.value.correo,this.todo.value.contraseña,this.todo.value.meses,this.todo.value.disp,this.todo.value.entre,this.todo.value.vence).subscribe(
    data=> this.items=data,
    err=> console.log(err)
  );
  this.presentToast();
}

presentToast() {
  const toast = this.toastCtrl.create({
    message: 'Actualizado con exito',
    duration: 3000
  });
  toast.present();
}
presentToast2() {
  const toast = this.toastCtrl.create({
    message: 'Numero copiado',
    duration: 3000
  });
  toast.present();
}
presentToast3() {
  const toast = this.toastCtrl.create({
    message: 'Eliminado con exito',
    duration: 3000
  });
  toast.present();
}
presentToast4() {
  const toast = this.toastCtrl.create({
    message: 'Correo copiado',
    duration: 3000
  });
  toast.present();
}

copiartexto(numero:any,correo:any){
  if(this.cont==0){
    this.clipboard.copy(numero);
    this.presentToast2();
    this.cont=1;
  }else{
    this.clipboard.copy(correo);
    this.presentToast4();
    this.cont=0;
  }
  
}

DelForm() {
  const confirm = this.alertCtrl.create({
    title: 'Eliminar Cliente',
    message: '¿Estas seguro que quieres eliminar a este cliente?',
    buttons: [
      {
        text: 'Cancelar',
        handler: () => {
        }
      },
      {
        text: 'Aceptar',
        handler: () => {
          this.DelForm1();
        }
      }
    ]
  });
  confirm.present();
}

DelForm1() {
  this.service.delDatosDetalle(this.todo.value.numero).subscribe(
    data=> this.items=data,
    err=> console.log(err)
  );
  this.presentToast3();
}

unMes() {
 console.log(this.todo.value.entre);
 var dato;
 var mes:number;
 dato=this.todo.value.entre.split("-");
 mes=dato[1];
 mes++;
 if(mes==13){
  var ano:number;
  mes=1;
  ano=dato[0];
  ano++;
  dato[0]=ano;
}
 dato[1]=mes;
 console.log(dato);
 this.todo.value.entre=dato[0]+"-"+dato[1]+"-"+dato[2];
 console.log(this.todo.value.entre);
 this.steperro=this.todo.value.entre

 //Segundo round
 dato=this.todo.value.vence.split("-");
 mes=dato[1];
 mes++;
 if(mes==13){
   var ano:number;
   mes=1;
   ano=dato[0];
   ano++;
   dato[0]=ano;
 }
 dato[1]=mes;
 console.log(dato);
 this.todo.value.vence=dato[0]+"-"+dato[1]+"-"+dato[2];
 console.log(this.todo.value.vence);
 this.steperro1=this.todo.value.vence
}


doRadio() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Cuando vence');

  alert.addInput({
    type: 'radio',
    label: 'Hoy',
    value: '1',
    
  });
  
  alert.addInput({
    type: 'radio',
    label: 'Ayer',
    value: '2'
  });
  alert.addInput({
    type: 'radio',
    label: 'Pronto',
    value: '3'
  });
  alert.addInput({
    type: 'radio',
    label: 'Nada',
    value: '4',
    checked: true
  });
  
  

  alert.addButton('Cancelar');
  alert.addButton({
    text: 'Aceptar',
    handler: data => {
      console.log('Radio data:', data);
      this.testRadioOpen = false;
      this.testRadioResult = data;
      if(data==1){
        this.api="https://api.whatsapp.com/send?phone=52"+this.nombre+'&text=Hola, su cuenta vence el día de hoy, le gustaría renovar el servicio, la idea es que se queden los mismos datos y no pierda contenido, conteste "Si Netflix" e inmediatamente le llegará la información para renovar el servicio, conteste "Netflix" para conocer los paquetes, o conteste "No Netflix" Si no desea renovar el servicio';
      }
      if(data==2){
        this.api="https://api.whatsapp.com/send?phone=52"+this.nombre+'&text=Hola, su cuenta venció el día de ayer, le gustaría renovar el servicio, la idea es que se queden los mismos datos y no pierda contenido, conteste "Si Netflix" e inmediatamente le llegará la información para renovar el servicio, conteste "Netflix" para conocer los paquetes, o conteste "No Netflix" Si no desea renovar el servicio';
      }
      if(data==3){
        this.api="https://api.whatsapp.com/send?phone=52"+this.nombre+'&text=Hola, su cuenta está por vencer, le gustaría renovar el servicio, la idea es que se queden los mismos datos y no pierda contenido, conteste "Si Netflix" e inmediatamente le llegará la información para renovar el servicio, conteste "Netflix" para conocer los paquetes, o conteste "No Netflix" Si no desea renovar el servicio'
      }
      if(data==4){
        this.api="https://api.whatsapp.com/send?phone=52"+this.nombre;
      }
    }
  });

  alert.present().then(() => {
    this.testRadioOpen = true;
  });
}


}
