var uid = 100;
var user = /** @class */ (function () {
    function user(name, age, mobile) {
        uid++;
        this.name = name;
        this.age = age;
        this.mobileno = mobile;
        this.userID = uid;
    }
    return user;
}());
var userlist = new Array();
var Details = /** @class */ (function () {
    function Details(course, day) {
        this.course = course;
        this.recquiredday = day;
    }
    return Details;
}());
var list = new Array();
function registration() {
    document.getElementById("second").style.display = "block";
    document.getElementById("first").style.display = "none";
}
function login() {
    document.getElementById("third").style.display = "block";
    document.getElementById("first").style.display = "none";
}
function cources() {
    document.getElementById("fourth").style.display = "block";
    document.getElementById("third").style.display = "none";
    document.getElementById("sixth").style.display = "none";
}
function avilableCources() {
    document.getElementById("fifth").style.display = "block";
    document.getElementById("fourth").style.display = "none";
    document.getElementById("sixth").style.display = "none";
}
function enrolledCources() {
    document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";
    document.getElementById("fourth").style.display = "none";
}
function enroll() {
    document.getElementById("fifth").style.display = "none";
    document.getElementById("fourth").style.display = "block";
    document.getElementById("sixth").style.display = "none";
    var cn = document.getElementById("rd").value;
    alert("your selected course was added to enrollment and it takes" + " " + cn + " " + "days");
}
function sumit() {
    document.getElementById("second").style.display = "none";
    document.getElementById("first").style.display = "block";
    var nam = document.getElementById("un").value;
    var ag = document.getElementById("ag").value;
    var age = parseInt(ag);
    var mobile = document.getElementById("mn").value;
    var mobil = parseInt(mobile);
    userlist.push(new user(nam, age, mobil));
    alert("Hi" + " " + nam + " " + "your registration is successfully completed!");
}
