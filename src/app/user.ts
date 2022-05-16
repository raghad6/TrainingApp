export class User {
    public ID: number;
    public Name: string;
    public Password:string;
    public Email:string;
    
    constructor(ID:number,name: string,pwd:string,email:string) {
    this.ID = ID;
    this.Name = name;
    this.Password = pwd;
    this.Email = email;
    }
    }