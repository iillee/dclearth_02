import {
  TextShape,
  Transform,
  Billboard,
  engine,
  GltfContainer,
  pointerEventsSystem,
  InputAction
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math'
import { createBaseScene } from './baseScene'
import { createScene } from './scene1'
import { SCENE_MGR } from './global'
import { hideScene, showScene } from './modules/SceneMgmt/sceneManager'



export let scene1active = true
export let scene2active = false
export function createFullScene() {
  const baseSceneRoot = createBaseScene()

  const baseSceneId = SCENE_MGR.generateSceneId()
  const galleryGroup1 = createScene()
  showScene(galleryGroup1)

}
