export default class TasksList{
    id : number;
    Name : string;
    Date : string;
    Notes : string;

    constructor(id: number, Name: string, Date: string, Notes: string) {
        this.id = id;
        this.Name = Name;
        this.Date = Date;
        this.Notes = Notes;
      }

}