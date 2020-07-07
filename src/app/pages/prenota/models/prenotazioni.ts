export interface Prenotazioni{
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
    tipologia: number;
}