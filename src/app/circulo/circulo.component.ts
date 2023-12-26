import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonInput, IonItem, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { Circulo } from '../modelo/figuras';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonItem, IonButton, FormsModule]
})

export class CirculoComponent  implements OnInit {

radioStr: string = "";
resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const radio = parseInt(this.radioStr)
    const figura = new Circulo("circulo", radio)
    const perimetro = figura.calcularPerimetro()
    this.resultado = `El resultado es ${perimetro}`
    }

}
