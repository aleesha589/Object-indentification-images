function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    model = ml5.objectDetector('cocossd', modelloaded);
    document.getElementById("status").innerHTML = "status:detecting objects";
}
img = "";
status = ""

object=[];

function modelloaded() {
    console.log("model loaded successfully");
    status = true;
    model.detect(img, getResults)

}

function getResults(E,R){
if(E){
    console.error(E);
 
}
else{
    console.log(R);
    object=R;
}
}

function preload() {
    img = loadImage("Study.jpg");
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#e60202");
    if(status!=""){
        document.getElementById("status").innerHTML = "status:objects detected";
        array_length=object.length;
        for(i=0;i<array_length;i++){
            object_name=object[i].label;
            object_x=object[i].x;
            object_y=object[i].y;
            object_width=object[i].width;
            object_height=object[i].height;
            object_percentage=floor(object[i].confidence*100);
            text(object_name+" "+object_percentage+"%",object_x,object_y);
            noFill();
            stroke("#e60202");
            rect(object_x,object_y,object_width,object_height);
        }
    }
    
    // text("Dog", 170, 70);
    // stroke("#e60202");
    // noFill();
    // rect(150, 50, 300, 350);

    // fill("#3c00ff");
    // text("Cat", 350, 100);
    // stroke("#3c00ff");
    // noFill();
    // rect(300, 80, 300, 320);
}