/* 	Renders a 3 ocean scapre using trochiodal wave simulation
 *	Uses the three.js library to acheive teh 3d graphics*/

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

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

scene.add(createCoordinateMesh(5,5));

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

function createCoordinateMesh(width, length, density=1){
	// Creates a mesh of connected coordinates
	// Mesh consist of geometry and material
	// Create the geometry
	var geometry = new THREE.Geometry();

	// Starting height
	const Y_DEFAULT = 0;

	// Starting x will be 0-(width/2)
	var x = 0-(width/2);
	var z = 0-(length/2);

	// Loop through the number of points in the width first then the length
	for(var i = 0; i < (width*density); i++){
		for (var j = 0; j < (length*density); j++){
			geometry.vertices.push(new THREE.Vector3(x,Y_DEFAULT,z));
			// Increment the y axis each time
			y += density;
		}
		// Increment the x axis each time
		x += density;
	}

	// Compute the faces of the mesh

	var generatedMesh = new THREE.Mesh(geometry);

	return generatedMesh;
}

function calculateTriangles(inArray){
	/*  Generates faces for the mesh given the vectors from the geometry using
		Bowyer-Watson Algortihm for calculating Deluanay Triangulation */
	
}
