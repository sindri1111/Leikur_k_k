// Hér setjum við inn alla fleka og stiga sem búa til leikborðið
import btmLvlLeft from "../img/bottom-level-left.png"
import btmLvlRight from "../img/bottom-level-right.png"
import lvlTwoLeft from  "../img/level-two-left.png"
import lvlTwoRight from "../img/level-two-right-floor.png"
import lvlThree from "../img/level-three.png"
import lvlFour from "../img/level-four.png"
import lvlFive from "../img/level-five.png"
import lvlSix from "../img/level-six.png"
import topLvl from "../img/top-level-floor.png"
import stairs from "../img/stairs.png"
import skyTwo from "../img/sky-2.png"
import skyOne from "../img/sky-1.png"
import scoreBoard from "../img/score-board.png"
import door from "../img/door.png"

import playerStandingRight from "../img/cyborg_idle.png"
import playerStandingleft from "../img/cyborg_idle_left.png"
import playerRunningRight from "../img/cyborg_run.png"
import playerRunningLeft from "../img/cyborg_run_left.png"
import playerClimbing from "../img/cyborg_climb.png"
import playerJumpRight from "../img/cyborg_jump.png"
import playerJumpLeft from "../img/cyborg_jump_left.png"
import playerDeathRight from "../img/cyborg_death.png"
import playerDeathLeft from "../img/cyborg_death_left.png"

// import enemyStandingOne from "../img/door.png"
// import enemyRunningOne from "../img/door.png"

// import enemyStandingTwo from "../img/door.png"
// import enemyRunningTwo from "../img/door.png"


const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 650
canvas.height = 700


// Hér ætlum við að láta þyngdaraflið líkja eftir eðleilegur hreifingum á karakterunum.
const gravity = 0.5

// Hér búum við til klasa sem býr til karakter í leiknum. 
class Player {
    constructor() {
        this.speed = 5
        this.position = {
            x:10,
            y:600
        },
        this.velocity = {
            x: 0,
            y: 0
        },
        this.width = 60
        this.height = 60

        this.Image = createImage(playerStandingRight)
        this.frames = 0
      
        this.movement = {
          stand: {
            right: createImage(playerStandingRight),
            left: createImage(playerStandingleft)
          },
          run: {
            right: createImage(playerRunningRight),
            left: createImage(playerRunningLeft)
          },
          climb: {
            up: createImage(playerClimbing)
          },
          jump: {
            right: createImage(playerJumpRight),
            left: createImage(playerJumpLeft)
          },
          death: {
            right: createImage(playerDeathRight),
            left: createImage(playerDeathLeft)
          }
        }

        this.currentpos = this.movement.stand.right
    }

    // Fall sem teiknar karakterinn
    draw() {
      ctx.drawImage(
        this.currentpos, 
        48 * this.frames,
        0,
        48,
        48,
        this.position.x, 
        this.position.y, 
        this.width, 
        this.height)
    }
    

    // Fall sem uppfærir karakterinn reglulega
    update() {
        this.frames++
              if (this.frames > 3 && (this.currentpos === this.movement.stand.right||
                                      this.currentpos === this.movement.stand.left)) 
                                      this.frames = 0 
              if  (this.frames > 3 && (this.currentpos === this.movement.run.right ||
                                      this.currentpos === this.movement.run.left)) 
                                      this.frames = 0
              if  (this.frames > 3 && (this.currentpos === this.movement.jump.right || 
                                      this.currentpos === this.movement.jump.left)) 
                                      this.frames = 0
              if  (this.frames > 5 && this.currentpos === this.movement.climb.up) 
                                      this.frames = 0
              if  (this.frames > 5 && (this.currentpos === this.movement.death.right ||
                                      this.currentpos === this.movement.death.left)) 
                                      this.frames = 0

        this.draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y


        if (this.position.y + this.height +
            this.velocity.y <= canvas.height)
            this.velocity.y += gravity
    }
}
console.log(Player);
// class Enemies {
//     constructor( {x, y} ) {
//         this.position = {
//             x,
//             y
//         }
//         this.velocity = {
//             x: 0,
//             y: 0
//         }
//         this.width = 30
//         this.height = 40
//     } 

//     // Fall sem teiknar karakterinn
//     draw() {
//         ctx.fillStyle = 'red'
//         ctx.fillRect(this.position.x, this.position.y, 
//             this.width, this.height)
//     }

//     update() {
//         this.draw()
//         this.position.x += this.velocity.x
//         this.position.y += this.velocity.y


//         if (this.position.y + this.height +
//             this.velocity.y <= canvas.height)
//             this.velocity.y += gravity
//     }
// }


class Platform {
    constructor( {x, y, image} ) {
        this.position = {
            x,
            y
        }
        this.image = image
        this.width = image.width
        this.height = image.height           
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y)
    }
}
console.log(Platform);

function createImage(imageSrc) {
    let image = new Image()
    image.src = imageSrc
    return image
}


