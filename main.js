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
    if(status!="")
    {
        objectDetector.detect(vidoe,gotResult);
        for(i=0;i<objects.length;i++)
        {
            document.getElementById("status").innerHTML= "status: object detected";
            document.getElementById("number_of_objects").innerHTML= "number of objects detected are.....  "+object.length;
            fill("#A020F0");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            nofill();
            stroke();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
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

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(resluts);
    }
}