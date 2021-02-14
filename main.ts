input.onGesture(Gesture.LogoUp, function () {
    music.playMelody("E F G - E F G - ", 120)
})
input.onGesture(Gesture.TiltRight, function () {
    music.playMelody("E - D - E - - - ", 120)
})
input.onGesture(Gesture.TiltLeft, function () {
    for (let index = 0; index < 2; index++) {
        music.playMelody("D E F G - D E - ", 120)
    }
})
input.onGesture(Gesture.LogoDown, function () {
    music.playMelody("C D E C - C D E ", 120)
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
