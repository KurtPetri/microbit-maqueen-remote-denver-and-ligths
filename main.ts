IR.IR_callbackUser(function (number) {
    if (number == forwardKey) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        driveForward(speed)
    }
    // Bak
    if (number == backwardKey) {
        driveBackward(speed)
maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
    // Drej til højre
    if (number == leftKey) {
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        turnLeft(turnSpeed)
    }
    // Drej til venstre
    if (number == rightKey) {
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        turnRight(turnSpeed)
    }
    if (number == speedUpKey) {
        speedUp(speed)
    }
    if (number == speedDownKey) {
        speedDown(speed)
    }
    // Stop
    if (number == stopKey || number == stopKey2) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    // turn off lights
    if (number == stopKey) {
        strip.clear()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    }
    function driveForward(speed: number) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    }
function turnLeft(speed: number) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    }
function driveBackward(speed: number) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, speed)
    }
function turnRight(speed: number) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, speed)
    }
function speedUp(speed: number) {
        speed = speed + 1;
    }
function speedDown(speed: number) {
        speed = speed - 1;
        if (speed < 10)
            speed = 10;
    }
})
input.onButtonPressed(Button.A, function () {
    strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
    strip.showRainbow(1, 360)
    strip.show()
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
})
let strip: neopixel.Strip = null
let stopKey2 = 0
let stopKey = 0
let rightKey = 0
let leftKey = 0
let backwardKey = 0
let forwardKey = 0
let speedUpKey = 0
let speedDownKey = 0
let speed = 40
let turnSpeed = 25
speedDownKey = 65
speedUpKey = 66
forwardKey = 11
backwardKey = 14
leftKey = 17
rightKey = 16
stopKey = 10
stopKey2 = 13
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.show()
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
