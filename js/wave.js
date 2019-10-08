/* 	Renders a 3 ocean scapre using trochiodal wave simulation
 *	Uses the three.js library to acheive teh 3d graphics*/

// Constants
const PLANE_WIDTH = 5;
const PLANE_HEIGHT = 5;
const PLANE_DENSITY = 2;
const PLANE_WIDTH_SEGMENTS = PLANE_WIDTH * PLANE_DENSITY;
const PLANE_HEIGHT_SEGMENTS = PLANE_HEIGHT * PLANE_DENSITY;

// Create the renderer object and apply it to the body of the page
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Create the scene
var scene = new THREE.Scene();

// Create the camera and the orbit controls so it is possible to rotate the camera
// Camera controls aren't workign need to figure out the file structures
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
//var cameraOrbitControls = new THREE.OrbitControls(camera, renderer.domElement);

/*var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
var planeGeometry = new THREE.PlaneGeometry(PLANE_WIDTH,
											PLANE_HEIGHT,
											PLANE_WIDTH_SEGMENTS,
											PLANE_HEIGHT_SEGMENTS);
var planeMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
planeMaterial.wireframe = true;
var plane = new THREE.Mesh( planeGeometry, planeMaterial );
scene.add( plane );

console.log("here2")
camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

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
