/*  Stuart Evans
    This file contains a js object which represents a wave using the set of functiosn described in
    https://developer.nvidia.com/gpugems/GPUGems/gpugems_ch01.html
*/
function WaveObject(amplitude, phase_constant, direction_vector, wave_length, wave_position_vector){
        this.amplitude = amplitude,                         // Float
        this.phase_constant = phase_constant,               // Float
        this.direction = direction,                         // 2D Vector
        this.wave_length = wave_length,                     // Float`
        this.wave_position_vector = wave_position_vector,   // 2D Vector
        this.time = 0,                                      // int
        this.wave_freqency = 2/this.wave_length             // Float

        wave_state: calcWaveState(),

        calcWaveState: function(){
            return amplitude * (Math.sin(
                                ((this.direction.dot(this.wave_position_vector))*
                                this.wave_freqency) +
                                (this.time * this.phase_constant));
        }
}
