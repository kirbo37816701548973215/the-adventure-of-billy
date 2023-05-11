enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const weapons = SpriteKind.create()
    export const npc = SpriteKind.create()
    export const background = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.weapons, function (sprite, otherSprite) {
    if (attacking) {
        if (0 == randint(0, 6)) {
            sprites.destroy(sprite, effects.fountain, 200)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`staring zone`)
    dungeon_start = 0
    tiles.setTileAt(tiles.getTileLocation(10, 12), sprites.dungeon.chestOpen)
    tiles.placeOnRandomTile(sword, sprites.dungeon.floorMixed)
    tiles.placeOnRandomTile(player2, sprites.dungeon.floorMixed)
    info.setLife(20)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundCenter, function (sprite, location) {
    if (0 == randint(0, 350)) {
        tiles.setTileAt(location, assets.tile`myTile0`)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    pause(200)
    No_animations = 0
    animation.stopAnimation(animation.AnimationTypes.All, player2)
    player2.setImage(assets.image`billy the guy`)
    player2.startEffect(effects.smiles, 1000)
    tiles.setTileAt(tiles.getTileLocation(10, 12), sprites.dungeon.chestOpen)
    sword = sprites.create(assets.image`sword`, SpriteKind.weapons)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    sword.setPosition(166, 200)
    have_sword = 1
    No_animations = 1
})
info.onLifeZero(function () {
    pause(200)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`poison trap`, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.darkGroundCenter)
    info.changeLifeBy(-0.5)
    music.setVolume(80)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    music.setVolume(200)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`dungeon_growth`)
    tiles.placeOnRandomTile(player2, sprites.dungeon.darkGroundNorthWest1)
    tiles.placeOnRandomTile(sword, sprites.dungeon.darkGroundNorthWest1)
    for (let index = 0; index < 20; index++) {
        dungeon_start = 1
        Babykaiju = sprites.create(assets.image`monster`, SpriteKind.Enemy)
        animation.runImageAnimation(
        Babykaiju,
        assets.animation`myAnim`,
        200,
        true
        )
        tiles.placeOnRandomTile(Babykaiju, sprites.dungeon.darkGroundCenter)
        Babykaiju.follow(player2, 50)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (0 == randint(0, 5)) {
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
        info.changeLifeBy(-1)
    }
    otherSprite.setPosition(player2.x + randint(-40, 40), player2.y + randint(-40, 40))
    animation.runImageAnimation(
    otherSprite,
    assets.animation`myAnim0`,
    50,
    false
    )
    pause(250)
    otherSprite.setImage(assets.image`monster`)
})
let player_direction = 0
let weapon_direction = 0
let Babykaiju: Sprite = null
let dungeon_start = 0
let attacking = 0
let No_animations = 0
let have_sword = 0
let player2: Sprite = null
let sword: Sprite = null
let billy_animation = sprites.create(assets.image`myImage`, SpriteKind.background)
scaling.scaleToPercent(billy_animation, 150, ScaleDirection.Uniformly, ScaleAnchor.Middle)
billy_animation.setPosition(123, 80)
let begingin_anim = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.background)
billy_animation.z = 20
begingin_anim.setPosition(0, 30)
animation.runImageAnimation(
begingin_anim,
assets.animation`myAnim1`,
700,
false
)
pause(3000)
sprites.destroy(begingin_anim)
scene.setBackgroundImage(assets.image`montainne`)
let princess_house = sprites.create(assets.image`myImage0`, SpriteKind.background)
princess_house.setPosition(35, 96)
scaling.scaleToPercent(princess_house, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
let dark_chateau = sprites.create(assets.image`myImage2`, SpriteKind.background)
scaling.scaleToPercent(dark_chateau, 130, ScaleDirection.Uniformly, ScaleAnchor.Middle)
dark_chateau.setPosition(126, 47)
pause(2000)
let princess = sprites.create(assets.image`princess`, SpriteKind.background)
princess.setPosition(35, 110)
pause(500)
let dark_lord = sprites.create(assets.image`dark lord`, SpriteKind.background)
dark_lord.setPosition(126, 60)
scaling.scaleToPercent(dark_lord, 60, ScaleDirection.Uniformly, ScaleAnchor.Middle)
pause(1000)
scaling.scaleToPercent(dark_lord, 80, ScaleDirection.Uniformly, ScaleAnchor.Middle)
dark_lord.setPosition(102, 80)
let textSprite = textsprite.create("!!!", 0, 15)
textSprite.setPosition(80, 100)
pause(2000)
scaling.scaleToPercent(dark_lord, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
dark_lord.setPosition(58, 100)
pause(1000)
animation.runImageAnimation(
princess,
assets.animation`myAnim2`,
200,
false
)
pause(1000)
sprites.destroyAllSpritesOfKind(SpriteKind.background)
sword = sprites.create(assets.image`sword`, SpriteKind.weapons)
sprites.destroy(sword)
player2 = sprites.create(assets.image`billy the guy`, SpriteKind.Player)
music.setVolume(200)
controller.moveSprite(player2, 110, 110)
info.setLife(20)
tiles.setCurrentTilemap(tilemap`staring zone`)
player2.setPosition(166, 240)
have_sword = 0
No_animations = 1
player2.setBounceOnWall(true)
forever(function () {
    if (controller.down.isPressed()) {
        weapon_direction = 1
    } else if (controller.left.isPressed()) {
        weapon_direction = 2
    } else if (controller.up.isPressed()) {
        weapon_direction = 3
    } else if (controller.right.isPressed()) {
        weapon_direction = 4
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        player_direction = 1
    } else if (controller.left.isPressed()) {
        player_direction = 2
    } else if (controller.up.isPressed()) {
        player_direction = 3
    } else if (controller.right.isPressed()) {
        player_direction = 4
    } else {
        player_direction = 0
    }
})
forever(function () {
    if (No_animations) {
        if (have_sword) {
            if (controller.A.isPressed()) {
                if (1 == weapon_direction) {
                    scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.y = player2.y + randint(20, 30)
                    attacking = 1
                    sword.startEffect(effects.fire, 500)
                    animation.runImageAnimation(
                    sword,
                    assets.animation`sword attack down`,
                    100,
                    false
                    )
                    scene.cameraShake(7, 200)
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                    pause(400)
                    scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.setImage(assets.image`sword`)
                    attacking = 0
                } else if (2 == weapon_direction) {
                    scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.x = player2.x - randint(30, 40)
                    attacking = 1
                    sword.startEffect(effects.fire, 500)
                    animation.runImageAnimation(
                    sword,
                    assets.animation`sword attack left`,
                    70,
                    false
                    )
                    scene.cameraShake(7, 200)
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                    pause(400)
                    scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.setImage(assets.image`sword`)
                    attacking = 0
                } else if (3 == weapon_direction) {
                    scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.y = player2.y - randint(20, 30)
                    attacking = 1
                    sword.startEffect(effects.fire, 500)
                    animation.runImageAnimation(
                    sword,
                    assets.animation`sword attack`,
                    100,
                    false
                    )
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                    scene.cameraShake(7, 200)
                    pause(400)
                    scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.setImage(assets.image`sword`)
                    attacking = 0
                } else if (4 == weapon_direction) {
                    scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.x = player2.x + randint(20, 30)
                    attacking = 1
                    sword.startEffect(effects.fire, 500)
                    animation.runImageAnimation(
                    sword,
                    assets.animation`sword attack right`,
                    100,
                    false
                    )
                    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                    scene.cameraShake(7, 200)
                    pause(400)
                    scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                    sword.setImage(assets.image`sword`)
                    attacking = 0
                }
            }
            sword.setImage(assets.image`sword`)
        }
    }
})
forever(function () {
    if (No_animations) {
        if (1 == player_direction) {
            animation.runImageAnimation(
            player2,
            assets.animation`walking back`,
            100,
            false
            )
            pause(400)
        } else if (4 == player_direction) {
            animation.runImageAnimation(
            player2,
            assets.animation`walking right`,
            100,
            false
            )
            pause(400)
        } else if (3 == player_direction) {
            animation.runImageAnimation(
            player2,
            assets.animation`walking forward`,
            100,
            false
            )
            pause(400)
        } else if (2 == player_direction) {
            animation.runImageAnimation(
            player2,
            assets.animation`walking left`,
            100,
            false
            )
            pause(400)
        }
    }
})
forever(function () {
    if (have_sword) {
        sword.setStayInScreen(true)
        sword.follow(player2, 80)
        sword.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    scene.cameraFollowSprite(player2)
})
forever(function () {
    if (0 == player_direction) {
        animation.stopAnimation(animation.AnimationTypes.All, player2)
        player2.setImage(assets.image`billy the guy`)
        No_animations = 0
    }
    if (0 < player_direction) {
        No_animations = 1
    }
    if (controller.A.isPressed()) {
        No_animations = 1
    }
})
