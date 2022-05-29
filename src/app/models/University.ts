export default class University{
    id: number;
    Username: string;
    Password: string;
    SupName: string;
    UniName: string;
    PhoneNo: number;
    TraineeID: number;

    constructor(id: number, Username: string, Password: string, SupName: string,
        UniName: string, PhoneNo: number, TraineeID: number) {
        this.id = id;
        this.Username = Username;
        this.Password = Password;
        this.SupName = SupName;
        this.UniName = UniName;
        this.PhoneNo = PhoneNo;
        this.TraineeID = TraineeID;
      }
}