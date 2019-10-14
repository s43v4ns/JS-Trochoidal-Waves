/*  Stuart Evans
    This file contains a js object which represents a wave using the set of functions described in
    https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch01.html
*/
class WaveParcel{

    constructor(wave_amplitude, phase_constant, wave_direction_vector, wave_length, wave_position_vector){
        this.wave_amplitude = wave_amplitude,               // Float
        this.phase_constant = phase_constant,               // Float
        this.wave_direction_vector = wave_direction_vector, // 2D Vector
        this.wave_length = wave_length,                     // Float`
        this.wave_position_vector = wave_position_vector,   // 2D Vector
        this.time = 0,                                      // int
        this.wave_freqency = 2/this.wave_length             // Float
        this.surface_height = 0,                            // Float

        wave_state: calcWaveState(),

    }

    calcWaveState(){
        return amplitude * (Math.sin(
                            ((this.wave_direction.dot(this.wave_position_vector))*
                            this.wave_freqency) +
                            (this.time * this.phase_constant));
    }

    setSurfaceHeight(surface_height){
        this.surface_height = surface_height;
    }

    calcWaveSteepness(wave_steepness, num_waves){
        return wave_steepness/(this.wave_freqency*this.wave_amplitude*num_waves);
    }

    calcNewXPosition(){

    }

}
