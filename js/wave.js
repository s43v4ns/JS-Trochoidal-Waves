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

	plane.rotateX(1.5708);
	plane.rotateZ(0.785398);
	plane.position.z = PLANE_Z_OFFSET;

	scene.add( plane );

	console.log("here2")
	camera.position.z = CAMERA_Z_START;
	camera.position.y = CAMERA_Y_START;
	camera.rotateX(CAMERA_X_PAN_START);


	var animate = function () {
		requestAnimationFrame( animate );

		renderer.render( scene, camera );
	};

	animate();

}
