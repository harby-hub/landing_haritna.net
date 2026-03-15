import { ref } from 'vue'

export const mouseX = ref( 0 )
export const mouseY = ref( 0 )

let initialized = false

export function initMouseTracker() {
  if ( initialized ) return
  initialized = true

  window.addEventListener( 'mousemove', ( e ) => {
    mouseX.value = ( e.clientX / window.innerWidth ) * 2 - 1
    mouseY.value = -( e.clientY / window.innerHeight ) * 2 + 1
  })
}
