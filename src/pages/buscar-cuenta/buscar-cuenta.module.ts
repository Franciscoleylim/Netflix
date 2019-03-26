import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscarCuentaPage } from './buscar-cuenta';

@NgModule({
  declarations: [
    BuscarCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscarCuentaPage),
  ],
})
export class BuscarCuentaPageModule {}
