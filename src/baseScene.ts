import { GltfContainer, Transform, engine } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'

export function createBaseScene() {
  const scene = engine.addEntity()
  Transform.create(scene, {
    position: Vector3.create(0, 0, 0),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1)
  })

  return scene
}
