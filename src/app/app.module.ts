import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonakeComponent } from './components/personake/personake.component';
import {HttpClientModule} from '@angular/common/http';
import { PersonasComponent } from './components/personas/personas.component';
import { CochesComponent } from './components/coches/coches.component';
import {FormsModule} from '@angular/forms';
import { EmpleadossalarioComponent } from './components/empleadossalario/empleadossalario.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonakeComponent,
    PersonasComponent,
    CochesComponent,
    EmpleadossalarioComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
