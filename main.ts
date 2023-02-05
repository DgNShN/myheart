/**
 * 0,0 unplot
 * 
 * 01unplot
 * 
 * 02
 * 
 * 03
 * 
 * 04
 * 
 * 14
 * 
 * 24
 * 
 * 34
 * 
 * 44
 * 
 * 43
 * 
 * 42
 * 
 * 41
 * 
 * 40
 * 
 * 30
 * 
 * 20
 * 
 * 10
 */
basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    led.unplot(0, 0)
    basic.pause(500)
    led.unplot(2, 0)
    basic.pause(500)
    led.unplot(4, 0)
    basic.pause(500)
    led.unplot(0, 3)
    basic.pause(1000)
    led.unplot(0, 4)
    basic.pause(500)
    led.unplot(1, 4)
    basic.pause(500)
    led.unplot(3, 4)
    basic.pause(500)
    led.unplot(4, 3)
    basic.pause(500)
    led.unplot(4, 4)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(500)
    led.unplot(0, 0)
    basic.pause(500)
    led.unplot(0, 1)
    basic.pause(500)
    led.unplot(0, 2)
    basic.pause(500)
    led.unplot(0, 3)
    basic.pause(500)
    led.unplot(0, 4)
    basic.pause(1000)
    led.unplot(1, 4)
    basic.pause(1000)
    led.unplot(2, 4)
    basic.pause(500)
    led.unplot(3, 4)
    basic.pause(500)
    led.unplot(4, 4)
    basic.pause(500)
    led.unplot(4, 3)
    basic.pause(500)
    led.unplot(4, 2)
    basic.pause(500)
    led.unplot(4, 1)
    basic.pause(500)
    led.unplot(4, 0)
    basic.pause(500)
    led.unplot(3, 0)
    basic.pause(500)
    led.unplot(2, 0)
    basic.pause(500)
    led.unplot(1, 0)
    basic.pause(500)
    led.unplot(1, 4)
    basic.pause(500)
    led.unplot(0, 0)
    basic.pause(500)
    led.unplot(1, 3)
    basic.pause(1000)
    led.unplot(3, 3)
    basic.pause(500)
    led.unplot(2, 1)
    basic.pause(500)
})
