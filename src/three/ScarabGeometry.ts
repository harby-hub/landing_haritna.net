import * as THREE from 'three'

// Brand colors from logo
const NAVY_LIGHT = 0x2A3F6A
const ORANGE = 0xE8613A

export function createParticles( count = 1000 ): THREE.Points {
  const positions = new Float32Array( count * 3 )
  const colors = new Float32Array( count * 3 )

  const navyColor = new THREE.Color( NAVY_LIGHT )
  const accentColor = new THREE.Color( ORANGE )
  const lightColor = new THREE.Color( 0xBBCCEE )
  const whiteColor = new THREE.Color( 0xDDEEFF )

  for ( let i = 0; i < count; i++ ) {
    const t = i / count
    const angle = t * Math.PI * 14 + Math.random() * 1.5
    const radius = 1.2 + t * 4.5 + Math.random() * 1.2
    const height = ( Math.random() - 0.5 ) * 5

    positions[i * 3] = Math.cos( angle ) * radius
    positions[i * 3 + 1] = height
    positions[i * 3 + 2] = Math.sin( angle ) * radius

    const r = Math.random()
    const color = r > 0.8 ? accentColor : r > 0.55 ? whiteColor : r > 0.3 ? lightColor : navyColor
    colors[i * 3] = color.r
    colors[i * 3 + 1] = color.g
    colors[i * 3 + 2] = color.b
  }

  const geometry = new THREE.BufferGeometry()
  geometry.setAttribute( 'position', new THREE.BufferAttribute( positions, 3 ) )
  geometry.setAttribute( 'color', new THREE.BufferAttribute( colors, 3 ) )
  // Store original positions for mouse interaction
  geometry.setAttribute( 'originalPosition', new THREE.BufferAttribute( positions.slice(), 3 ) )

  const material = new THREE.PointsMaterial({
    size: 0.055,
    vertexColors: true,
    transparent: true,
    opacity: 0.9,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
  })

  return new THREE.Points( geometry, material )
}
