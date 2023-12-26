export abstract class FiguraGeometrica {
    nombre: string = ""

    constructor(nombre: string) {
        this.nombre = nombre        
    }
    abstract calcularPerimetro(): number
}

export class Circulo extends FiguraGeometrica {
    radio: number

    constructor(nombre:string, radio:number) {
        super(nombre)
        this.radio = radio
    }
    override calcularPerimetro(): number {
        return +(2 * Math.PI * this.radio).toFixed(2);
    }
}

export class TrianguloEquilatero extends FiguraGeometrica {
    ladoA: number;

    constructor(nombre:string, ladoA:number) {
        super(nombre);
        this.ladoA = ladoA
    }

    override calcularPerimetro(): number {
        return this.ladoA * 3
    }
}
