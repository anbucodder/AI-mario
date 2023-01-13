function preload() {
	world_start = loadSound("world_start.wav");
	coin =  loadSound("coin.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	mariodie=  loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);

	canvas.parent("canvas");

	instializeInSetup(mario);

	video = createCapture(VIDEO); 
	video.size(400,800);
	video.position(525,1100)
	video.parent("game_console");

	poseNet= ml5.poseNet(video , modalloaded);
	poseNet.on("pose" , gotposes);
}
   function	modalloaded(){
	console.log("Modal loaded");
}

function gotposes(results){
	if(results.length > 0){
		console.log(results);

		noseX = results[0].pose.nose.x;
		nosey = results[0].pose.nose.y;
		
		console.log("Nose x = "+noseX+"Nose y = "+nosey);
	}
}

function draw() {
	game();
}






