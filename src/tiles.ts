import {
  Entity,
  Transform,
  TransformType,
  engine,
  GltfContainer,
  ColliderLayer
} from '@dcl/sdk/ecs'
import { Vector3, Quaternion, Color4 } from '@dcl/sdk/math'
import { scene1active } from './subSceneSetup'
import { scalex, scaley, scalez, x, y, z } from './transforms'



export type tiledata = {
  group: number
  positionIndex: number // Index of the position data in positionData array
  src: string
}

// Define common position data
const commonPositionData = {
  position: { x: (x), y: (z), z: (y)}, 
  scale: { x: (scalex), y: (scaley), z: (scalez)}, 
  rotation: Quaternion.fromEulerDegrees(0, 180, 0)
};

// Define an array to hold position data for each tile
const positionData: TransformType[] = [
  commonPositionData,
  // Add more if needed
];

export const tileCollection: tiledata[] = [
  {
    group: 1,
    positionIndex: 0, // Reference the common position data at index 0
    src: 'models/tiles/A01.glb',
  },
  {
    group: 2,
    positionIndex: 0, 
    src: 'models/tiles/A02.glb',
  },
  {
    group: 3,
    positionIndex: 0, 
    src: 'models/tiles/A03.glb',
  },
  {
    group: 4,
    positionIndex: 0, 
    src: 'models/tiles/A04.glb',
  },
  {
    group: 5,
    positionIndex: 0,
    src: 'models/tiles/A05.glb',
  },
  {
    group: 6,
    positionIndex: 0, 
    src: 'models/tiles/A06.glb',
  },
  {
    group: 7,
    positionIndex: 0, 
    src: 'models/tiles/A07.glb',
  },
  {
    group: 8,
    positionIndex: 0, 
    src: 'models/tiles/A08.glb',
  },
  {
    group: 9,
    positionIndex: 0,
    src: 'models/tiles/A09.glb',
  },
  {
    group: 10,
    positionIndex: 0,
    src: 'models/tiles/A10.glb',
  },
  {
    group: 11,
    positionIndex: 0,
    src: 'models/tiles/A11.glb',
  },
  {
    group: 12,
    positionIndex: 0,
    src: 'models/tiles/A12.glb',
  },
  {
    group: 13,
    positionIndex: 0,
    src: 'models/tiles/A13.glb',
  },
  {
    group: 14,
    positionIndex: 0,
    src: 'models/tiles/A14.glb',
  },
  {
    group: 15,
    positionIndex: 0,
    src: 'models/tiles/A15.glb',
  },
  {
    group: 16,
    positionIndex: 0,
    src: 'models/tiles/A16.glb',
  },
  {
    group: 17,
    positionIndex: 0,
    src: 'models/tiles/A17.glb',
  },
  {
    group: 18,
    positionIndex: 0,
    src: 'models/tiles/A18.glb',
  },
  {
    group: 19,
    positionIndex: 0,
    src: 'models/tiles/A19.glb',
  },
  {
    group: 20,
    positionIndex: 0,
    src: 'models/tiles/A20.glb',
  },
  {
    group: 21,
    positionIndex: 0,
    src: 'models/tiles/A21.glb',
  },
  {
    group: 22,
    positionIndex: 0,
    src: 'models/tiles/A22.glb',
  },
  {
    group: 23,
    positionIndex: 0,
    src: 'models/tiles/A23.glb',
  },
  {
    group: 24,
    positionIndex: 0,
    src: 'models/tiles/A24.glb',
  },
  {
    group: 25,
    positionIndex: 0,
    src: 'models/tiles/A25.glb',
  },




  {
    group: 26,
    positionIndex: 0, 
    src: 'models/tiles/B01.glb',
  },
  {
    group: 27,
    positionIndex: 0, 
    src: 'models/tiles/B02.glb',
  },
  {
    group: 28,
    positionIndex: 0, 
    src: 'models/tiles/B03.glb',
  },
  {
    group: 29,
    positionIndex: 0, 
    src: 'models/tiles/B04.glb',
  },
  {
    group: 30,
    positionIndex: 0,
    src: 'models/tiles/B05.glb',
  },
  {
    group: 31,
    positionIndex: 0, 
    src: 'models/tiles/B06.glb',
  },
  {
    group: 32,
    positionIndex: 0, 
    src: 'models/tiles/B07.glb',
  },
  {
    group: 33,
    positionIndex: 0, 
    src: 'models/tiles/B08.glb',
  },
  {
    group: 34,
    positionIndex: 0,
    src: 'models/tiles/B09.glb',
  },
  {
    group: 35,
    positionIndex: 0,
    src: 'models/tiles/B10.glb',
  },
  {
    group: 36,
    positionIndex: 0,
    src: 'models/tiles/B11.glb',
  },
  {
    group: 37,
    positionIndex: 0,
    src: 'models/tiles/B12.glb',
  },
  {
    group: 38,
    positionIndex: 0,
    src: 'models/tiles/B13.glb',
  },
  {
    group: 39,
    positionIndex: 0,
    src: 'models/tiles/B14.glb',
  },
  {
    group: 40,
    positionIndex: 0,
    src: 'models/tiles/B15.glb',
  },
  {
    group: 41,
    positionIndex: 0,
    src: 'models/tiles/B16.glb',
  },
  {
    group: 42,
    positionIndex: 0,
    src: 'models/tiles/B17.glb',
  },
  {
    group: 43,
    positionIndex: 0,
    src: 'models/tiles/B18.glb',
  },
  {
    group: 44,
    positionIndex: 0,
    src: 'models/tiles/B19.glb',
  },
  {
    group: 45,
    positionIndex: 0,
    src: 'models/tiles/B20.glb',
  },
  {
    group: 46,
    positionIndex: 0,
    src: 'models/tiles/B21.glb',
  },
  {
    group: 47,
    positionIndex: 0,
    src: 'models/tiles/B22.glb',
  },
  {
    group: 48,
    positionIndex: 0,
    src: 'models/tiles/B23.glb',
  },
  {
    group: 49,
    positionIndex: 0,
    src: 'models/tiles/B24.glb',
  },
  {
    group: 50,
    positionIndex: 0,
    src: 'models/tiles/B25.glb',
  },





  {
    group: 51,
    positionIndex: 0,
    src: 'models/tiles/C01.glb',
  },
  {
    group: 52,
    positionIndex: 0, 
    src: 'models/tiles/C02.glb',
  },
  {
    group: 53,
    positionIndex: 0, 
    src: 'models/tiles/C03.glb',
  },
  {
    group: 54,
    positionIndex: 0, 
    src: 'models/tiles/C04.glb',
  },
  {
    group: 55,
    positionIndex: 0,
    src: 'models/tiles/C05.glb',
  },
  {
    group: 56,
    positionIndex: 0, 
    src: 'models/tiles/C06.glb',
  },
  {
    group: 57,
    positionIndex: 0, 
    src: 'models/tiles/C07.glb',
  },
  {
    group: 58,
    positionIndex: 0, 
    src: 'models/tiles/C08.glb',
  },
  {
    group: 59,
    positionIndex: 0,
    src: 'models/tiles/C09.glb',
  },
  {
    group: 60,
    positionIndex: 0,
    src: 'models/tiles/C10.glb',
  },
  {
    group: 61,
    positionIndex: 0,
    src: 'models/tiles/C11.glb',
  },
  {
    group: 62,
    positionIndex: 0,
    src: 'models/tiles/C12.glb',
  },
  {
    group: 63,
    positionIndex: 0,
    src: 'models/tiles/C13.glb',
  },
  {
    group: 64,
    positionIndex: 0,
    src: 'models/tiles/C14.glb',
  },
  {
    group: 65,
    positionIndex: 0,
    src: 'models/tiles/C15.glb',
  },
  {
    group: 66,
    positionIndex: 0,
    src: 'models/tiles/C16.glb',
  },
  {
    group: 67,
    positionIndex: 0,
    src: 'models/tiles/C17.glb',
  },
  {
    group: 68,
    positionIndex: 0,
    src: 'models/tiles/C18.glb',
  },
  {
    group: 69,
    positionIndex: 0,
    src: 'models/tiles/C19.glb',
  },
  {
    group: 70,
    positionIndex: 0,
    src: 'models/tiles/C20.glb',
  },
  {
    group: 71,
    positionIndex: 0,
    src: 'models/tiles/C21.glb',
  },
  {
    group: 72,
    positionIndex: 0,
    src: 'models/tiles/C22.glb',
  },
  {
    group: 73,
    positionIndex: 0,
    src: 'models/tiles/C23.glb',
  },
  {
    group: 74,
    positionIndex: 0,
    src: 'models/tiles/C24.glb',
  },
  {
    group: 75,
    positionIndex: 0,
    src: 'models/tiles/C25.glb',
  },
  




  {
    group: 76,
    positionIndex: 0, 
    src: 'models/tiles/D01.glb',
  },
  {
    group: 77,
    positionIndex: 0, 
    src: 'models/tiles/D02.glb',
  },
  {
    group: 78,
    positionIndex: 0, 
    src: 'models/tiles/D03.glb',
  },
  {
    group: 79,
    positionIndex: 0, 
    src: 'models/tiles/D04.glb',
  },
  {
    group: 80,
    positionIndex: 0,
    src: 'models/tiles/D05.glb',
  },
  {
    group: 81,
    positionIndex: 0, 
    src: 'models/tiles/D06.glb',
  },
  {
    group: 82,
    positionIndex: 0, 
    src: 'models/tiles/D07.glb',
  },
  {
    group: 83,
    positionIndex: 0, 
    src: 'models/tiles/D08.glb',
  },
  {
    group: 84,
    positionIndex: 0,
    src: 'models/tiles/D09.glb',
  },
  {
    group: 85,
    positionIndex: 0,
    src: 'models/tiles/D10.glb',
  },
  {
    group: 86,
    positionIndex: 0,
    src: 'models/tiles/D11.glb',
  },
  {
    group: 87,
    positionIndex: 0,
    src: 'models/tiles/D12.glb',
  },
  {
    group: 88,
    positionIndex: 0,
    src: 'models/tiles/D13.glb',
  },
  {
    group: 89,
    positionIndex: 0,
    src: 'models/tiles/D14.glb',
  },
  {
    group: 90,
    positionIndex: 0,
    src: 'models/tiles/D15.glb',
  },
  {
    group: 91,
    positionIndex: 0,
    src: 'models/tiles/D16.glb',
  },
  {
    group: 92,
    positionIndex: 0,
    src: 'models/tiles/D17.glb',
  },
  {
    group: 93,
    positionIndex: 0,
    src: 'models/tiles/D18.glb',
  },
  {
    group: 94,
    positionIndex: 0,
    src: 'models/tiles/D19.glb',
  },
  {
    group: 95,
    positionIndex: 0,
    src: 'models/tiles/D20.glb',
  },
  {
    group: 96,
    positionIndex: 0,
    src: 'models/tiles/D21.glb',
  },
  {
    group: 97,
    positionIndex: 0,
    src: 'models/tiles/D22.glb',
  },
  {
    group: 98,
    positionIndex: 0,
    src: 'models/tiles/D23.glb',
  },
  {
    group: 99,
    positionIndex: 0,
    src: 'models/tiles/D24.glb',
  },
  {
    group: 100,
    positionIndex: 0,
    src: 'models/tiles/D25.glb',
  },




  {
    group: 101,
    positionIndex: 0,
    src: 'models/tiles/E01.glb',
  },
  {
    group: 102,
    positionIndex: 0, 
    src: 'models/tiles/E02.glb',
  },
  {
    group: 103,
    positionIndex: 0, 
    src: 'models/tiles/E03.glb',
  },
  {
    group: 104,
    positionIndex: 0, 
    src: 'models/tiles/E04.glb',
  },
  {
    group: 105,
    positionIndex: 0,
    src: 'models/tiles/E05.glb',
  },
  {
    group: 106,
    positionIndex: 0, 
    src: 'models/tiles/E06.glb',
  },
  {
    group: 107,
    positionIndex: 0, 
    src: 'models/tiles/E07.glb',
  },
  {
    group: 108,
    positionIndex: 0, 
    src: 'models/tiles/E08.glb',
  },
  {
    group: 109,
    positionIndex: 0,
    src: 'models/tiles/E09.glb',
  },
  {
    group: 110,
    positionIndex: 0,
    src: 'models/tiles/E10.glb',
  },
  {
    group: 111,
    positionIndex: 0,
    src: 'models/tiles/E11.glb',
  },
  {
    group: 112,
    positionIndex: 0,
    src: 'models/tiles/E12.glb',
  },
  {
    group: 113,
    positionIndex: 0,
    src: 'models/tiles/E13.glb',
  },
  {
    group: 114,
    positionIndex: 0,
    src: 'models/tiles/E14.glb',
  },
  {
    group: 115,
    positionIndex: 0,
    src: 'models/tiles/E15.glb',
  },
  {
    group: 116,
    positionIndex: 0,
    src: 'models/tiles/E16.glb',
  },
  {
    group: 117,
    positionIndex: 0,
    src: 'models/tiles/E17.glb',
  },
  {
    group: 118,
    positionIndex: 0,
    src: 'models/tiles/E18.glb',
  },
  {
    group: 119,
    positionIndex: 0,
    src: 'models/tiles/E19.glb',
  },
  {
    group: 120,
    positionIndex: 0,
    src: 'models/tiles/E20.glb',
  },
  {
    group: 121,
    positionIndex: 0,
    src: 'models/tiles/E21.glb',
  },
  {
    group: 122,
    positionIndex: 0,
    src: 'models/tiles/E22.glb',
  },
  {
    group: 123,
    positionIndex: 0,
    src: 'models/tiles/E23.glb',
  },
  {
    group: 124,
    positionIndex: 0,
    src: 'models/tiles/E24.glb',
  },
  {
    group: 125,
    positionIndex: 0,
    src: 'models/tiles/E25.glb',
  },





  {
    group: 126,
    positionIndex: 0,
    src: 'models/tiles/F01.glb',
  },
  {
    group: 127,
    positionIndex: 0, 
    src: 'models/tiles/F02.glb',
  },
  {
    group: 128,
    positionIndex: 0, 
    src: 'models/tiles/F03.glb',
  },
  {
    group: 129,
    positionIndex: 0, 
    src: 'models/tiles/F04.glb',
  },
  {
    group: 130,
    positionIndex: 0,
    src: 'models/tiles/F05.glb',
  },
  {
    group: 131,
    positionIndex: 0, 
    src: 'models/tiles/F06.glb',
  },
  {
    group: 132,
    positionIndex: 0, 
    src: 'models/tiles/F07.glb',
  },
  {
    group: 133,
    positionIndex: 0, 
    src: 'models/tiles/F08.glb',
  },
  {
    group: 134,
    positionIndex: 0,
    src: 'models/tiles/F09.glb',
  },
  {
    group: 135,
    positionIndex: 0,
    src: 'models/tiles/F10.glb',
  },
  {
    group: 136,
    positionIndex: 0,
    src: 'models/tiles/F11.glb',
  },
  {
    group: 137,
    positionIndex: 0,
    src: 'models/tiles/F12.glb',
  },
  {
    group: 138,
    positionIndex: 0,
    src: 'models/tiles/F13.glb',
  },
  {
    group: 139,
    positionIndex: 0,
    src: 'models/tiles/F14.glb',
  },
  {
    group: 140,
    positionIndex: 0,
    src: 'models/tiles/F15.glb',
  },
  {
    group: 141,
    positionIndex: 0,
    src: 'models/tiles/F16.glb',
  },
  {
    group: 142,
    positionIndex: 0,
    src: 'models/tiles/F17.glb',
  },
  {
    group: 143,
    positionIndex: 0,
    src: 'models/tiles/F18.glb',
  },
  {
    group: 144,
    positionIndex: 0,
    src: 'models/tiles/F19.glb',
  },
  {
    group: 145,
    positionIndex: 0,
    src: 'models/tiles/F20.glb',
  },
  {
    group: 146,
    positionIndex: 0,
    src: 'models/tiles/F21.glb',
  },
  {
    group: 147,
    positionIndex: 0,
    src: 'models/tiles/F22.glb',
  },
  {
    group: 148,
    positionIndex: 0,
    src: 'models/tiles/F23.glb',
  },
  {
    group: 149,
    positionIndex: 0,
    src: 'models/tiles/F24.glb',
  },
  {
    group: 150,
    positionIndex: 0,
    src: 'models/tiles/F25.glb',
  },

  



  {
    group: 151,
    positionIndex: 0,
    src: 'models/tiles/G01.glb',
  },
  {
    group: 152,
    positionIndex: 0, 
    src: 'models/tiles/G02.glb',
  },
  {
    group: 153,
    positionIndex: 0, 
    src: 'models/tiles/G03.glb',
  },
  {
    group: 154,
    positionIndex: 0, 
    src: 'models/tiles/G04.glb',
  },
  {
    group: 155,
    positionIndex: 0,
    src: 'models/tiles/G05.glb',
  },
  {
    group: 156,
    positionIndex: 0, 
    src: 'models/tiles/G06.glb',
  },
  {
    group: 157,
    positionIndex: 0, 
    src: 'models/tiles/G07.glb',
  },
  {
    group: 158,
    positionIndex: 0, 
    src: 'models/tiles/G08.glb',
  },
  {
    group: 159,
    positionIndex: 0,
    src: 'models/tiles/G09.glb',
  },
  {
    group: 160,
    positionIndex: 0,
    src: 'models/tiles/G10.glb',
  },
  {
    group: 161,
    positionIndex: 0,
    src: 'models/tiles/G11.glb',
  },
  {
    group: 162,
    positionIndex: 0,
    src: 'models/tiles/G12.glb',
  },
  {
    group: 163,
    positionIndex: 0,
    src: 'models/tiles/G13.glb',
  },
  {
    group: 164,
    positionIndex: 0,
    src: 'models/tiles/G14.glb',
  },
  {
    group: 165,
    positionIndex: 0,
    src: 'models/tiles/G15.glb',
  },
  {
    group: 166,
    positionIndex: 0,
    src: 'models/tiles/G16.glb',
  },
  {
    group: 167,
    positionIndex: 0,
    src: 'models/tiles/G17.glb',
  },
  {
    group: 168,
    positionIndex: 0,
    src: 'models/tiles/G18.glb',
  },
  {
    group: 169,
    positionIndex: 0,
    src: 'models/tiles/G19.glb',
  },
  {
    group:170,
    positionIndex: 0,
    src: 'models/tiles/G20.glb',
  },
  {
    group:171,
    positionIndex: 0,
    src: 'models/tiles/G21.glb',
  },
  {
    group:172,
    positionIndex: 0,
    src: 'models/tiles/G22.glb',
  },
  {
    group:173,
    positionIndex: 0,
    src: 'models/tiles/G23.glb',
  },
  {
    group:174,
    positionIndex: 0,
    src: 'models/tiles/G24.glb',
  },
  {
    group:175,
    positionIndex: 0,
    src: 'models/tiles/G25.glb',
  },





   {
    group: 176,
    positionIndex: 0,
    src: 'models/tiles/G01.glb',
  },
  {
    group: 177,
    positionIndex: 0, 
    src: 'models/tiles/G02.glb',
  },
  {
    group: 178,
    positionIndex: 0, 
    src: 'models/tiles/G03.glb',
  },
  {
    group: 179,
    positionIndex: 0, 
    src: 'models/tiles/G04.glb',
  },
  {
    group: 180,
    positionIndex: 0,
    src: 'models/tiles/G05.glb',
  },
  {
    group: 181,
    positionIndex: 0, 
    src: 'models/tiles/G06.glb',
  },
  {
    group: 182,
    positionIndex: 0, 
    src: 'models/tiles/G07.glb',
  },
  {
    group: 183,
    positionIndex: 0, 
    src: 'models/tiles/G08.glb',
  },
  {
    group: 184,
    positionIndex: 0,
    src: 'models/tiles/G09.glb',
  },
  {
    group: 185,
    positionIndex: 0,
    src: 'models/tiles/G10.glb',
  },
  {
    group: 186,
    positionIndex: 0,
    src: 'models/tiles/G11.glb',
  },
  {
    group: 187,
    positionIndex: 0,
    src: 'models/tiles/G12.glb',
  },
  {
    group: 188,
    positionIndex: 0,
    src: 'models/tiles/G13.glb',
  },
  {
    group: 189,
    positionIndex: 0,
    src: 'models/tiles/G14.glb',
  },
  {
    group: 190,
    positionIndex: 0,
    src: 'models/tiles/G15.glb',
  },
  {
    group: 191,
    positionIndex: 0,
    src: 'models/tiles/G16.glb',
  },
  {
    group: 192,
    positionIndex: 0,
    src: 'models/tiles/G17.glb',
  },
  {
    group: 193,
    positionIndex: 0,
    src: 'models/tiles/G18.glb',
  },
  {
    group: 194,
    positionIndex: 0,
    src: 'models/tiles/G19.glb',
  },
  {
    group: 195,
    positionIndex: 0,
    src: 'models/tiles/G20.glb',
  },
  {
    group: 196,
    positionIndex: 0,
    src: 'models/tiles/G21.glb',
  },
  {
    group: 197,
    positionIndex: 0,
    src: 'models/tiles/G22.glb',
  },
  {
    group: 198,
    positionIndex: 0,
    src: 'models/tiles/G23.glb',
  },
  {
    group: 199,
    positionIndex: 0,
    src: 'models/tiles/G24.glb',
  },
  {
    group: 200,
    positionIndex: 0,
    src: 'models/tiles/G25.glb',
  },





  {
    group: 176,
    positionIndex: 0,
    src: 'models/tiles/H01.glb',
  },
  {
    group: 177,
    positionIndex: 0, 
    src: 'models/tiles/H02.glb',
  },
  {
    group: 178,
    positionIndex: 0, 
    src: 'models/tiles/H03.glb',
  },
  {
    group: 179,
    positionIndex: 0, 
    src: 'models/tiles/H04.glb',
  },
  {
    group: 180,
    positionIndex: 0,
    src: 'models/tiles/H05.glb',
  },
  {
    group: 181,
    positionIndex: 0, 
    src: 'models/tiles/H06.glb',
  },
  {
    group: 182,
    positionIndex: 0, 
    src: 'models/tiles/H07.glb',
  },
  {
    group: 183,
    positionIndex: 0, 
    src: 'models/tiles/H08.glb',
  },
  {
    group: 184,
    positionIndex: 0,
    src: 'models/tiles/H09.glb',
  },
  {
    group: 185,
    positionIndex: 0,
    src: 'models/tiles/H10.glb',
  },
  {
    group: 186,
    positionIndex: 0,
    src: 'models/tiles/H11.glb',
  },
  {
    group: 187,
    positionIndex: 0,
    src: 'models/tiles/H12.glb',
  },
  {
    group: 188,
    positionIndex: 0,
    src: 'models/tiles/H13.glb',
  },
  {
    group: 189,
    positionIndex: 0,
    src: 'models/tiles/H14.glb',
  },
  {
    group: 190,
    positionIndex: 0,
    src: 'models/tiles/H15.glb',
  },
  {
    group: 191,
    positionIndex: 0,
    src: 'models/tiles/H16.glb',
  },
  {
    group: 192,
    positionIndex: 0,
    src: 'models/tiles/H17.glb',
  },
  {
    group: 193,
    positionIndex: 0,
    src: 'models/tiles/H18.glb',
  },
  {
    group: 194,
    positionIndex: 0,
    src: 'models/tiles/H19.glb',
  },
  {
    group: 195,
    positionIndex: 0,
    src: 'models/tiles/H20.glb',
  },
  {
    group: 196,
    positionIndex: 0,
    src: 'models/tiles/H21.glb',
  },
  {
    group: 197,
    positionIndex: 0,
    src: 'models/tiles/H22.glb',
  },
  {
    group: 198,
    positionIndex: 0,
    src: 'models/tiles/H23.glb',
  },
  {
    group: 199,
    positionIndex: 0,
    src: 'models/tiles/H24.glb',
  },
  {
    group: 200,
    positionIndex: 0,
    src: 'models/tiles/H25.glb',
  },






  {
    group: 201,
    positionIndex: 0,
    src: 'models/tiles/I01.glb',
  },
  {
    group: 202,
    positionIndex: 0, 
    src: 'models/tiles/I02.glb',
  },
  {
    group: 203,
    positionIndex: 0, 
    src: 'models/tiles/I03.glb',
  },
  {
    group: 204,
    positionIndex: 0, 
    src: 'models/tiles/I04.glb',
  },
  {
    group: 205,
    positionIndex: 0,
    src: 'models/tiles/I05.glb',
  },
  {
    group: 206,
    positionIndex: 0, 
    src: 'models/tiles/I06.glb',
  },
  {
    group: 207,
    positionIndex: 0, 
    src: 'models/tiles/I07.glb',
  },
  {
    group: 208,
    positionIndex: 0, 
    src: 'models/tiles/I08.glb',
  },
  {
    group: 209,
    positionIndex: 0,
    src: 'models/tiles/I09.glb',
  },
  {
    group: 210,
    positionIndex: 0,
    src: 'models/tiles/I10.glb',
  },
  {
    group: 211,
    positionIndex: 0,
    src: 'models/tiles/I11.glb',
  },
  {
    group: 212,
    positionIndex: 0,
    src: 'models/tiles/I12.glb',
  },
  {
    group: 213,
    positionIndex: 0,
    src: 'models/tiles/I13.glb',
  },
  {
    group: 214,
    positionIndex: 0,
    src: 'models/tiles/I14.glb',
  },
  {
    group: 215,
    positionIndex: 0,
    src: 'models/tiles/I15.glb',
  },
  {
    group: 216,
    positionIndex: 0,
    src: 'models/tiles/I16.glb',
  },
  {
    group: 217,
    positionIndex: 0,
    src: 'models/tiles/I17.glb',
  },
  {
    group: 218,
    positionIndex: 0,
    src: 'models/tiles/I18.glb',
  },
  {
    group: 219,
    positionIndex: 0,
    src: 'models/tiles/I19.glb',
  },
  {
    group: 220,
    positionIndex: 0,
    src: 'models/tiles/I20.glb',
  },
  {
    group: 221,
    positionIndex: 0,
    src: 'models/tiles/I21.glb',
  },
  {
    group: 222,
    positionIndex: 0,
    src: 'models/tiles/I22.glb',
  },
  {
    group: 223,
    positionIndex: 0,
    src: 'models/tiles/I23.glb',
  },
  {
    group: 224,
    positionIndex: 0,
    src: 'models/tiles/I24.glb',
  },
  {
    group: 225,
    positionIndex: 0,
    src: 'models/tiles/I25.glb',
  },






  {
    group: 226,
    positionIndex: 0,
    src: 'models/tiles/J01.glb',
  },
  {
    group: 227,
    positionIndex: 0, 
    src: 'models/tiles/J02.glb',
  },
  {
    group: 228,
    positionIndex: 0, 
    src: 'models/tiles/J03.glb',
  },
  {
    group: 229,
    positionIndex: 0, 
    src: 'models/tiles/J04.glb',
  },
  {
    group: 230,
    positionIndex: 0,
    src: 'models/tiles/J05.glb',
  },
  {
    group: 231,
    positionIndex: 0, 
    src: 'models/tiles/J06.glb',
  },
  {
    group: 232,
    positionIndex: 0, 
    src: 'models/tiles/J07.glb',
  },
  {
    group: 233,
    positionIndex: 0, 
    src: 'models/tiles/J08.glb',
  },
  {
    group: 234,
    positionIndex: 0,
    src: 'models/tiles/J09.glb',
  },
  {
    group: 235,
    positionIndex: 0,
    src: 'models/tiles/J10.glb',
  },
  {
    group: 236,
    positionIndex: 0,
    src: 'models/tiles/J11.glb',
  },
  {
    group: 237,
    positionIndex: 0,
    src: 'models/tiles/J12.glb',
  },
  {
    group: 238,
    positionIndex: 0,
    src: 'models/tiles/J13.glb',
  },
  {
    group: 239,
    positionIndex: 0,
    src: 'models/tiles/J14.glb',
  },
  {
    group: 240,
    positionIndex: 0,
    src: 'models/tiles/J15.glb',
  },
  {
    group: 241,
    positionIndex: 0,
    src: 'models/tiles/J16.glb',
  },
  {
    group: 242,
    positionIndex: 0,
    src: 'models/tiles/J17.glb',
  },
  {
    group: 243,
    positionIndex: 0,
    src: 'models/tiles/J18.glb',
  },
  {
    group: 244,
    positionIndex: 0,
    src: 'models/tiles/J19.glb',
  },
  {
    group: 245,
    positionIndex: 0,
    src: 'models/tiles/J20.glb',
  },
  {
    group: 246,
    positionIndex: 0,
    src: 'models/tiles/J21.glb',
  },
  {
    group: 247,
    positionIndex: 0,
    src: 'models/tiles/J22.glb',
  },
  {
    group: 248,
    positionIndex: 0,
    src: 'models/tiles/J23.glb',
  },
  {
    group: 249,
    positionIndex: 0,
    src: 'models/tiles/J24.glb',
  },
  {
    group: 250,
    positionIndex: 0,
    src: 'models/tiles/J25.glb',
  },





  {
    group: 251,
    positionIndex: 0,
    src: 'models/tiles/K01.glb',
  },
  {
    group: 252,
    positionIndex: 0, 
    src: 'models/tiles/K02.glb',
  },
  {
    group: 253,
    positionIndex: 0, 
    src: 'models/tiles/K03.glb',
  },
  {
    group: 254,
    positionIndex: 0, 
    src: 'models/tiles/K04.glb',
  },
  {
    group: 255,
    positionIndex: 0,
    src: 'models/tiles/K05.glb',
  },
  {
    group: 256,
    positionIndex: 0, 
    src: 'models/tiles/K06.glb',
  },
  {
    group: 257,
    positionIndex: 0, 
    src: 'models/tiles/K07.glb',
  },
  {
    group: 258,
    positionIndex: 0, 
    src: 'models/tiles/K08.glb',
  },
  {
    group: 259,
    positionIndex: 0,
    src: 'models/tiles/K09.glb',
  },
  {
    group: 260,
    positionIndex: 0,
    src: 'models/tiles/K10.glb',
  },
  {
    group: 261,
    positionIndex: 0,
    src: 'models/tiles/K11.glb',
  },
  {
    group: 262,
    positionIndex: 0,
    src: 'models/tiles/K12.glb',
  },
  {
    group: 263,
    positionIndex: 0,
    src: 'models/tiles/K13.glb',
  },
  {
    group: 264,
    positionIndex: 0,
    src: 'models/tiles/K14.glb',
  },
  {
    group: 265,
    positionIndex: 0,
    src: 'models/tiles/K15.glb',
  },
  {
    group: 266,
    positionIndex: 0,
    src: 'models/tiles/K16.glb',
  },
  {
    group: 267,
    positionIndex: 0,
    src: 'models/tiles/K17.glb',
  },
  {
    group: 268,
    positionIndex: 0,
    src: 'models/tiles/K18.glb',
  },
  {
    group: 269,
    positionIndex: 0,
    src: 'models/tiles/K19.glb',
  },
  {
    group: 270,
    positionIndex: 0,
    src: 'models/tiles/K20.glb',
  },
  {
    group: 271,
    positionIndex: 0,
    src: 'models/tiles/K21.glb',
  },
  {
    group: 272,
    positionIndex: 0,
    src: 'models/tiles/K22.glb',
  },
  {
    group: 273,
    positionIndex: 0,
    src: 'models/tiles/K23.glb',
  },
  {
    group: 274,
    positionIndex: 0,
    src: 'models/tiles/K24.glb',
  },
  {
    group: 275,
    positionIndex: 0,
    src: 'models/tiles/K25.glb',
  },




  {
    group: 276,
    positionIndex: 0,
    src: 'models/tiles/L01.glb',
  },
  {
    group: 277,
    positionIndex: 0, 
    src: 'models/tiles/L02.glb',
  },
  {
    group: 278,
    positionIndex: 0, 
    src: 'models/tiles/L03.glb',
  },
  {
    group: 279,
    positionIndex: 0, 
    src: 'models/tiles/L04.glb',
  },
  {
    group: 280,
    positionIndex: 0,
    src: 'models/tiles/L05.glb',
  },
  {
    group: 281,
    positionIndex: 0, 
    src: 'models/tiles/L06.glb',
  },
  {
    group: 282,
    positionIndex: 0, 
    src: 'models/tiles/L07.glb',
  },
  {
    group: 283,
    positionIndex: 0, 
    src: 'models/tiles/L08.glb',
  },
  {
    group: 284,
    positionIndex: 0,
    src: 'models/tiles/L09.glb',
  },
  {
    group: 285,
    positionIndex: 0,
    src: 'models/tiles/L10.glb',
  },
  {
    group: 286,
    positionIndex: 0,
    src: 'models/tiles/L11.glb',
  },
  {
    group: 287,
    positionIndex: 0,
    src: 'models/tiles/L12.glb',
  },
  {
    group: 288,
    positionIndex: 0,
    src: 'models/tiles/L13.glb',
  },
  {
    group: 289,
    positionIndex: 0,
    src: 'models/tiles/L14.glb',
  },
  {
    group: 290,
    positionIndex: 0,
    src: 'models/tiles/L15.glb',
  },
  {
    group: 291,
    positionIndex: 0,
    src: 'models/tiles/L16.glb',
  },
  {
    group: 292,
    positionIndex: 0,
    src: 'models/tiles/L17.glb',
  },
  {
    group: 293,
    positionIndex: 0,
    src: 'models/tiles/L18.glb',
  },
  {
    group: 294,
    positionIndex: 0,
    src: 'models/tiles/L19.glb',
  },
  {
    group: 295,
    positionIndex: 0,
    src: 'models/tiles/L20.glb',
  },
  {
    group: 296,
    positionIndex: 0,
    src: 'models/tiles/L21.glb',
  },
  {
    group: 297,
    positionIndex: 0,
    src: 'models/tiles/L22.glb',
  },
  {
    group: 298,
    positionIndex: 0,
    src: 'models/tiles/L23.glb',
  },
  {
    group: 299,
    positionIndex: 0,
    src: 'models/tiles/L24.glb',
  },
  {
    group: 300,
    positionIndex: 0,
    src: 'models/tiles/L25.glb',
  },

 



  {
    group: 301,
    positionIndex: 0,
    src: 'models/tiles/M01.glb',
  },
  {
    group: 302,
    positionIndex: 0, 
    src: 'models/tiles/M02.glb',
  },
  {
    group: 303,
    positionIndex: 0, 
    src: 'models/tiles/M03.glb',
  },
  {
    group: 304,
    positionIndex: 0, 
    src: 'models/tiles/M04.glb',
  },
  {
    group: 305,
    positionIndex: 0,
    src: 'models/tiles/M05.glb',
  },
  {
    group: 306,
    positionIndex: 0, 
    src: 'models/tiles/M06.glb',
  },
  {
    group: 307,
    positionIndex: 0, 
    src: 'models/tiles/M07.glb',
  },
  {
    group: 308,
    positionIndex: 0, 
    src: 'models/tiles/M08.glb',
  },
  {
    group: 309,
    positionIndex: 0,
    src: 'models/tiles/M09.glb',
  },
  {
    group: 310,
    positionIndex: 0,
    src: 'models/tiles/M10.glb',
  },
  {
    group: 311,
    positionIndex: 0,
    src: 'models/tiles/M11.glb',
  },
  {
    group: 312,
    positionIndex: 0,
    src: 'models/tiles/M12.glb',
  },
  {
    group: 313,
    positionIndex: 0,
    src: 'models/tiles/M13.glb',
  },
  {
    group: 314,
    positionIndex: 0,
    src: 'models/tiles/M14.glb',
  },
  {
    group: 315,
    positionIndex: 0,
    src: 'models/tiles/M15.glb',
  },
  {
    group: 316,
    positionIndex: 0,
    src: 'models/tiles/M16.glb',
  },
  {
    group: 317,
    positionIndex: 0,
    src: 'models/tiles/M17.glb',
  },
  {
    group: 318,
    positionIndex: 0,
    src: 'models/tiles/M18.glb',
  },
  {
    group: 319,
    positionIndex: 0,
    src: 'models/tiles/M19.glb',
  },
  {
    group: 320,
    positionIndex: 0,
    src: 'models/tiles/M20.glb',
  },
  {
    group: 321,
    positionIndex: 0,
    src: 'models/tiles/M21.glb',
  },
  {
    group: 322,
    positionIndex: 0,
    src: 'models/tiles/M22.glb',
  },
  {
    group: 323,
    positionIndex: 0,
    src: 'models/tiles/M23.glb',
  },
  {
    group: 324,
    positionIndex: 0,
    src: 'models/tiles/M24.glb',
  },
  {
    group: 325,
    positionIndex: 0,
    src: 'models/tiles/M25.glb',
  },

  
];

export function createTile(
  parent: Entity | undefined,
  positionIndex: number, // Pass index of position data instead of position
  src: string
) {
  const entity = engine.addEntity()

  const tile = GltfContainer.create(entity, {
    src: src,
    visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS
  })

  const position = positionData[positionIndex]; // Get position data from array

  Transform.create(entity, { position: position.position, rotation: position.rotation, scale: position.scale })

  if (parent !== undefined) {
    Transform.create(entity, {
      position: position.position,
      parent: parent,
    })
  }

  return entity
}

export function removePaintings(entity: Entity) {
  engine.removeEntity(entity)
}























