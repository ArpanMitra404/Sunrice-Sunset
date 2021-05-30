const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hour;

var bg ;
function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
     // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);
    // write code to display time in correct format here
    fill("black");

    if(hour < 12 && hour > 0){
        ampm = "AM";
    }
    else {
        ampm = "PM";
    };

    textSize(35);
    text("DATE AND TIME : " + hour + ampm,50,50);
}



async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    
    // write code slice the datetime
    hour = datetime.slice(2,16);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=6 && hour>=5 ){
        bg = "sunrise1.png";
    }
    else if(hour>=6 && hour<=7 ){
        bg = "sunrise2.png";
    }
    else if(hour>=7 && hour<=9 ){
        bg = "sunrise3.png";
    }
    else if(hour>=9 && hour<=11){
        bg = "sunrise4.png";
    }
    else if(hour>=11 && hour<=13){
        bg = "sunrise5.png";
    }
    else if(hour>=13 && hour<=16 ){
        bg = "sunrise6.png";
    }
    else if(hour>=16 && hour<=17 ){
        bg = "sunset7.png";
    }
    else if(hour>=17 && hour<=18 ){
        bg = "sunset8.png";
    }
    else if(hour>=18 && hour<=19 ){
        bg = "sunset9.png";
    }
    else if(hour>=19 && hour<=23){
        bg = "sunset10.png";
    }
    else if(hour>=23 && hour<=04){
        bg = "sunset11.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg = loadImage(bg);
    console.log(backgroundImg)
}