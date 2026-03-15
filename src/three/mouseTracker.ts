import { ref } from 'vue'

export const mouseX = ref( 0 )
export const mouseY = ref( 0 )

let initialized = false

function update( clientX: number, clientY: number ) {
  mouseX.value = ( clientX / window.innerWidth ) * 2 - 1
  mouseY.value = -( clientY / window.innerHeight ) * 2 + 1
}

export function initMouseTracker() {
  if ( initialized ) return
  initialized = true

  window.addEventListener( 'mousemove', ( e ) => {
    update( e.clientX, e.clientY )
  })

  window.addEventListener( 'touchmove', ( e ) => {
    const touch = e.touches[0]
    if ( touch ) {
      update( touch.clientX, touch.clientY )
    }
  }, { passive: true })

  window.addEventListener( 'touchstart', ( e ) => {
    const touch = e.touches[0]
    if ( touch ) {
      update( touch.clientX, touch.clientY )
    }
  }, { passive: true })
}
