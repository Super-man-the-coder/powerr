
var canvas = new fabric.Canvas('myCanvas');
canvas.getContext("2d")
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)

	{
		fabric.image.fromUrl(get_image, function(Img){
			block_image_object = Img;
			block_image_object.scaleToWidth(block_image_width);
			block_image_object.scaleToHeight(block_image_height);
			block_image_object.set({
				top:player_y,
				left:player_x
			});
			canvas.add(block_image_object);
	});
	}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') 
	{
		block_x =100;
		get_image('rr1.png');
		console.log("red");
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		get_image('gr.png');
		console.log("green");
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		get_image('yr.png');
		console.log("yellow");
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		get_image('pr.png');
		console.log("pink");
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	get_image('br.png')
	console.log("blue");
	}
	
}

