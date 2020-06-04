function efeito01 () {
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 0)
        led.plot(0, 4 - x)
        led.plot(4 - x, 4)
        led.plot(4, x)
        basic.pause(randint(8, 15) * velocidade)
        led.unplot(x, 0)
        led.unplot(4 - x, 4)
        led.unplot(0, 4 - x)
        led.unplot(4, x)
    }
}
function efeito03 () {
    led.setBrightness(randint(0, 255))
    led.plot(randint(0, 4), randint(0, 4))
    led.setBrightness(randint(0, 255))
    led.plot(randint(0, 4), randint(0, 4))
    led.setBrightness(randint(0, 255))
    led.plot(randint(0, 4), randint(0, 4))
    led.setBrightness(randint(0, 255))
    led.plot(randint(0, 4), randint(0, 4))
    basic.pause(20 * velocidade)
    basic.clearScreen()
}
function efeito02 () {
    for (let externo = 0; externo <= 4; externo++) {
        reverso = 4 - externo
        for (let interno = 0; interno <= 4; interno++) {
            led.plot(externo, reverso)
            basic.pause(velocidade)
            led.plot(reverso, externo)
            basic.pause(velocidade)
            led.plot(reverso - interno, reverso)
            basic.pause(velocidade)
            led.plot(reverso, reverso - interno)
            basic.pause(velocidade)
        }
    }
    for (let externo = 0; externo <= 4; externo++) {
        reverso = 4 - externo
        for (let interno = 0; interno <= 4; interno++) {
            led.unplot(externo, reverso)
            basic.pause(velocidade)
            led.unplot(reverso, externo)
            basic.pause(velocidade)
            led.unplot(reverso - interno, reverso)
            basic.pause(velocidade)
            led.unplot(reverso, reverso - interno)
            basic.pause(velocidade)
        }
    }
}
let opcao = 0
let reverso = 0
let velocidade = 0
velocidade = 5
basic.forever(function () {
    opcao = randint(1, 6)
    if (opcao < 3) {
        for (let index = 0; index < randint(3, 6); index++) {
            efeito01()
        }
    } else if (opcao > 4) {
        for (let index = 0; index < randint(2, 4); index++) {
            efeito02()
        }
    } else {
        for (let index = 0; index < randint(6, 15); index++) {
            efeito03()
        }
    }
})
