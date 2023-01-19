controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    while (!(controller.B.isPressed())) {
    	
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    while (!(controller.B.isPressed())) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . 2 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, -100)
        projectile.setFlag(SpriteFlag.AutoDestroy, true)
        pause(200)
    }
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 . . . . . . . 
    . . . . . 7 8 7 8 7 . . . . . . 
    . . . . . 7 7 7 7 7 . . . . . . 
    . . . . 7 7 8 8 8 7 7 . . . . . 
    . . . 7 8 8 8 7 8 8 8 7 . . . . 
    . . . 7 7 7 8 7 8 7 7 7 . . . . 
    . . . . . 7 8 7 8 7 . . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . 7 8 7 . 7 8 7 . . . . . 
    . . . . . 7 . . . 7 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.y = 110
controller.moveSprite(mySprite, 75, 0)
