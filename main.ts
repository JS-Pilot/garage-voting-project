radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.No)
        basic.clearScreen()
    } else if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() <= 30) {
        radio.sendString("voting ended")
    } else {
        yes += 1
        radio.sendNumber(1)
    }
})
function winning_result () {
    if (no == yes) {
        yes_or_no = randint(0, 1)
        if (yes_or_no == 0) {
            return 0
        } else if (yes_or_no == 1) {
            return 1
        }
    } else if (no > yes) {
        return 0
    } else if (no < yes) {
        return 1
    }
    return 0
}
input.onButtonPressed(Button.AB, function () {
    radio.sendValue("winner", winning_result())
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (input.lightLevel() <= 30) {
        radio.sendString("voting ended")
    } else {
        no += 1
        radio.sendNumber(0)
    }
})
radio.onReceivedValue(function (name, value) {
    if (value == 0) {
        basic.showString("no")
    } else if (value == 1) {
        basic.showString("yes")
    }
})
let yes_or_no = 0
let yes = 0
let no = 0
radio.setGroup(1)
radio.setTransmitPower(7)
no = 0
yes = 0
