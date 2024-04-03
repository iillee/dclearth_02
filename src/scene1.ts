import { ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD } from "./global"
import { Entity, GltfContainer, MeshRenderer, Transform, VisibilityComponent, engine } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { SubSceneComp } from './components'
import { tileCollection, createTile } from './tiles'
import * as utils from '@dcl-sdk/utils'
import { scene1active, scene2active } from './subSceneSetup'

export function createScene() {

  const scene1 = engine.addEntity()
  Transform.create(scene1, {
    position: Vector3.create(0, 0, 0),
    rotation: Quaternion.create(0, 0, 0, 1),
    scale: Vector3.create(1, 1, 1)
  })


  
const gridSizeX = 25; // Number of entities in the x-axis
const gridSizeY = 13; // Number of entities in the y-axis
const gridSpacing = 32; // Spacing between entities

for (let y = 0; y < gridSizeY; y++) {
  for (let x = 0; x < gridSizeX; x++) {
    const groupName = `group${(y * gridSizeX) + x + 1}`; // Naming convention: group + index
    const group = engine.addEntity(); // Add entity with name
    if (ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD) engine.addEntity();
    Transform.create(group, {
      position: { x: (32 + x * gridSpacing), y: (4), z: (32 + y * gridSpacing)}, 
      scale: { x: (1), y: (1), z: (1)}, 
      rotation: Quaternion.fromEulerDegrees(0, 180, 0),
      parent: scene1
    });

    createSubScene(group, (y * gridSizeX) + x + 1); // Pass index for sub-scenes
  }
}

  return scene1
}

export function createSubScene(parentPos: Entity, id: number) {
  const entity = engine.addEntity()

  Transform.create(entity, {
    parent: parentPos
  })
  SubSceneComp.create(entity, {
    showing: false,
    originalPos: Vector3.create(0, 0, 0)
  })

  const box = engine.addEntity()
  Transform.create(box, { parent: parentPos, scale: Vector3.create(2, 8, 2) })

  MeshRenderer.setBox(box)
  let createdPaintings: Entity[] = []

  VisibilityComponent.create(box, { visible: false })

  utils.triggers.addTrigger(
    box,
    utils.LAYER_2,
    utils.LAYER_1,
    [{ type: 'box', scale: Vector3.create(160, 50, 160) }],
    () => {
      if (scene1active || scene2active) {
        console.log(`ACTIVE`)
        console.log(`ENTERED `)
        createdPaintings = []
        for (const tile of tileCollection) {
          if (tile.group === id) {
            const painting = createTile(undefined, tile.positionIndex, tile.src)
            createdPaintings.push(painting)
          }
        }
      }
    },
    () => {
      console.log('LEFT')
      for (const painting of createdPaintings) {
        engine.removeEntity(painting)
      }

      createdPaintings = [] // Clear the array
    }
  )

  return entity
  
}
