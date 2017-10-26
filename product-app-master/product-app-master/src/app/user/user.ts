/*export class User{
    constructor(
    public accountid:String,
    public password:String,
    public firstname:String,
    public lastname:string,
    public gender: 'male'|'female'){}
  }*/

  export class User{
    constructor(
                public userName:string,
                public email:any,
                public password:any,
                public role:string,
                public gender:string
                ){};
  }
