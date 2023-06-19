import React from "react";
import Particles from "react-particles-js";


function Particle() {
  return (
    <Particles
	params={{
		particles: {
		  number: {
			value: 50,
			density: {
			  enable: true,
			  value_area: 500,
			}, 
			stroke: 3
		  },
		},
	  }}
    />
  );
}

export default Particle;
