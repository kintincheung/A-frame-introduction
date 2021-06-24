
var rotationSpeed = 0.001;
var myOtherBox = document.getElementById('myOtherBox');
var myBox = document.getElementById('myBox');


function spin(){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	myOtherBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin, 10);

function spin2(){
	myBox.object3D.rotation.x += rotationSpeed;
	myBox.object3D.rotation.y += rotationSpeed;
	myBox.object3D.rotation.z += rotationSpeed/2;
	//console.log(myOtherBox.object3D.rotation);
}
setInterval(spin2, 10);


myOtherBox.addEventListener('mouseenter', function(){
	rotationSpeed = 0.05;
	console.log('entered');
});

myOtherBox.addEventListener('mouseleave', function(){
	rotationSpeed = 0.001;
	console.log('left');
});

 var growspeed = 1.3;

 function grow(){
 	myOtherBox.object3D.scale.x *= growspeed;
 	myOtherBox.object3D.scale.y *= growspeed;
 	myOtherBox.object3D.scale.z *= growspeed;
 	console.log(myOtherBox.object3D.scale);
 }

 myOtherBox.addEventListener('click', function(){ // uses a fuse
 	grow();
 	console.log('grew');
 });
