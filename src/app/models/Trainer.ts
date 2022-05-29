export class Trainer {
    public ID: number;
    public ProfilePic: string;
    public Username: string;
    public Email: string;
    public Password: string;
    // public FName: string;
    // public LName: string;
    public PhoneNo: number;
    public Department: string;

  
    constructor(ID: number, ProfilePic: string, Username: string, Email: string, 
        Password: string, PhoneNo: number, Department: string) {
      this.ID = ID;
      this.ProfilePic = ProfilePic;
      this.Username = Username;
      this.Email = Email;
      this.Password = Password;
      this.PhoneNo = PhoneNo;
      this.Department = Department;

    }
  }
  