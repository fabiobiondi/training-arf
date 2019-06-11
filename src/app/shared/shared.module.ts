import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeteoComponent } from './components/meteo.component';
import { StaticGmapComponent } from './components/static-gmap.component';
import { MeteoHttpComponent } from './components/meteo-http.component';

@NgModule({
  declarations: [MeteoComponent, MeteoHttpComponent, StaticGmapComponent],
  exports: [MeteoComponent, MeteoHttpComponent, StaticGmapComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
