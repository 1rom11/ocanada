def on_forever():
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    music.play_tone(330, music.beat(BeatFraction.HALF))
    music.play_tone(349, music.beat(BeatFraction.HALF))
    music.play_tone(220, music.beat(BeatFraction.DOUBLE))
    music.play_tone(220, music.beat(BeatFraction.WHOLE))
    music.play_tone(247, music.beat(BeatFraction.WHOLE))
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    music.play_tone(294, music.beat(BeatFraction.WHOLE))
    music.play_tone(330, music.beat(BeatFraction.WHOLE))
    music.play_tone(349, music.beat(BeatFraction.WHOLE))
    music.play_tone(247, music.beat(BeatFraction.BREVE))
basic.forever(on_forever)
