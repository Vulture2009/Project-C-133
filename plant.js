objectDetector= "";

img = "";
objects = [];
status = "";

function preload(){
  img = loadImage("Plant.jpg");
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
 
   document.getElementById("status").innerHTML = "Status : Detecting Objects";
   objectDetector = ml5.objectDetector('cocossd', modelLoaded);

}

function modelLoaded() {
  console.log("Model Loaded!")
  status = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
  if (error) {
    console.log(error);
  }
  else{
    console.log(results);
    objects = results;
  }
  
}


function draw() {
  image(img, 0, 0, 640, 420);
  document.getElementById("status").innerHTML = "Status : Object Detected";
      if(status != "")
      {
        
        for (var i = 0; i < objects.length; i++) {
        
    
          fill(255, 0, 0);
          percent = floor(objects[i].confidence * 100);
          text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
          noFill();
          stroke(255, 0, 0);
          rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
      }
}