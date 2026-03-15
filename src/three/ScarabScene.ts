import * as THREE from 'three'
import { GLTFLoader } from 'three-stdlib'
import { DRACOLoader } from 'three-stdlib'
import { createParticles } from './ScarabGeometry'
import { createArabesquePlane } from './ArabesqueShader'
import { mouseX, mouseY, initMouseTracker } from './mouseTracker'

export class ScarabScene {
  private renderer: THREE.WebGLRenderer
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private scarab: THREE.Group
  private particles: THREE.Points
  private arabesque: THREE.Mesh
  private animationId = 0
  private clock = new THREE.Clock()
  private targetRotY = 0
  private targetRotX = 0
  private isMobile: boolean
  private mixer: THREE.AnimationMixer | null = null

  constructor( canvas: HTMLCanvasElement ) {
    this.isMobile = window.innerWidth < 768

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: !this.isMobile,
      alpha: true,
    })
    this.renderer.setSize( canvas.clientWidth, canvas.clientHeight )
    this.renderer.setPixelRatio( Math.min( window.devicePixelRatio, 2 ) )
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping
    this.renderer.toneMappingExposure = 1.4

    this.scene = new THREE.Scene()

    this.camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    )
    this.camera.position.set( 0, 1.5, 5 )
    this.camera.lookAt( 0, 0, 0 )

    // === Lights ===
    const ambientLight = new THREE.AmbientLight( 0x4A6A9A, 0.6 )
    this.scene.add( ambientLight )

    const keyLight = new THREE.DirectionalLight( 0xF0E8DD, 2.0 )
    keyLight.position.set( 3, 5, 4 )
    this.scene.add( keyLight )

    const fillLight = new THREE.DirectionalLight( 0x4A6A9A, 0.6 )
    fillLight.position.set( -4, 2, 3 )
    this.scene.add( fillLight )

    const accentLight = new THREE.PointLight( 0xE8613A, 2.0, 12 )
    accentLight.position.set( 0, -1, 4 )
    this.scene.add( accentLight )

    const rimLight = new THREE.PointLight( 0x1B2A4A, 3.0, 15 )
    rimLight.position.set( 0, 3, -4 )
    this.scene.add( rimLight )

    const sideLight = new THREE.PointLight( 0x2A3F6A, 1.2, 8 )
    sideLight.position.set( -3, 0, 0 )
    this.scene.add( sideLight )

    // Placeholder group until model loads
    this.scarab = new THREE.Group()
    this.scene.add( this.scarab )

    // Load GLB model
    this.loadModel()

    // Particles
    this.particles = createParticles()
    if ( !this.isMobile ) {
      this.scene.add( this.particles )
    }

    // Background shader
    this.arabesque = createArabesquePlane()
    this.scene.add( this.arabesque )

    initMouseTracker()
    window.addEventListener( 'resize', this.onResize )
  }

  private loadModel() {
    const loader = new GLTFLoader()

    // Draco decoder for compressed meshes
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath( 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/' )
    loader.setDRACOLoader( dracoLoader )

    loader.load(
      '/scarab.glb',
      ( gltf ) => {
        const model = gltf.scene

        // Auto-center and scale the model
        const box = new THREE.Box3().setFromObject( model )
        const size = box.getSize( new THREE.Vector3() )
        const center = box.getCenter( new THREE.Vector3() )

        // Scale to fit ~2.8 units tall
        const maxDim = Math.max( size.x, size.y, size.z )
        const scale = 2.8 / maxDim
        model.scale.setScalar( scale )

        // Center it
        model.position.x = -center.x * scale
        model.position.y = -center.y * scale
        model.position.z = -center.z * scale

        this.scarab.add( model )

        // Play animations if any
        if ( gltf.animations.length > 0 ) {
          this.mixer = new THREE.AnimationMixer( model )
          gltf.animations.forEach( ( clip ) => {
            this.mixer!.clipAction( clip ).play()
          })
        }

        dracoLoader.dispose()
      },
      undefined,
      ( error ) => {
        console.error( 'Failed to load scarab model:', error )
      }
    )
  }

  start() {
    this.animate()
  }

  private animate = () => {
    this.animationId = requestAnimationFrame( this.animate )

    const elapsed = this.clock.getElapsedTime()
    const delta = this.clock.getDelta()

    // Animation mixer
    if ( this.mixer ) {
      this.mixer.update( delta )
    }

    // Scarab floating — more lively
    this.scarab.position.y = Math.sin( elapsed * 0.6 ) * 0.15 + Math.sin( elapsed * 1.1 ) * 0.05
    this.scarab.position.x = Math.sin( elapsed * 0.4 ) * 0.08
    this.scarab.position.z = Math.sin( elapsed * 0.35 ) * 0.06

    // Mouse interaction — wider range, clamped so back never shows
    this.targetRotY = mouseX.value * 0.7
    this.targetRotX = -mouseY.value * 0.3

    // Clamp X rotation so we never see the back (keep between -0.45 and 0.15)
    const clampedRotX = Math.max( -0.45, Math.min( 0.15, -0.15 + this.targetRotX ) )

    this.scarab.rotation.y += ( this.targetRotY - this.scarab.rotation.y ) * 0.04
    this.scarab.rotation.x += ( clampedRotX - this.scarab.rotation.x ) * 0.04
    // Subtle Z tilt following mouse X for natural feel
    this.scarab.rotation.z += ( -mouseX.value * 0.08 - this.scarab.rotation.z ) * 0.03

    // Auto rotation for mobile
    if ( this.isMobile ) {
      this.scarab.rotation.y = Math.sin( elapsed * 0.3 ) * 0.5
      this.scarab.rotation.x = -0.15 + Math.sin( elapsed * 0.2 ) * 0.12
      this.scarab.rotation.z = Math.sin( elapsed * 0.25 ) * 0.05
    }

    // Particles orbit + mouse repulsion
    if ( this.particles.parent ) {
      this.particles.rotation.y += 0.0015
      this.particles.rotation.x += 0.0004

      // Mouse interaction — particles react to cursor
      const positions = this.particles.geometry.getAttribute( 'position' )
      const originals = this.particles.geometry.getAttribute( 'originalPosition' )
      if ( positions && originals ) {
        const mx = mouseX.value * 5
        const my = mouseY.value * 3
        for ( let i = 0; i < positions.count; i++ ) {
          const ox = originals.getX( i )
          const oy = originals.getY( i )
          const oz = originals.getZ( i )

          const dx = ox - mx
          const dy = oy - my
          const dist = Math.sqrt( dx * dx + dy * dy )

          if ( dist < 2.5 ) {
            const force = ( 2.5 - dist ) * 0.15
            positions.setX( i, ox + dx * force * 0.3 )
            positions.setY( i, oy + dy * force * 0.3 )
          } else {
            // Lerp back to original
            positions.setX( i, positions.getX( i ) + ( ox - positions.getX( i ) ) * 0.02 )
            positions.setY( i, positions.getY( i ) + ( oy - positions.getY( i ) ) * 0.02 )
          }
          positions.setZ( i, oz )
        }
        positions.needsUpdate = true
      }
    }

    // Arabesque shader time
    const arabMat = this.arabesque.material as THREE.ShaderMaterial
    if ( arabMat.uniforms?.uTime ) {
      arabMat.uniforms.uTime.value = elapsed
    }

    this.renderer.render( this.scene, this.camera )
  }

  private onResize = () => {
    const canvas = this.renderer.domElement
    const parent = canvas.parentElement
    if ( !parent ) return

    const width = parent.clientWidth
    const height = parent.clientHeight

    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
    this.renderer.setSize( width, height )
  }

  dispose() {
    cancelAnimationFrame( this.animationId )
    window.removeEventListener( 'resize', this.onResize )

    this.scene.traverse( ( obj ) => {
      if ( obj instanceof THREE.Mesh ) {
        obj.geometry.dispose()
        if ( Array.isArray( obj.material ) ) {
          obj.material.forEach( m => m.dispose() )
        } else {
          obj.material.dispose()
        }
      }
    })

    this.mixer = null
    this.renderer.dispose()
  }
}
