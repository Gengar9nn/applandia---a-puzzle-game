sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false, effects.blizzard)
})
game.setDialogFrame(img`
. . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
. 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 . 
9 9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 
9 9 6 6 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 6 6 6 9 9 
. 9 9 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 9 9 . 
. . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . 
`)
game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`)
game.splash("ApplAndia", "A puzzle game")
game.showLongText("Move the ball around with joystick to avoid the bird for 60 seconds to win", DialogLayout.Full)
let mySprite = sprites.create(img`
. . . . . . . e e 4 . . . . . . 
. . . . e e e 2 2 4 e e . . . . 
. . c e e e e 2 2 e 2 2 e e . . 
. c e e e e e 2 4 e e 2 2 2 e . 
. c e e e 2 e 2 4 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.x = 50
mySprite.y = 50
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
let mySprite2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Enemy)
mySprite2.x = 100
mySprite2.y = 25
mySprite2.vx = 70
mySprite2.vy = 70
mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
mySprite2.ax = 36
mySprite2.ay = 36
animation.runImageAnimation(
mySprite2,
[img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b 5 5 b . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 b . 
b d d c d 5 5 b 5 4 4 4 4 4 4 b 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`,img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. b b b b b 5 5 5 5 5 5 5 b . . 
. b d 5 b 5 5 5 5 5 5 5 5 b . . 
. . b 5 5 b 5 d 1 f 5 d 4 f . . 
. . b d 5 5 b 1 f f 5 4 4 c . . 
b b d b 5 5 5 d f b 4 4 4 4 4 b 
b d d c d 5 5 b 5 4 4 4 4 4 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`,img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`,img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. . b d d 5 5 5 5 5 5 5 5 b . . 
. b d d d d 5 5 5 5 5 5 5 5 b . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
. b 5 5 b c d d 5 5 5 5 5 d b . 
b b c c c d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`,img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 d 4 c . . 
. . . . b 5 5 1 f f d d 4 4 4 b 
. . . . b 5 5 d f b 4 4 4 4 b . 
. . . b d 5 5 5 5 4 4 4 4 b . . 
. b b d d d 5 5 5 5 5 5 5 b . . 
b d d d b b b 5 5 5 5 5 5 5 b . 
c d d b 5 5 d c 5 5 5 5 5 5 b . 
c b b d 5 d c d 5 5 5 5 5 5 b . 
c b 5 5 b c d d 5 5 5 5 5 5 b . 
b b c c c d d d 5 5 5 5 5 d b . 
. . . . c c d d d 5 5 5 b b . . 
. . . . . . c c c c c b b . . . 
`,img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
. b b b d 5 5 5 5 5 4 4 4 4 4 b 
b d d d b b d 5 5 4 4 4 4 4 b . 
b b d 5 5 5 b 5 5 5 5 5 5 b . . 
c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
c b d c d 5 5 b 5 5 5 5 5 5 b . 
. c d d c c b d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
. . . . . . . . . . . . . . . . 
`],
500,
true
)
forever(function () {
    if (info.score() == 60) {
        game.over(true, effects.hearts)
        mySprite2 = sprites.create(img`
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 b c 5 5 d 4 c . . 
. b b b b 5 5 5 b f d d 4 4 4 b 
. b d 5 b 5 5 b c b 4 4 4 4 b . 
. . b 5 5 b 5 5 5 4 4 4 4 b . . 
. . b d 5 5 b 5 5 5 5 5 5 b . . 
. b d b 5 5 5 d 5 5 5 5 5 5 b . 
b d d c d 5 5 b 5 5 5 5 5 5 b . 
c d d d c c b 5 5 5 5 5 5 5 b . 
c b d d d d d 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
    }
})
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
})
