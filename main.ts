input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    for (let index = 0; index < 2; index++) {
        music.playMelody("C5 - C5 - C5 - C5 - ", 100)
    }
    for (let index = 0; index < 10; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        basic.pause(200)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
})
input.onButtonPressed(Button.B, function () {
    music.stopAllSounds()
    for (let index = 0; index < 4; index++) {
        music.playMelody("B A B A B A B C ", 169)
    }
    RobotCar_Keyestudio.Motors.steer(40, -10)
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P5, 24, NeoPixelMode.RGB)
RobotCar_Keyestudio.Leds.showBlue()
basic.showLeds(`
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . . . # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    . . # # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . . . . #
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . . . # #
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . # # # #
    . . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # . . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # . . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # . .
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.pause(1000)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
basic.clearScreen()
basic.forever(function () {
    RobotCar_Keyestudio.Leds.showRed()
    basic.showString("Crime scene")
})
basic.forever(function () {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 1930, 789, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
})
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(150)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(150)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(150)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(150)
})
