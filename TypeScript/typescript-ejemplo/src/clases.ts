export class Persona {
    constructor(private _nombre: string, private _edad: number) {}

    get nombre() {
        return this._nombre;
    }

    get edad() {
        return this._edad;
    }
}

const p = new Persona("Pedro", 43);
console.log(p.nombre);