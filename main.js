let startButton = document.getElementById("startbutton")
let startMenu = document.getElementsByClassName("startmenu")[0]

let searchButton = document.getElementById("searchbutton")
let searchMenu = document.getElementsByClassName("searchmenu")[0]

let widgetButton = document.getElementById("widgetbutton")
let widgetMenu = document.getElementsByClassName("widgetmenu")[0]

let fileExplorer = document.getElementById("fileExplorer")
let fileMenu = document.getElementsByClassName("filemenu")[0]
let store = document.getElementsByClassName("microsoftstore")[0]

console.log("BOOTING 2late OS")

setInterval(displayClockTime, 500);
window.onload = enable;


if(navigator.platform == "Android") {}
var loader = document.getElementById("preloader");
var bg = document.getElementById("lb");
var datel = document.getElementById("datel");
var clockl = document.getElementById("clockl");
var pressSpace = document.getElementById("pressSpace");
var pcOnly;

function enable() {
    displayClockTime();
}

function fullscreen() {
    document.documentElement.requestFullscreen();
}

document.addEventListener('keyup', event => {
if (event.code === 'Space') {
      unlock();
    }
})
document.addEventListener("click",()=>{
    unlock();
})

function unlock() {
    if(bg.style.display != "none") {

    console.log(loader.style.display);
    console.log(pcOnly.style.display);
    pcOnly.innerHTML = "bruh";
  //  if(loader.style.display == "none" && pcOnly.style.display == "none") {
        fullscreen();
        bg.style.animation="lb 0.4s";
        clockl.style.animation="clockl 0.05s";
        datel.style.animation="datel 0.05s";

        this.setTimeout(() => { bg.style.display = "none"; }, 300);
        this.setTimeout(() => { clockl.style.display = "none"; }, 5);
        this.setTimeout(() => { datel.style.display = "none"; }, 5);
        pressSpace.style.display = "none";
    //}

    }
}

window.addEventListener("load", function() {
    pcOnly = document.getElementById("pcOnly");
    loader.style.animation="preloader 0.5s";
    this.setTimeout(() => { loader.style.display = "none"; }, 500);
})

function displayClockTime() {
    var date = new Date();
    var hrs = date.getHours();
    var mins = date.getMinutes();

    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var m2 = date.getMonth();
    var day = date.getDate();

    date.setMonth(m2 + 1);

    var d2 = date;
    var oldD = d2.getDate();

    d2.setDate(oldD- 1);

    datel.innerHTML = d2.toLocaleDateString("en-EN", {weekday: 'long'}) + ", " + date.toLocaleDateString("en-EN", {month: 'long'}) + " " + (date.getDate() + 1);
    if(mins < 10) {
        mins = "0" + mins;
    }
    clockl.innerHTML = hrs + ':' + mins;

    if(hrs < 10) {
        hrs = "0" + hrs;
    }

    if(month < 10) {
        month = "0" + month;
    }
    if(day < 10) {
        day = "0" + day;
    }
    document.getElementById('clock').innerHTML = hrs + ':' + mins; 
    document.getElementById('date').innerHTML = day + '.' + month + "." + year;
}
startButton.addEventListener("click",()=>{

    if(startMenu.style.bottom == "-650px"){
        widgetMenu.style.left = "-950px"
        searchMenu.style.bottom = "-650px"
        startMenu.style.bottom = "55px"
    }else{
        startMenu.style.bottom = "-650px"
    }
})

searchButton.addEventListener("click",()=>{

    if(searchMenu.style.bottom == "-650px"){
        widgetMenu.style.left = "-950px"
        startMenu.style.bottom = "-650px"
        searchMenu.style.bottom = "55px"
    }else{
        searchMenu.style.bottom = "-650px"
    }

})

widgetButton.addEventListener("click",()=>{

    if(widgetMenu.style.left == "-950px"){
        startMenu.style.bottom = "-650px"
        searchMenu.style.bottom = "-650px"
        widgetMenu.style.left = "0px"
    }else{
        widgetMenu.style.left = "-950px"
    }

})

fileExplorer.addEventListener("click",()=>{
    
    if(fileMenu.style.top == "-700px"){
        startMenu.style.bottom = "-650px"
        searchMenu.style.bottom = "-650px"
        widgetMenu.style.left = "-950px"
        store.style.top = "-800px"
        fileMenu.style.top = "100px"
    }else{
        fileMenu.style.top = "-700px"
    }
    
})