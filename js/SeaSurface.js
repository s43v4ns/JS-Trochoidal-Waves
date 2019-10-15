/*  Stuart Evans
    This file contains a js object which represents a seasurface as a collection of
    WaveObjects using the set of functions described in
    https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch01.html
*/

class SeaSurface extends THREE.Mesh{
    // Represents a seasuraface and is based on the mesh object

    // Object attributes
    #steepness_coefficient;         // Range 0-1 decides how steep the waves aren
    #wavelength;                    // length of a complete waves
    #amplitude;                     // "Height" of the wave
    #speed;                         // speed of the waveSteepnessMesh
    #direction;                     // direction of the waves given as 2D vector
    #phase_constant;                // Subsitute for speed (provides better cleaner equations)

    constructor(geometry, material, wavelength, amplitude, speed, direction){
        /*  Takes the inputs:
            . geometry - THREE.Geometry -  to pass to the mesh constructor
            . material - THREE.Material - to pass to the mesh constructor
            . wavelength - float
            . amplitude - float
            . speed - float
            . direction - THREE.Vector2
            . steepness_coefficient - float (0-1)
        */
        // Instantiate the mesh superclass
        super(geometry, material);

        // Setup the initial variables
        this.wavelength = wavelength;
        this.amplitude = amplitude;
        this.speed = speed;
        this.direction = direction;
    }

    set steepness_coefficient(){}
    set direction(){}


}
