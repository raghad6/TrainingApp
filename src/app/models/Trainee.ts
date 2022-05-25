export class Trainee {
    ID: number;
    UserName:string;
    ProfilePic:string;
    Email:string;
    Major:string
    Password: string;
    DOB: string;
    TrainingHours: number;
  
    constructor(ID: number,UserName:string, ProfilePic: string, Email: string, 
        Major:string ,Password: string, DOB: string, TrainingHours: number) {
      this.ID = ID;
      this.UserName=UserName;
      this.ProfilePic = ProfilePic;
      this.Email = Email;
      this.Major=Major;
      this.Password = Password;
      this.DOB = DOB;
      this.TrainingHours = TrainingHours;

    }
  }
  