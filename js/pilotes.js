const WIDTH = 400;
const HEIGHT = 300;
let ctx;
let balls = new Array();

class Ball{
	constructor(initialx,initialy,initrad, color, incrx, incry){
		this.x = initialx;
		this.y = initialy;
		this.radius = initrad;
		this.color = color;
		this.dx = incrx;
		this.dy = incry;
	}
/*
	set dx(incrx){
		this.dx = incrx;
	}

	get dx(){
		return this.dx;
	}

	set dy(incry){
		this.dy = incry;
	}
*/
	calcNextPos(){
		if(this.x +this.radius + this.dx>WIDTH) this.dx= -this.dx;
		if(this.y +this.radius + this.dy>HEIGHT) this.dy= -this.dy;
		if(this.x + this.dx<this.radius) this.dx= -this.dx;
		if(this.y + this.dy<this.radius) this.dy= -this.dy;

		this.x += this.dx;
		this.y += this.dy;
	}
}

function init(){
	const cv = document.getElementById('dibuix');
	ctx = cv.getContext("2d");

	balls.push(new Ball (20,20,20, "green",2,1));
	balls.push(new Ball (20,20,20, "blue",-1,2));
	/*ctx.beginPath();
	ctx.arc(20,20,20,0, Math.PI * 2,true);
	ctx.fillStyle = "black";
	ctx.fill();
	*/
	setInterval(update,10);
}
window.onload = init;

function drawBall(x,y,radius,color){
	ctx.beginPath();
	ctx.arc(x,y,radius,0,Math.PI * 2,true);
	ctx.fillStyle=color;
	ctx.fill();
}

function clear(){
	ctx.clearRect(0,0,WIDTH,HEIGHT);
}

function update(){
	clear();
	balls.forEach(ball =>{
		ball.calcNextPos();
		drawBall(ball.x,ball.y,ball.radius,ball.color);
	});
	
}