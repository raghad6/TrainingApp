import { Time } from "@angular/common";

export class Forms {
    public ID: number;
    public FName: string;
    public LName:string;
    public PhoneNo:Number;
    public StudentID:Number;
    public Addres:string;
    public Email:string;
    public university:string;
    public Field:string;
    public ExpectedDOGrad:Date;
    public TotalAvg:number;
    public TypeOfTraining:string;
    public DaysAvailable:string;
    public HoursAvailable:Time;  
    public ReqTrainingHours:number;  
    public SupervisorPhoneNo:number;
    public UniversityDoc:File;

    
    constructor(ID:number,fname: string, lname: string,PhoneNo: number, StudentID:number,  Addres: string,Email: string,
        university:string , Field:string , ExpectedDOGrad:Date , TotalAvg:number , TypeOfTraining:string,
        DaysAvailable:string , HoursAvailable:Time , ReqTrainingHours:number , SupervisorPhoneNo:number ,
        UniversityDoc:File) {
    this.ID = ID;
    this.FName = fname;
    this.LName = lname;
    this.PhoneNo = PhoneNo;
    this.StudentID = StudentID;
    this.Addres = Addres;
    this.Email = Email;
    this.university = university;
    this.Field = Field;
    this.ExpectedDOGrad = ExpectedDOGrad;
    this.TotalAvg = TotalAvg;
    this.TypeOfTraining = TypeOfTraining;
    this.DaysAvailable = DaysAvailable;
    this.HoursAvailable = HoursAvailable;
    this.ReqTrainingHours = ReqTrainingHours;
    this.SupervisorPhoneNo = SupervisorPhoneNo;
    this.UniversityDoc =UniversityDoc;

    }
}