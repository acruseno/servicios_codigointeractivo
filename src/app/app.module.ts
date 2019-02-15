import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductosService } from './servicio/productos.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
