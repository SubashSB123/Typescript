let uid=100;
class user{
    
    name:string;
    age:number;
    mobileno:number;
    userID:number;
    constructor(name:string,age:number,mobile:number){
        uid++;
        this.name=name;
        this.age=age;
        this.mobileno=mobile;
        this.userID=uid;


    }
    



}
let userlist:Array<user>=new Array<user>();


class Details{
    course:string;
    recquiredday:number;
    constructor(course:string,day:number){
        this.course=course;
        this.recquiredday=day;
    }

}
let list:Array<Details>=new Array<Details>();

function registration(){
    (document.getElementById("second") as HTMLDivElement).style.display="block";
    (document.getElementById("first") as HTMLDivElement).style.display="none";

}
function login(){
    (document.getElementById("third") as HTMLDivElement).style.display="block";
    (document.getElementById("first") as HTMLDivElement).style.display="none";


}
function cources(){
    (document.getElementById("fourth") as HTMLDivElement).style.display="block";
    (document.getElementById("third") as HTMLDivElement).style.display="none";
    (document.getElementById("sixth") as HTMLDivElement).style.display="none";

}
function avilableCources(){
    (document.getElementById("fifth") as HTMLDivElement).style.display="block";
    (document.getElementById("fourth") as HTMLDivElement).style.display="none";
    (document.getElementById("sixth") as HTMLDivElement).style.display="none";

}
function enrolledCources(){
    
    (document.getElementById("fifth") as HTMLDivElement).style.display="none";
    (document.getElementById("sixth") as HTMLDivElement).style.display="block";
    (document.getElementById("fourth") as HTMLDivElement).style.display="none";

}
function enroll(){
    (document.getElementById("fifth") as HTMLDivElement).style.display="none";
    (document.getElementById("fourth") as HTMLDivElement).style.display="block";
    (document.getElementById("sixth") as HTMLDivElement).style.display="none";
    let cn=(document.getElementById("rd") as HTMLInputElement).value;
    alert("your selected course was added to enrollment and you can take"+" " +cn+" "+"days to complete it!");
    
    

}
function sumit(){
    (document.getElementById("second") as HTMLDivElement).style.display="none";
    (document.getElementById("first") as HTMLDivElement).style.display="block";
   
    
    let nam=(document.getElementById("un") as HTMLInputElement).value;
    let ag=(document.getElementById("ag") as HTMLInputElement).value;
    let age=parseInt(ag);
    let mobile=(document.getElementById("mn") as HTMLInputElement).value;
    let mobil=parseInt(mobile);
    
    userlist.push(new user(nam,age,mobil));
    alert("Hi"+" "+nam+" "+"your registration is successfully completed!");
    
    
    
   
    
    


}