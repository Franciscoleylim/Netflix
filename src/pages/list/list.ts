import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ServiceProvider } from '../../providers/service/service';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public myDate;
  esta:any="";
  public myDate1;
  testRadioOpen: boolean;
  testRadioResult;
  Meses: any ="Meses";
  Dispositivos="Disp";
  users:any;
  private todo : FormGroup;
  constructor(public navCtrl: NavController,public toastCtrl: ToastController , public navParams: NavParams, public service: ServiceProvider,public alerCtrl: AlertController,private formBuilder: FormBuilder) {
    this.todo = this.formBuilder.group({
      numero: ['', Validators.required],
      nombre: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
    });
  }


  doRadio() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Cantidad de meses');

    alert.addInput({
      type: 'radio',
      label: '1',
      value: '1',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: '2',
      value: '2'
    });
    alert.addInput({
      type: 'radio',
      label: '3',
      value: '3',

    });
    alert.addInput({
      type: 'radio',
      label: '4',
      value: '4'
    });
    alert.addInput({
      type: 'radio',
      label: '5',
      value: '5'
    });
    alert.addInput({
      type: 'radio',
      label: '6',
      value: '6'
    });
    alert.addInput({
      type: 'radio',
      label: '7',
      value: '7'
    });
    alert.addInput({
      type: 'radio',
      label: '8',
      value: '8'
    });alert.addInput({
      type: 'radio',
      label: '9',
      value: '9'
    });alert.addInput({
      type: 'radio',
      label: '10',
      value: '10'
    });alert.addInput({
      type: 'radio',
      label: '11',
      value: '11'
    });alert.addInput({
      type: 'radio',
      label: '12',
      value: '12'
    });
    

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.Meses=data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }

  doRadio1() {
    let alert = this.alerCtrl.create();
    alert.setTitle('Cantidad de dispositivos');

    alert.addInput({
      type: 'radio',
      label: '1',
      value: '1',
      checked: true
    });
    
    alert.addInput({
      type: 'radio',
      label: '4',
      value: '4'
    });
    
    

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Aceptar',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.Dispositivos=data;
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
    });
  }


  recuperandoNum(){
    this.service.buscarNum(this.todo.value.numero).subscribe(
      data=> this.esta=data,
      err=> console.log(err)
    );

    console.log(this.esta);
    console.log(this.esta[0].numero);
    
    if(this.esta[0].numero== this.todo.value.numero){
      const toast = this.toastCtrl.create({
        message: 'Ya esta registrado ese numero',
        duration: 3000
      });
      toast.present();
    }
  }


  logForm(){
    
      this.service.insert(this.todo.value.numero,this.todo.value.nombre,this.todo.value.correo,this.todo.value.contraseña,this.Meses,this.Dispositivos,this.myDate,this.myDate1).subscribe(
        data=> this.users=data,
        err=> console.log(err)
      );
    
  }

  
}
