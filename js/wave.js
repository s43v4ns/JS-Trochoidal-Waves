/* 	Renders a 3 ocean scapre using trochiodal wave simulation
 *	Uses the three.js library to acheive teh 3d graphics*/

// Create the renderer object and apply it to the body of the page
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create the scene
var scene = new THREE.Scene();

// Create the camera and the orbit controls so it is possible to rotate the cameram
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
var cameraOrbitControls = new THREE.OrbitControls(camera, renderer.domElement);

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();


function currentCameraPosition(){
	// Returns the current camera position
	console.log(camera.position)

}

function updateCameraOrbitPosition(x,y,z){
	// Updates the orbital position of the camera
}
