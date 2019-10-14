/* 	Renders a 3 ocean scapre using trochiodal wave simulation
 *	Uses the three.js library to acheive teh 3d graphics*/

// Constants
const PLANE_WIDTH = 25;
// Keeps the plane a square
const PLANE_HEIGHT = PLANE_WIDTH;
const PLANE_DENSITY = 4;
const PLANE_WIDTH_SEGMENTS = PLANE_WIDTH * PLANE_DENSITY;
const PLANE_HEIGHT_SEGMENTS = PLANE_HEIGHT * PLANE_DENSITY;

// Offset the plane on the z axis so that it fits in the camera view no matter the size of the planes
const PLANE_Z_OFFSET = Math.pow(PLANE_WIDTH,1);

// Default starting position of the cameraOrbitControls
const CAMERA_Z_START = 5;
const CAMERA_Y_START = 3;
const CAMERA_X_PAN_START = -0.5;

// Parameters for controling the wave shapes/direction

/*	Direction vector is a 2D vector in effect but has to be 3D for the maths
	Only the x and z should be set as setting the y will mess up calculations further down the line.
*/
var waveDirection = new THREE.Vector3(1,1); // initiallly set so waves will go diagonally across the Mesh

// This parameter controls the steepness of the wave should be between 0 and 1
var waveSteepnessMesh = 0.5;

// Prameter for wave_length
var wave_length = 1;

// Wave frequency is equivalent to 2/wave_length
var wave_freqency = 2/wave_length;

/* 	for wave speed express it as a phase cosntant where
	phase_constant=speed*(2/wave_length)
*/
// Parameter for wave speed
var wave_speed = 1;

var phase_constant = wave_speed * (wave_freqency);

// Array to store the state of each wave as a function
// Uses THREE.Vector3 to represent the value and is updated by a specific function
var individual_wave_state = [];


function startRender(){
	// Create all objects and prepare the window for the initial render
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
	//var plane = new SeaSurface( planeGeometry, planeMaterial );

	plane.rotateX(1.5708);
	plane.rotateZ(0.785398);
	//plane.position.z = PLANE_Z_OFFSET;

	scene.add( plane );

	console.log(plane)
	camera.position.z = CAMERA_Z_START;
	camera.position.y = CAMERA_Y_START;
	camera.rotateX(CAMERA_X_PAN_START);

	console.log("here 3")

	var animate = function () {
		requestAnimationFrame( animate );
		renderer.render( scene, camera );
	};

	animate();

}

function callIndividualWaveState(x,y,time){}
function calcNewPointPosition(x,y,z){
	/*	Calclates the new position of a vertex in the pane mesh
		Equations/funcations are from https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch01.html
		Nvidia's book GPUGems
		Waves are based on gernster wave functions (trochiodal waves).

		Returns a THREE.Vector3 with the new coordiantes
	*/

}
