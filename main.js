screen_width = 0;
screen_height = 0;
x = 0;
y = 0;

draw_apple = "";

var apple = "";

var speak_data = "";

var to_number = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function preload()
{
 img = loadImage("apple.png");
}

function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

 to_number = Number(content);
 if(Number.isInteger(to_number))
 {
  document.getElementById("status").innerHTML = "Started Drawing Apple."; 
  draw_apple = "set";
 }
 else{  document.getElementById("status").innerHTML = "Failed.";  }

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width = window.innerWidth;
 screen_height = window.innerHeight;
 canvas = createCanvas(screen_width, screen_height-150);
 canvas.position
}

function draw() {
  
  if(draw_apple == "set")
  {
    for (i = 1; i < to_number; i ++ )
    {
      x = Math.floor(math.random() * 700);
      y = Math.floor(math.random() * 400);
      image(img, x, y)
     
    }
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
    
    speak()
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
