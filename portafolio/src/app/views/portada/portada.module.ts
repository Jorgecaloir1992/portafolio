import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortadaRoutingModule } from './portada-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    PortadaRoutingModule,
  ]
})
export class PortadaModule { }
