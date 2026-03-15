import * as THREE from 'three'

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`

const fragmentShader = `
  uniform float uTime;
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  varying vec2 vUv;

  void main() {
    vec2 center = vUv - 0.5;
    float dist = length( center );
    float angle = atan( center.y, center.x );

    float pattern = sin( angle * 8.0 + uTime * 0.5 ) * 0.5 + 0.5;
    pattern *= smoothstep( 0.5, 0.15, dist );

    float glow = exp( -dist * 2.0 ) * 0.35;
    glow += pattern * 0.12;

    // Fade edges to zero so no visible border
    float edgeFade = smoothstep( 0.5, 0.35, dist );
    glow *= edgeFade;

    vec3 color = mix( uColor1, uColor2, pattern );
    gl_FragColor = vec4( color, glow );
  }
`

export function createArabesquePlane(): THREE.Mesh {
  const geometry = new THREE.PlaneGeometry( 30, 30 )
  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uTime: { value: 0 },
      uColor1: { value: new THREE.Color( 0x0D1A30 ) },
      uColor2: { value: new THREE.Color( 0x1B2A4A ) },
    },
    transparent: true,
    depthWrite: false,
    side: THREE.DoubleSide,
  })

  const mesh = new THREE.Mesh( geometry, material )
  mesh.position.z = -4
  mesh.name = 'arabesque'

  return mesh
}
