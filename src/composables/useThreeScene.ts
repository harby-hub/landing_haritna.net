import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { ScarabScene } from '../three/ScarabScene'

export function useThreeScene() {
  const canvasRef: Ref<HTMLCanvasElement | null> = ref( null )
  let scene: ScarabScene | null = null

  onMounted( () => {
    if ( !canvasRef.value ) return
    scene = new ScarabScene( canvasRef.value )
    scene.start()
  })

  onUnmounted( () => {
    scene?.dispose()
    scene = null
  })

  return { canvasRef }
}
