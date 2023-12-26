import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent} from '@ionic/angular/standalone';
import { TrianguloEscaleno } from "../modelo/figuratriangulo";

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonItem, FormsModule]
})
export class TrianguloComponent  implements OnInit {

ladoAStr: string = "";
ladoBStr: string = "";
ladoCStr: string = "";
resultado: string = "";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro() {
    const ladoA = parseInt(this.ladoAStr)
    const ladoB = parseInt(this.ladoBStr)
    const ladoC = parseInt(this.ladoCStr)
    const figuratriangulo = new TrianguloEscaleno("Triangulo Escaleno", ladoA, ladoB, ladoC)
    const perimetro = figuratriangulo.calcularPerimetro()
    this.resultado = `El resultado es ${perimetro}`
    }

}
