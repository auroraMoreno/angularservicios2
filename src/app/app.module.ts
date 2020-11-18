import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonakeComponent } from './components/personake/personake.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { CochesComponent } from './components/coches/coches.component';
import {FormsModule} from '@angular/forms';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';
import { EmpleadosoficioComponent } from './components/empleadosoficio/empleadosoficio.component';
import {routing, appRoutingProvider} from './app.routing';
import { DetallesempleadosComponent } from './components/detallesempleados/detallesempleados.component';
import { TablaempleadosComponent } from './components/tablaempleados/tablaempleados.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonakeComponent,
    PersonasComponent,
    CochesComponent,
    EmpleadossalarioComponent,
    EmpleadosoficioComponent,
    DetallesempleadosComponent,
    TablaempleadosComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule, routing
  ],
  providers: [appRoutingProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
