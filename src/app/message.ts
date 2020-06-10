export class Message {
    id : number;
    email: string;
    txt: string;

    constructor(id, e, t){
        this.id = id;
        this.email = e;
        this.txt = t;
        
    }
}
