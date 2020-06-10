export class Utenti {
    id: string;
    nome: string;
    cognome: string;
    email: string;
    password: string;

    constructor(n, c, e, u, p){

        this.nome = n;
        this.cognome = c;
        this.email = e;
        this.id = u;
        this.password = p;
    }
}