import { Suspense } from 'react'
import { ARCanvas } from '@react-three/xr'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function App() {
  const gltf = useLoader(GLTFLoader, '/room-1.gltf')
  return (
    <ARCanvas>
      <Suspense fallback={null}>
        <primitive object={gltf.scene} />
      </Suspense>
    </ARCanvas>
  )
}

export default App
