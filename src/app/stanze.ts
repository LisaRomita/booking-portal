export class Stanze{
    id: string;
    tipo: string;
    prezzo: string;
    rate: string;
    src: string;

    constructor(id, tipo, prezzo, rate, src){
        this.id = id;
        this.tipo = tipo;
        this.prezzo = prezzo;
        this.rate = rate;
        this.src = src;
    }

}