export class Users {
    public ID: number;
    public name: string;
    public pwd:string;
    public email:string;
    
    constructor(ID:number,name: string,pwd:string,email:string) {
    this.ID = ID;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    }
    }