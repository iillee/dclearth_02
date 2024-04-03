import { Material, engine } from '@dcl/sdk/ecs'
import { createSceneManager } from './modules/SceneMgmt/sceneManager'
import { Color4 } from '@dcl/sdk/math'


export const SCENE_MGR = createSceneManager()

export const ROOT_SCENE_ADD_TO_ENGINE_ON_SCENE_LOAD = false

export const INVISIBLE_MATERIA = engine.addEntity()
let transparentRed = Color4.create(1, 0, 0, 0.5)

Material.setPbrMaterial(INVISIBLE_MATERIA, {
  albedoColor: transparentRed
})





 
