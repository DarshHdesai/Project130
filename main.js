song1 = "";
song2 = "";
leftwristX = "";
leftwristY = "";
rightwristX = "";
rigthwristY = "";

function preload()
{
song1 = loadSound("music3.mp3");
song2 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(600 , 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw()
{
    image( 0, 0, 600 , 500);
	image(video, 0, 0, 600, 500);
	fill("#FF0000");
	stroke("#FF0000");
	circle(rightWristX,rightWristY,20);
	

	if(leftWristWristY >0  && leftWristY <= 100)
	{
		document.getElementById("speed").innerHTML = "Speed = 0.5x";
		song.rate(0.5);
		song1.stop();
	}
	

	
if(scorerightWrist > 0.2)
{
	circle(leftWristX, leftWristY,20);
	InnumberleftWristY = Number(leftWristY);
	remove_decimals = floor(InnumberleftWristY);
	volume = remove_decimals/500;
	document.getElementById("volume").innerHTML = "Volume = " + volume;
	song.setVolume(volume);
}	



if(scoreLeftWrist > 0.2)
{
	circle(leftWristX, leftWristY,20);
	InnumberleftWristY = Number(leftWristY);
	remove_decimals = floor(InnumberleftWristY);
	volume = remove_decimals/500;
	document.getElementById("volume").innerHTML = "Volume = " + volume;
	song.setVolume(volume);
}	
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  
function gotPoses(results)
{
  if(results.length > 0)
  {
	scoreRightWrist =  results[0].pose.keypoints[10].score;
	scoreLeftWrist =  results[0].pose.keypoints[9].score;
	console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
	
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	console.log("rightWristX = " + rightWristX +" rightWristY = "+ rightWristY);

	leftWristX = results[0].pose.leftWrist.x;
	leftWristY = results[0].pose.leftWrist.y;
	console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
		
  }
}



function play()
{
	song.play();
	song.setVolume(1);
	song.rate(1);
}
