video="";
status="";

function perload()
{
    video=createVideo('video.mp4');
    video.hide();
}

function setup()
{
    canvas=createCanvas(500,440);
    canvas.center();
}

function draw()
{
    image(video,0,0,500,440);
}

function start()
{
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}

function modelLoaded()
{
console.log("modelLoaded");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}