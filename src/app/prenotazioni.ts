export class Prenotazioni{
    id: number;
    nome: string;
    cognome: string;
    email: string;
    arrivo: Date;
    partenza: Date;
    adulti: number;
    bambini: number;
    stanze: number;
    pagamento: string;
    tipologia: string;

    constructor(id, n, c, e, arr, part, a, b, s, p, t){
        this.id = id;
        this.nome = n;
        this.cognome = c;
        this.email = e;
        this.arrivo = arr;
        this.partenza = part;
        this.adulti = a;
        this.bambini = b;
        this.stanze = s;
        this.pagamento = p;
        this.tipologia = t;
    }
}