import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonSelect, IonTitle, IonContent } from '@ionic/angular/standalone';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CirculoComponent } from '../circulo/circulo.component';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonSelect, IonContent, TrianguloComponent, CirculoComponent, IonicModule, CommonModule],
})
export class HomePage {
  selectedShape: string = ''; // Variable para almacenar la forma seleccionada

  constructor() {}

  // Función que se ejecuta cuando se selecciona una opción en ion-select
  onShapeSelected(event: CustomEvent) {
    this.selectedShape = event.detail.value;
  }
}


