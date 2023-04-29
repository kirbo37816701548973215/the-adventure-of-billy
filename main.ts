enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace SpriteKind {
    export const weapons = SpriteKind.create()
    export const npc = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.weapons, function (sprite, otherSprite) {
    if (attacking) {
        if (0 < randint(-1, 1)) {
            sprites.destroy(sprite, effects.disintegrate, 200)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    tiles.setTileAt(tiles.getTileLocation(10, 12), sprites.dungeon.chestOpen)
    sword = sprites.create(assets.image`sword`, SpriteKind.weapons)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
    sword.setPosition(166, 200)
    have_sword = 1
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairEast, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`staring zone`)
    tiles.setTileAt(tiles.getTileLocation(10, 12), sprites.dungeon.chestOpen)
    tiles.placeOnRandomTile(sword, sprites.dungeon.floorMixed)
    tiles.placeOnRandomTile(player2, sprites.dungeon.floorMixed)
    info.setLife(10)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
})
info.onLifeZero(function () {
    pause(200)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`dungeon start`)
    tiles.placeOnRandomTile(player2, sprites.dungeon.darkGroundNorthWest1)
    tiles.placeOnRandomTile(sword, sprites.dungeon.darkGroundNorthWest1)
    for (let index = 0; index < 20; index++) {
        Babykaiju = sprites.create(assets.image`monster`, SpriteKind.Enemy)
        animation.runImageAnimation(
        Babykaiju,
        assets.animation`myAnim`,
        200,
        true
        )
        Babykaiju.follow(player2, 45)
        tiles.placeOnRandomTile(Babykaiju, sprites.dungeon.darkGroundEast)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (0 < randint(0, 40)) {
        info.changeLifeBy(-1)
        music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
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
let Babykaiju: Sprite = null
let attacking = 0
let have_sword = 0
let sword: Sprite = null
let player2: Sprite = null
sprites.destroy(player2)
player2 = sprites.create(assets.image`billy the guy`, SpriteKind.Player)
sword = sprites.create(assets.image`sword`, SpriteKind.weapons)
sprites.destroy(sword)
controller.moveSprite(player2, 80, 80)
info.setLife(10)
tiles.setCurrentTilemap(tilemap`staring zone`)
player2.setPosition(166, 240)
have_sword = 0
forever(function () {
    if (have_sword) {
        sword.setStayInScreen(true)
        sword.follow(player2, 80)
        sword.setFlag(SpriteFlag.GhostThroughWalls, true)
    }
    scene.cameraFollowSprite(player2)
})
forever(function () {
    if (have_sword) {
        if (controller.left.isPressed()) {
            if (controller.A.isPressed()) {
                scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.x = sword.x - randint(20, 30)
                attacking = 1
                sword.startEffect(effects.fire, 500)
                animation.runImageAnimation(
                sword,
                assets.animation`sword attack left`,
                70,
                false
                )
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                pause(400)
                scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.setImage(assets.image`sword`)
                attacking = 0
            }
        }
    }
})
forever(function () {
    if (have_sword) {
        if (controller.up.isPressed()) {
            if (controller.A.isPressed()) {
                scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.y = sword.y - randint(20, 30)
                attacking = 1
                sword.startEffect(effects.fire, 500)
                animation.runImageAnimation(
                sword,
                assets.animation`sword attack`,
                70,
                false
                )
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                pause(400)
                scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.setImage(assets.image`sword`)
                attacking = 0
            }
        }
    }
})
forever(function () {
    if (have_sword) {
        if (controller.right.isPressed()) {
            if (controller.A.isPressed()) {
                scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.x = sword.x + randint(20, 30)
                attacking = 1
                sword.startEffect(effects.fire, 500)
                animation.runImageAnimation(
                sword,
                assets.animation`sword attack right`,
                70,
                false
                )
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                pause(400)
                scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.setImage(assets.image`sword`)
                attacking = 0
            }
        }
    }
})
forever(function () {
    if (have_sword) {
        if (controller.down.isPressed()) {
            if (controller.A.isPressed()) {
                scaling.scaleToPercent(sword, 200, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.y = sword.y + randint(20, 30)
                attacking = 1
                sword.startEffect(effects.fire, 500)
                animation.runImageAnimation(
                sword,
                assets.animation`sword attack down`,
                70,
                false
                )
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
                pause(400)
                scaling.scaleToPercent(sword, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
                sword.setImage(assets.image`sword`)
                attacking = 0
            }
        }
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        player2,
        assets.animation`walking left`,
        100,
        false
        )
        pause(400)
        player2.setImage(assets.image`billy the guy`)
    }
})
forever(function () {
    if (controller.up.isPressed()) {
        animation.runImageAnimation(
        player2,
        assets.animation`walking forward`,
        100,
        false
        )
        pause(400)
        player2.setImage(assets.image`billy the guy`)
    }
})
forever(function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        player2,
        assets.animation`walking right`,
        100,
        false
        )
        pause(400)
        player2.setImage(assets.image`billy the guy`)
    }
})
forever(function () {
    if (controller.down.isPressed()) {
        animation.runImageAnimation(
        player2,
        assets.animation`walking back`,
        100,
        false
        )
        pause(400)
        player2.setImage(assets.image`billy the guy`)
    }
})
