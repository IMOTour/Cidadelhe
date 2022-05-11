var APP_DATA = {
  "scenes": [
    {
      "id": "0-front",
      "name": "Front",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.4442812702171963,
        "pitch": 0.017278602044083158,
        "fov": 1.5188326933667722
      },
      "linkHotspots": [
        {
          "yaw": 2.3172244926776244,
          "pitch": -0.17353997011556999,
          "rotation": 0,
          "target": "1-storage-1"
        },
        {
          "yaw": -3.063934252227357,
          "pitch": -0.15729925579733894,
          "rotation": 6.283185307179586,
          "target": "2-storage-2"
        },
        {
          "yaw": -2.843579125346503,
          "pitch": 0.041651133155035325,
          "rotation": 0.7853981633974483,
          "target": "3-steps-to-1st-floor"
        },
        {
          "yaw": -2.556319991448447,
          "pitch": -0.23923444406476513,
          "rotation": 3.141592653589793,
          "target": "4-terrace"
        },
        {
          "yaw": 1.914018743056812,
          "pitch": 0.012526118754246696,
          "rotation": 0.7853981633974483,
          "target": "10-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-storage-1",
      "name": "Storage 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.8424337560594974,
        "pitch": 0.25367898617136575,
        "fov": 1.5188326933667722
      },
      "linkHotspots": [
        {
          "yaw": -2.9527695927764306,
          "pitch": -0.04579926224945474,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-storage-2",
      "name": "Storage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.4749992111232277,
        "pitch": 0.18569154816708178,
        "fov": 1.5188326933667722
      },
      "linkHotspots": [
        {
          "yaw": -0.9762321333541415,
          "pitch": 0.02549448278553612,
          "rotation": 0,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-steps-to-1st-floor",
      "name": "Steps to 1st floor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8650575146466952,
          "pitch": 0.32098348504129426,
          "rotation": 3.141592653589793,
          "target": "0-front"
        },
        {
          "yaw": -0.2387384281688476,
          "pitch": -0.21605461667792625,
          "rotation": 0,
          "target": "4-terrace"
        },
        {
          "yaw": -2.043199431466231,
          "pitch": -0.5966875793166349,
          "rotation": 0,
          "target": "2-storage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.21233149354680414,
          "pitch": 0.35209292501046185,
          "rotation": 3.141592653589793,
          "target": "0-front"
        },
        {
          "yaw": 0.9687466931424069,
          "pitch": 0.7310765329172533,
          "rotation": 3.141592653589793,
          "target": "3-steps-to-1st-floor"
        },
        {
          "yaw": 2.269533489948051,
          "pitch": 0.580022423846863,
          "rotation": 3.141592653589793,
          "target": "7-entrance"
        },
        {
          "yaw": 2.2480616844957053,
          "pitch": -0.17807630907010363,
          "rotation": 0,
          "target": "8-kitchen"
        },
        {
          "yaw": -2.2875965765389026,
          "pitch": 0.11847196798972348,
          "rotation": 3.141592653589793,
          "target": "5-terrace-far-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-terrace-far-side",
      "name": "Terrace far side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8321808588179813,
          "pitch": 0.2622566655122771,
          "rotation": 3.141592653589793,
          "target": "4-terrace"
        },
        {
          "yaw": 0.5361528475499977,
          "pitch": -0.17481091649811376,
          "rotation": 3.141592653589793,
          "target": "6-land"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-land",
      "name": "Land",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4199471937176718,
          "pitch": 0.19371037245916511,
          "rotation": 3.141592653589793,
          "target": "5-terrace-far-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0386339102028685,
          "pitch": 0.6163743514770808,
          "rotation": 3.141592653589793,
          "target": "4-terrace"
        },
        {
          "yaw": -0.8372242410470658,
          "pitch": -0.21024690237688404,
          "rotation": 5.497787143782138,
          "target": "8-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7268408432265572,
          "pitch": -0.0052360892328557895,
          "rotation": 5.497787143782138,
          "target": "4-terrace"
        },
        {
          "yaw": -2.792007721941287,
          "pitch": -0.10148049135913872,
          "rotation": 5.497787143782138,
          "target": "9-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.22300791640704,
          "pitch": 0.030831513669578925,
          "rotation": 0.7853981633974483,
          "target": "8-kitchen"
        },
        {
          "yaw": 3.079976098844961,
          "pitch": -0.019650552206371685,
          "rotation": 0,
          "target": "10-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-sitting-room",
      "name": "Sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.010461279781758037,
          "pitch": 0.08069719878565174,
          "rotation": 0.7853981633974483,
          "target": "9-hall"
        },
        {
          "yaw": 1.3559283885061344,
          "pitch": 0.0866583270296033,
          "rotation": 0,
          "target": "11-bedroom"
        },
        {
          "yaw": -1.679737469976068,
          "pitch": -0.002833906951813958,
          "rotation": 4.71238898038469,
          "target": "0-front"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9346394631260768,
          "pitch": 0.02430695918327075,
          "rotation": 0,
          "target": "10-sitting-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
