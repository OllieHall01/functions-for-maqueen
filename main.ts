let LFSR = 0
let LFSL = 0
// 90 Degree Turn
function HardLeft () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
    basic.pause(100)
}
// 90 Degree Turn
function HardRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 60)
    basic.pause(100)
}
function LineFollowing () {
    LFSR = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    LFSL = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    if (LFSL == 1 && LFSR == 1) {
        Straight()
    } else if (LFSR == 1) {
        SoftLeft()
    } else if (LFSL == 1) {
        SoftRight()
    } else {
        Straight()
    }
}
function AvoidingObject () {
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 5) {
        SoftRight()
    }
    while (maqueen.Ultrasonic(PingUnit.Centimeters) > 10) {
        SoftLeft()
    }
}
function ObjectAvoidance () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 50)
    basic.pause(200)
    while (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        Stop()
    }
}
function Straight () {
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 60)
}
function SoftRight () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 60)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
}
function Stop () {
    maqueen.motorStop(maqueen.Motors.All)
}
function SoftLeft () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 60)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        ObjectAvoidance()
        AvoidingObject()
    }
    if ((LFSL || LFSR) == 1) {
        LineFollowing()
    }
})
