let lol = game.createSprite(0, 0)
let lol2 = game.createSprite(0, 1)
let lol3 = game.createSprite(0, 2)
while (true) {
    lol.move(1)
    lol2.move(1)
    lol3.move(1)
    lol3.turn(Direction.Right, 45)
    lol2.turn(Direction.Right, 45)
    lol.turn(Direction.Right, 45)
}
basic.forever(function () {
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Half))
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(131, music.beat(BeatFraction.Double))
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Whole))
    music.playTone(175, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Double))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(165, music.beat(BeatFraction.Double))
    music.playTone(185, music.beat(BeatFraction.Whole))
    music.playTone(185, music.beat(BeatFraction.Half))
    music.playTone(185, music.beat(BeatFraction.Eighth))
    music.playTone(196, music.beat(BeatFraction.Double))
    music.playTone(196, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(220, music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    for (let index = 0; index < 2; index++) {
        music.playTone(147, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Whole))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(165, music.beat(BeatFraction.Eighth))
        music.playTone(147, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(175, music.beat(BeatFraction.Eighth))
        music.playTone(165, music.beat(BeatFraction.Eighth))
        music.playTone(175, music.beat(BeatFraction.Half))
        music.playTone(196, music.beat(BeatFraction.Half))
        music.playTone(220, music.beat(BeatFraction.Whole))
        music.playTone(196, music.beat(BeatFraction.Whole))
        music.playTone(175, music.beat(BeatFraction.Whole))
        music.playTone(165, music.beat(BeatFraction.Whole))
        music.playTone(147, music.beat(BeatFraction.Double))
        music.rest(music.beat(BeatFraction.Whole))
    }
    music.playTone(131, music.beat(BeatFraction.Breve))
    music.rest(music.beat(BeatFraction.Whole))
})