let platforms = [ 
  new Platform( {x: 0, y: 670, image: createImage(btmLvlLeft) }),
  new Platform( {x: 394, y: 670, image: createImage(btmLvlRight) }),
  new Platform( {x: 202, y: 542, image: createImage(lvlTwoRight) }),
  new Platform( {x: 0, y: 422, image: createImage(lvlThree) }),
  new Platform( {x: 522, y: 358, image: createImage(lvlFour) }),
  new Platform( {x: 0, y: 294, image: createImage(lvlFive) }),
  new Platform( {x: 332, y: 230, image: createImage(lvlSix) }),
  new Platform( {x: 0, y: 100, image: createImage(topLvl) }),
  new Platform( {x: 300, y: 340, image: createImage(skyTwo) }),
  new Platform( {x: 100, y: 200, image: createImage(skyOne) }),
  new Platform( {x: 550, y: 20, image: createImage(scoreBoard) }),
  new Platform( {x: 10, y: 50, image: createImage(door) }),
  new Platform( {x: 586, y: 542, image: createImage(stairs) }),
  new Platform( {x: 459, y: 102, image: createImage(stairs) }),
  new Platform( {x: 32, y: 422, image: createImage(stairs) }),
  new Platform( {x: 554, y: 230, image: createImage(stairs) }),
  new Platform( {x: 0, y: 542, image: createImage(lvlTwoLeft) })
]
let player = new Player() 

let lastKey
const keys = {
    right:{
        pressed: false
    }, 
    left:{
        pressed: false
    },
    jump:{
      pressed: false
    }
}


function Init() {
  player = new Player()
} 

function animate() {
    requestAnimationFrame(animate)  

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    platforms.forEach(imageSrc => {
      imageSrc.draw() 
  })  

    player.update()
    
    // ef ýtt er á hægri takka og leikmaður á x ás er minni en 620px þá 
    // færist hann áfram um 5 oh hins vegar ef ýtt er á vinstri takka og leikmaður er 
    // staðsetttur á yfir 0px fer hann í hina áttina um sama bil. annars fer leikmaður
    // ekki lengra.
    if (keys.right.pressed && player.position.x < 620) {
        player.velocity.x = player.speed
    }   else if (keys.left.pressed && player.position.x > 0) {
        player.velocity.x = -player.speed
    }   else player.velocity.x = 0 

    // fall sem lætur karakterinn okkar stoppa um leið og hann snertir flöt á platformi
    platforms.forEach(imageSrc => {
    if (player.position.y + player.height <= 
        imageSrc.position.y && player.position.y + 
        player.height + player.velocity.y >= 
        imageSrc.position.y && player.position.x + player.width >=
        imageSrc.position.x && player.position.x <=
        imageSrc.position.x + imageSrc.width) 
        {
        player.velocity.y = 0
        }
      })

    platforms.forEach(stairs => {
      if (player.position.x + player.width <= 
          stairs.position.x + stairs.width && 
          player.position.x + player.width + player.velocity.x >= 
          stairs.position.x && player.position.x + player.width >=
          stairs.position.x && player.position.x <=
          stairs.position.x + stairs.width) 
          {
          player.velocity.x = 0
          }
        })

    // Hér látum við karakterinn okkar skipta eðlilega á milli svæða í myndaseriunni.  
    if (keys.right.pressed && lastKey === 'right' && player.currentpos !== player.movement.run.right) {
      player.frames = 1
      player.currentpos = player.movement.run.right
    } 
    else if (keys.left.pressed && lastKey === 'left' && player.currentpos !== player.movement.run.left) {
            player.currentpos = player.movement.run.left
      }
    else if (!keys.right.pressed && lastKey === 'right' && player.currentpos !== player.movement.stand.right) {
        player.currentpos = player.movement.stand.left
      }
    else if (!keys.left.pressed && lastKey === 'left' && player.currentpos !== player.movement.stand.left) {
        player.currentpos = player.movement.stand.left
      }
    //   else if (keys.jump.pressed && lastKey === 'right' && player.currentpos !== player.movement.jump.right) {
    //     player.currentpos = player.movement.jump.right
    //     player.velocity.y -= 7.5
        
    //   }
    // else if (keys.jump.pressed && lastKey === 'left' && player.currentpos !== player.movement.jump.left) {
    //     player.currentpos = player.movement.jump.left 
        
    //   }
    

        // Hérna erum við að segja leiknum okkar að byrja upp á nýtt ef 
        // leikmaður nær ekki að stökkva yfir bil og deyr. Notum þá init. 
    if (player.position.y > canvas.height) {
      Init()
  }
}
Init()
animate()

// aðgerðir þegar við ýtum á valda takka á lyklaborðinu
addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 65: case 37:
            console.log('left')
            keys.left.pressed = true
            lastKey = 'left'
            break
        
        case 83: case 40:
            console.log('down')
            keys.down.pressed = true
            lastKey = 'down'
            break

        case 68: case 39:
            console.log('right')
            keys.right.pressed = true
            lastKey = 'right'
            break

        case 87: case 38:
            console.log('up')
            keys.down.pressed = true
            lastKey = 'up'
            break

        case 32:
            console.log('jump')
            keys.jump.pressed = true
            player.velocity.y -= 7.5
            lastKey = 'jump'
            break
    }
})

// aðgerðir þegar við sleppum völdum tökkum á lyklaborðinu
addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 65: case 37:
            console.log('left')
            keys.left.pressed = false
            lastKey = 'left'
            break
        
        case 83: case 40:
            console.log('down')
            keys.down.pressed = false
            lastKey = 'down'
            break

        case 68: case 39:
            console.log('right')
            keys.right.pressed = false
            lastKey = 'right'
            break

        case 87: case 38:
            console.log('up')
            keys.up.pressed = false
            lastKey = 'up'
            break

        case 32:
            console.log('jump')
            keys.jump.pressed = false
            lastKey = 'jump'
            break
    }
})
